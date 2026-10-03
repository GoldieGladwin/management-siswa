import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_ANON_KEY!
);

export async function GET() {
    // Data fetching Siswa, Kelas, Pelanggaran
    const [siswaResult, kelasResult, pelanggaranResult] = await Promise.all([
        supabase.from('siswas').select('*, kelas(*)'),
        supabase.from('kelas').select('*'),
        supabase.from('pelanggarans').select('*, siswa:siswas(*, kelas(*))'),
    ]);

    if (siswaResult.error) throw siswaResult.error;
    if (kelasResult.error) throw kelasResult.error;
    if (pelanggaranResult.error) throw pelanggaranResult.error;

    const siswas = siswaResult.data || [];
    const kelas = kelasResult.data || [];
    const pelanggaran = pelanggaranResult.data || [];

    const totalSiswa = siswas.length;
    const totalKelas = kelas.length;


    //Pie Data
    const pie_data = [
        {
            name: 'Laki-laki',
            value: siswas.filter(s => s.jenis_kelamin === 'L').length
        },
        {
            name: 'Perempuan',
            value: siswas.filter(s => s.jenis_kelamin === 'P').length
        },
    ];

    //Bar Data
    const kelasGrouped = siswas.reduce((acc, siswa) => {
        const namaKelas = siswa.kelas?.kelas || 'Tidak Diketahui';
        if (!acc[namaKelas]) {
            acc[namaKelas] = { 'L': 0, 'P': 0 };
        }
        if (siswa.jenis_kelamin == 'L') {
            acc[namaKelas]['L']++;
        } else if (siswa.jenis_kelamin === 'P') {
            acc[namaKelas]['P']++;
        }
        return acc;
    }, {} as Record<string, { 'L': number; 'P': number }>);

    const bar_data = Object.entries(kelasGrouped).map(([nama_kelas, counts]) => ({
        nama_kelas,
        'Laki-Laki': (counts as { 'L': number; 'P': number })['L'],
        'Perempuan': (counts as { 'L': number; 'P': number })['P'],
    }));

    //Tahun lahir Data
    const birthYearGrouped = siswas.reduce((acc, siswa) => {
        const year = new Date(siswa.tanggal_lahir).getFullYear().toString();
        acc[year] = (acc[year] || 0) + 1;
        return acc;
    }, {} as Record<string, number>);

    const bar_data_birthyear = Object.entries(birthYearGrouped)
        .map(([year, count]) => ({ year, count: count as number }))
        .sort((a, b) => parseInt(a.year) - parseInt(b.year));

        //Total Pelanggaran
        const totalPelanggaran = pelanggaran.length;

        //Monthly Violations (last 6 Months)
        const now = new Date();
        const months = Array.from({ length: 6 }, (_, i) => {
            const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
            return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
        }).reverse();

        const pelanggaranTren = months.map(month => {
            const filtered = pelanggaran.filter(p => {
                const pMonth = p.tanggal.substring(0, 7); //"2025-01"
                return pMonth === month;
            });

            return {
                bulan: month,
                Aktif: filtered.filter(p => p.status === 'Aktif').length,
                Selesai: filtered.filter(p => p.status === 'Selesai').length,
            };
        });

        //Pelanggaran Types
        const jenisGrouped = pelanggaran.reduce((acc, p) => {
            acc[p.jenis_pelanggaran] = (acc[p.jenis_pelanggaran] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        const pelanggaranPerJenis = Object.entries(jenisGrouped).map(([jenis_pelanggaran, total]) => ({
            jenis_pelanggaran,
            total: total as number,
        }));

        // Severity Distribution
        const tingkatGrouped = pelanggaran.reduce((acc, p) => {
            acc[p.tingkat] = (acc[p.tingkat] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        const pelanggaranPerTingkat = Object.entries(tingkatGrouped).map(([tingkat, total]) => ({
            tingkat,
            total: total as number,
        }));

        // Top Violators
        const kelasGroupedPelanggaran = pelanggaran.reduce((acc, p) => {
            const namaKelas = p.siswa?.kelas?.kelas || 'Tidak Diketahui';
            acc[namaKelas] = (acc[namaKelas] || 0) + 1;
            return acc;
        }, {} as Record<string, number>);

        const pelanggaranPerKelas = Object.entries(kelasGroupedPelanggaran)
        .map(([kelas, total]) => ({ kelas, total: total as number}))
        .sort((a, b) => (b.total as number) - (a.total as number));

        // Response Json
        return NextResponse.json({
            totalSiswa,
            totalKelas,
            totalPelanggaran,
            pie_data,
            bar_data,
            bar_data_birthyear,
            pelanggaranTren,
            pelanggaranPerJenis,
            pelanggaranPerTingkat,
            pelanggaranPerKelas
        })
}