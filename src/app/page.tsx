"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Users,
  ShieldAlert,
  BarChart3,
  FileSpreadsheet,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Lock,
  Search,
  School,
  TrendingUp,
  Menu,
  X,
} from "lucide-react";

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Users,
      title: "Data Siswa Terpusat",
      description:
        "Kelola seluruh biodata siswa, NIS, status aktif, dan profil lengkap dalam satu database terorganisir.",
      badge: "Database",
      bgLight: "bg-blue-50 text-blue-600 border-blue-100",
    },
    {
      icon: School,
      title: "Manajemen Kelas & Rombel",
      description:
        "Pengelompokan siswa per kelas industri, pembagian wali kelas, dan pemantauan kapasitas ruang belajar.",
      badge: "Akademik",
      bgLight: "bg-indigo-50 text-indigo-600 border-indigo-100",
    },
    {
      icon: ShieldAlert,
      title: "Pencatatan Pelanggaran",
      description:
        "Sistem poin kedisiplinan akurat, kategori ringan hingga berat, upload bukti foto, serta riwayat penindakan.",
      badge: "Kedisiplinan",
      bgLight: "bg-rose-50 text-rose-600 border-rose-100",
    },
    {
      icon: BarChart3,
      title: "Visualisasi & Analitik",
      description:
        "Dashboard statistik interaktif yang menyajikan tren kasus, rasio gender, dan distribusi siswa secara visual.",
      badge: "Insight",
      bgLight: "bg-emerald-50 text-emerald-600 border-emerald-100",
    },
    {
      icon: FileSpreadsheet,
      title: "Export Laporan Cepat",
      description:
        "Unduh rekapitulasi data siswa dan rekaman pelanggaran dalam format PDF dan Excel hanya dengan satu klik.",
      badge: "Export",
      bgLight: "bg-amber-50 text-amber-600 border-amber-100",
    },
    {
      icon: Lock,
      title: "Keamanan Terintegrasi",
      description:
        "Autentikasi akun aman berbasis cloud Supabase untuk menjaga kerahasiaan data sekolah dan siswa.",
      badge: "Security",
      bgLight: "bg-violet-50 text-violet-600 border-violet-100",
    },
  ];

  const steps = [
    {
      num: "01",
      title: "Kelola Rombel & Siswa",
      desc: "Input data master kelas dan daftarkan profil siswa secara lengkap dan cepat.",
    },
    {
      num: "02",
      title: "Catat Aktivitas & Kasus",
      desc: "Dokumentasikan pelanggaran dengan poin otomatis, kategori, dan lampiran bukti.",
    },
    {
      num: "03",
      title: "Pantau & Ekspor Laporan",
      desc: "Lihat grafik analitik real-time dan unduh laporan berkala untuk evaluasi sekolah.",
    },
  ];

  const stats = [
    { value: "100%", label: "Real-Time Tracking" },
    { value: "5x", label: "Lebih Cepat Rekap Data" },
    { value: "PDF & Excel", label: "Dukungan Export" },
    { value: "Cloud Base", label: "Akses Kapan Saja" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-blue-50/30 to-white text-slate-800 selection:bg-blue-600 selection:text-white">
      {/* Background Decorative Blur Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-400/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-40 w-96 h-96 bg-indigo-400/15 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 right-1/3 w-96 h-96 bg-sky-400/15 rounded-full blur-3xl" />
      </div>

      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/25">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
                SIM-Siswa
              </span>
              <span className="hidden sm:inline-block ml-2 text-xs font-medium px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 border border-blue-200">
                Industri
              </span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#fitur" className="hover:text-blue-600 transition-colors">
              Fitur Utama
            </a>
            <a href="#alur" className="hover:text-blue-600 transition-colors">
              Alur Kerja
            </a>
            <a href="#keunggulan" className="hover:text-blue-600 transition-colors">
              Keunggulan
            </a>
          </nav>

          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/auth/login"
              className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 rounded-lg transition-colors"
            >
              Masuk
            </Link>
            <Link
              href="/dashboard"
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-200 flex items-center gap-1.5"
            >
              Dashboard
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden px-4 pt-2 pb-6 bg-white/95 backdrop-blur-md border-b border-slate-200 space-y-3">
            <a
              href="#fitur"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-700 hover:text-blue-600"
            >
              Fitur Utama
            </a>
            <a
              href="#alur"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-700 hover:text-blue-600"
            >
              Alur Kerja
            </a>
            <a
              href="#keunggulan"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium text-slate-700 hover:text-blue-600"
            >
              Keunggulan
            </a>
            <div className="pt-2 flex flex-col gap-2">
              <Link
                href="/auth/login"
                className="w-full text-center py-2 text-sm font-medium text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50"
              >
                Masuk
              </Link>
              <Link
                href="/dashboard"
                className="w-full text-center py-2 text-sm font-medium text-white bg-blue-600 rounded-xl hover:bg-blue-700 shadow-md shadow-blue-500/20"
              >
                Buka Dashboard
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative z-10 pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-blue-700 text-xs sm:text-sm font-medium mb-8 shadow-xs">
            <Sparkles className="w-4 h-4 text-blue-600 animate-pulse" />
            <span>Sistem Informasi Manajemen Siswa & Kelas Industri</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mx-auto leading-[1.18]">
            Kelola Data Siswa & Pantau Kedisiplinan Secara{" "}
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 bg-clip-text text-transparent">
              Cerdas & Terpadu
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Platform modern untuk administrasi siswa, manajemen rombongan belajar,
            pencatatan poin pelanggaran, serta monitoring kedisiplinan sekolah secara real-time.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/dashboard"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-200 flex items-center justify-center gap-2 group"
            >
              Akses Dashboard
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/auth/login"
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm hover:border-slate-300 transition-all flex items-center justify-center gap-2"
            >
              Login Pengguna
            </Link>
          </div>

          {/* Quick Metrics Bar */}
          <div className="mt-14 max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/70 backdrop-blur-md border border-slate-200/80 shadow-sm">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="p-3 text-center border-r last:border-r-0 border-slate-100"
              >
                <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 font-medium mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {/* MOCKUP PREVIEW CARD */}
          <div className="mt-14 relative max-w-5xl mx-auto">
            <div className="relative rounded-2xl bg-slate-900/5 p-2 ring-1 ring-slate-900/10 shadow-2xl">
              <div className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-inner">
                {/* Browser topbar mock */}
                <div className="bg-slate-100/90 px-4 py-3 border-b border-slate-200 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-400" />
                    <div className="w-3 h-3 rounded-full bg-amber-400" />
                    <div className="w-3 h-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="mx-auto text-xs font-mono text-slate-400 bg-white px-6 py-1 rounded-md border border-slate-200 flex items-center gap-2">
                    <Search className="w-3 h-3 text-slate-400" />
                    app/dashboard/overview
                  </div>
                </div>

                {/* Dashboard preview content */}
                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4 bg-slate-50/50">
                  <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-xs flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Users className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs text-slate-500">Total Siswa</span>
                      <p className="text-xl font-bold text-slate-800">540+ Siswa</p>
                      <span className="text-[10px] text-emerald-600 font-medium">● Aktif di Kelas Industri</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-xs flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                      <School className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs text-slate-500">Rombongan Belajar</span>
                      <p className="text-xl font-bold text-slate-800">18 Kelas</p>
                      <span className="text-[10px] text-blue-600 font-medium">● Terintegrasi Terpusat</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-xs flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
                      <ShieldAlert className="w-6 h-6" />
                    </div>
                    <div className="text-left">
                      <span className="text-xs text-slate-500">Monitoring Kasus</span>
                      <p className="text-xl font-bold text-slate-800">Poin & Bukti</p>
                      <span className="text-[10px] text-amber-600 font-medium">● Evaluasi Otomatis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="fitur" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
              Fitur Lengkap
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
              Solusi Terpadu Manajemen Sekolah
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Dirancang khusus untuk memudahkan tata kelola data siswa dan pemantauan
              kedisiplinan harian dengan akurat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="group relative bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.bgLight} transition-transform group-hover:scale-110`}
                      >
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {item.badge}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                    <span>Lihat di Dashboard</span>
                    <ChevronRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / ALUR */}
      <section id="alur" className="py-20 bg-slate-100/60 relative z-10 border-y border-slate-200/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full border border-indigo-100">
              Alur Kerja
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900">
              Bagaimana Sistem Bekerja?
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Hanya dengan 3 langkah sederhana untuk memulai pengelolaan siswa dan kedisiplinan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-7 border border-slate-200/80 shadow-xs relative overflow-hidden"
              >
                <div className="text-4xl font-black text-slate-100 absolute -top-1 -right-1 select-none">
                  {step.num}
                </div>
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white font-bold flex items-center justify-center mb-5 text-sm shadow-md shadow-blue-500/20">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ADVANTAGES / KEUNGGULAN */}
      <section id="keunggulan" className="py-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                Keunggulan
              </span>
              <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
                Efisiensi Administrasi Sekolah Tanpa Hambatan
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Tinggalkan pencatatan manual berbasis buku yang rentan hilang atau rusak. Sistem ini
                memberikan transparansi penuh bagi guru, wali kelas, dan pimpinan sekolah.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  "Pencatatan pelanggaran dilengkapi bukti foto dan rekam tindakan",
                  "Klasifikasi bobot poin sesuai standar tata tertib sekolah",
                  "Rekap otomatis per siswa, kelas, dan rentang tanggal tertentu",
                  "Mudah digunakan di perangkat desktop, laptop, maupun tablet",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-9">
                <Link
                  href="/dashboard/siswa"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Eksplorasi Data Siswa Sekarang
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 sm:p-10 text-white shadow-xl shadow-blue-500/20 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/20">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  Transparansi & Kedisiplinan Terjaga
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed mb-6">
                  Setiap tindakan tercatat rapi sehingga proses pembinaan siswa berlangsung adil,
                  terarah, dan memiliki rekam jejak yang jelas.
                </p>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/15">
                  <div>
                    <div className="text-2xl font-extrabold">100%</div>
                    <div className="text-xs text-blue-200">Data Terorganisir</div>
                  </div>
                  <div>
                    <div className="text-2xl font-extrabold">Instant</div>
                    <div className="text-xs text-blue-200">Generate Report</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-16 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-cyan-600/20 pointer-events-none" />
            <div className="relative z-10 max-w-2xl mx-auto">
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                Siap Meningkatkan Manajemen Siswa Anda?
              </h2>
              <p className="mt-4 text-slate-300 text-sm sm:text-base">
                Mulai gunakan dashboard untuk mempermudah monitoring data dan kedisiplinan siswa hari ini.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/dashboard"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-slate-900 bg-white hover:bg-slate-100 shadow-lg transition-all"
                >
                  Buka Dashboard Sekarang
                </Link>
                <Link
                  href="/auth/login"
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
                >
                  Masuk Akun
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-white border-t border-slate-200 py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="font-bold text-slate-800 text-sm">
              Sistem Informasi Manajemen Siswa
            </span>
          </div>
          <p className="text-xs text-slate-500 text-center sm:text-right">
            &copy; {new Date().getFullYear()} SIM-Siswa. Dikembangkan untuk efisiensi & kedisiplinan kelas industri.
          </p>
        </div>
      </footer>
    </div>
  );
}
