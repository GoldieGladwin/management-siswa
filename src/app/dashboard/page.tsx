"use client";

import React, { useEffect, useState } from "react";
import { Users, GraduationCap, TrendingUp, AlertTriangle } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import SiswaChart from "@/components/Dashboard/SiswaChart";
import GenderRatioChart from "@/components/Dashboard/GenderRatioChart";
import ViolationTrendChart from "@/components/Dashboard/TrenPelanggaran";
import ViolationTypesList from "@/components/Dashboard/TipePelanggaran";
import TingkatPelanggaranList from "@/components/Dashboard/TingkatPelanggaran";
import TopViolatorsList from "@/components/Dashboard/TopPelanggaran";
import BirthYearDistribution from "@/components/Dashboard/BirthYearDistribution";
import { DataTahunLahir, DataBar, DataPie, ViolationStats } from "@/types";

// Tipe data

export default function DashboardPage() {
  const [totalSiswa, setTotalSiswa] = useState(0);
  const [totalKelas, setTotalKelas] = useState(0);
  const [pieData, setPieData] = useState<DataPie[]>([]);
  const [barData, setBarData] = useState<DataBar[]>([]);
  const [yearData, setYearData] = useState<DataTahunLahir[]>([]);
  const [violationStats, setViolationStats] = useState<ViolationStats>({
    totalViolations: 0,
    monthlyViolations: [],
    violationTypes: [],
    severityDistribution: [],
    topViolators: [],
  });
const [birthYearData, setBirthYearData] = useState<DataTahunLahir[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/dashboard");
        const data = await res.json();

        if (data.error) throw new Error(data.error);

        setTotalSiswa(data.totalSiswa || 0);
        setTotalKelas(data.totalKelas || 0);
        setPieData(data.pie_data ||[]);
        setBarData(data.bar_data ||[]);
        setBirthYearData(data.bar_data_birthyear || []);
      setViolationStats({
               totalViolations: data.totalPelanggaran || 0,
          monthlyViolations: (data.pelanggaranTren || []).map ((item: any) => ({
            month: item.bulan,
            violations: item.Aktif,
            resolved: item.Selesai,
          })),
              violationTypes: (data.pelanggaranPerJenis || []).map((item: any) => ({
                type: item.jenis_pelanggaran,
                count: item.total,
                percentage: 0,
              })),
              severityDistribution: (data.pelanggaranPerTingkat || []).map((item: any) => ({
                severity: item.tingkat,
                count: item.total,
                color:
                  item.tingkat === "Ringan"
                  ? "#22c55e"
                  : item.tingkat == "Sedang"
                  ? "#3b82f6"
                  : "ef4444",
              })),
              topViolators: (data.pelanggaranPerKelas || []).map((item: any) => ({
                name: item.kelas,
                violations: item.total,
              })),
            });
          } catch (error) {
            //
          }
        }
        fetchData();
    }, []);
        
  return (
    <div className="min-h-screen from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto p-6 space-y-8 ">
        <div className="bg-white rounded-2xl shadow-md p-8 space-y-8">
        {/* Header */}
        <h1 className="text-2xl font-bold bg-Linear-to-r from-gray-900 to-gray-600 bg-clip-text text-black">
          Dashboard Siswa
        </h1>

        {/* Main Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard title="Siswa" value={totalSiswa} icon={Users} color="bg-blue-500" subtitle="Siswa aktif" badge="Aktif" />
          <StatCard title="Kelas" value={totalKelas} icon={GraduationCap} color="bg-green-500" subtitle="Kelas aktif" />
          <StatCard title="Rata-rata/Kelas" value={totalKelas ? Math.round(totalSiswa / totalKelas) : 0} icon={TrendingUp} color="bg-amber-500" subtitle="Siswa per kelas" />
          <StatCard title="Pelanggaran" value={violationStats.totalViolations} icon={AlertTriangle} color="bg-red-500" subtitle="Total pelanggaran" />
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          <SiswaChart data={barData} />
          <GenderRatioChart data={pieData} />
          <ViolationTrendChart data={violationStats.monthlyViolations} />
          <ViolationTypesList data={violationStats.violationTypes} total={violationStats.totalViolations} />
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TingkatPelanggaranList data={violationStats.severityDistribution} />
          <TopViolatorsList data={violationStats.topViolators} />
          <BirthYearDistribution data={birthYearData} />
        </div>
        </div>
      </div>
    </div>
  );
}

// Komponen Kartu Statistik
interface StatCardProps {
  title: string;
  value: number;
  icon: React.ElementType;
  color: string;
  subtitle: string;
  badge?: string;
}

function StatCard({ title, value, icon: Icon, color, subtitle, badge }: StatCardProps) {
  return (
    <>
      <Card className="rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
        <CardHeader className="flex flex-row items-center justify-between pb-3">
          <div>
            <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
            {badge && <Badge variant="secondary" className="text-xs">{badge}</Badge>}
          </div>
          <div className={`p-3 rounded-xl ${color} group-hover:scale-110 transition-transform duration-200`}>
            <Icon className="h-5 w-5 text-white" />
          </div>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="text-3xl font-bold">{value}</div>
          <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
        </CardContent>
      </Card>
    </>
  );
}