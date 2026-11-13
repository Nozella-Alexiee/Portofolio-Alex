import React, { useState, useMemo } from "react";
import { TrendingUp, Calculator, Sparkles } from "lucide-react";

export default function FinanceSimulator() {
  const [initialDeposit, setInitialDeposit] = useState(5000000); // 5 Juta
  const [monthlyContribution, setMonthlyContribution] = useState(500000); // 500 Ribu
  const [annualRate, setAnnualRate] = useState(7); // 7%
  const [years, setYears] = useState(10); // 10 Tahun

  const presets = [
    { label: "SMP / Modal Awal", p: 1000000, m: 100000, r: 6, y: 5 },
    { label: "Siswa Magang", p: 5000000, m: 500000, r: 8, y: 10 },
    { label: "Investor Pemula", p: 15000000, m: 1500000, r: 10, y: 15 },
  ];

  const applyPreset = (preset) => {
    setInitialDeposit(preset.p);
    setMonthlyContribution(preset.m);
    setAnnualRate(preset.r);
    setYears(preset.y);
  };

  // Calculate monthly compound interest
  const simulationData = useMemo(() => {
    const monthlyRate = annualRate / 100 / 12;
    const totalMonths = years * 12;
    let balance = initialDeposit;
    let totalDeposited = initialDeposit;
    const points = [];

    for (let month = 0; month <= totalMonths; month++) {
      if (month > 0) {
        balance = (balance + monthlyContribution) * (1 + monthlyRate);
        totalDeposited += monthlyContribution;
      }
      if (month % 12 === 0 || month === totalMonths) {
        points.push({
          year: Math.round(month / 12),
          balance: Math.round(balance),
          totalDeposited: Math.round(totalDeposited),
        });
      }
    }

    const finalBalance = points[points.length - 1].balance;
    const finalDeposited = points[points.length - 1].totalDeposited;
    const profit = finalBalance - finalDeposited;
    const profitPercent = finalDeposited > 0 ? (profit / finalDeposited) * 100 : 0;

    return {
      points,
      finalBalance,
      finalDeposited,
      profit,
      profitPercent,
    };
  }, [initialDeposit, monthlyContribution, annualRate, years]);

  const formatIDR = (val) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Generate SVG path for chart
  const chartSvg = useMemo(() => {
    const width = 600;
    const height = 240;
    const padding = 20;
    const maxVal = Math.max(...simulationData.points.map((p) => p.balance), 1);

    const getX = (index) => padding + (index / (simulationData.points.length - 1)) * (width - padding * 2);
    const getY = (val) => height - padding - (val / maxVal) * (height - padding * 2);

    const linePoints = simulationData.points.map((p, i) => `${getX(i)},${getY(p.balance)}`).join(" ");
    const depositPoints = simulationData.points.map((p, i) => `${getX(i)},${getY(p.totalDeposited)}`).join(" ");

    const areaPoints = `${padding},${height - padding} ${linePoints} ${width - padding},${height - padding}`;

    return { width, height, linePoints, depositPoints, areaPoints };
  }, [simulationData]);

  return (
    <section id="simulasi" className="py-20 relative z-10">
      <div className="max-w-5xl mx-auto space-y-10 px-4">
        
        {/* Section Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-cyan-400 text-xs font-mono font-semibold">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive Financial Lab</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Kalkulator <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">Bunga Majemuk</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Simulasi pertumbuhan eksponensial modal investasi dengan formula bunga majemuk bulanan.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="text-xs text-slate-400 font-mono mr-1">Preset Cepat:</span>
          {presets.map((preset, idx) => (
            <button
              key={idx}
              onClick={() => applyPreset(preset)}
              className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-300 border border-white/10 hover:border-blue-400/40 transition-colors"
            >
              {preset.label}
            </button>
          ))}
        </div>

        {/* Simulator Grid */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 space-y-5">
            {/* Modal Awal */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Modal Awal Investasi</span>
                <span className="font-mono font-bold text-cyan-400">{formatIDR(initialDeposit)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="50000000"
                step="500000"
                value={initialDeposit}
                onChange={(e) => setInitialDeposit(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer"
              />
            </div>

            {/* Setoran Bulanan */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Setoran Rutin per Bulan</span>
                <span className="font-mono font-bold text-cyan-400">{formatIDR(monthlyContribution)}</span>
              </div>
              <input
                type="range"
                min="0"
                max="5000000"
                step="50000"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer"
              />
            </div>

            {/* Bunga Tahunan */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Estimasi Imbal Hasil / Bunga Tahunan</span>
                <span className="font-mono font-bold text-cyan-400">{annualRate}% per tahun</span>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                step="0.5"
                value={annualRate}
                onChange={(e) => setAnnualRate(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer"
              />
            </div>

            {/* Jangka Waktu */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center text-xs">
                <span className="text-slate-400 font-medium">Jangka Waktu Investasi</span>
                <span className="font-mono font-bold text-cyan-400">{years} Tahun ({years * 12} Bulan)</span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="w-full accent-blue-500 cursor-pointer"
              />
            </div>

            <p className="text-[11px] font-mono text-slate-500 pt-1">
              Rumus: A = P(1 + r/n)^(nt) + PMT × [((1 + r/n)^(nt) - 1) / (r/n)]
            </p>
          </div>

          {/* Results + Dynamic Chart Column */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
            
            {/* Total Balance Card */}
            <div className="p-6 rounded-2xl bg-black/40 border border-blue-500/30 space-y-2">
              <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider">Estimasi Saldo Akhir</span>
              <p className="text-3xl sm:text-4xl font-black text-white font-mono tracking-tight">
                {formatIDR(simulationData.finalBalance)}
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-3 border-t border-white/10 text-xs">
                <div>
                  <span className="text-slate-400">Total Uang Disetor:</span>
                  <p className="font-mono font-bold text-slate-200 mt-0.5">
                    {formatIDR(simulationData.finalDeposited)}
                  </p>
                </div>
                <div>
                  <span className="text-slate-400">Keuntungan Bunga:</span>
                  <p className="font-mono font-bold text-green-400 mt-0.5">
                    +{formatIDR(simulationData.profit)} ({simulationData.profitPercent.toFixed(1)}%)
                  </p>
                </div>
              </div>
            </div>

            {/* Live SVG Curve Chart */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-[11px] text-slate-400 font-mono">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  Saldo Akhir (Termasuk Bunga)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-0.5 bg-slate-400" />
                  Uang Pokok Disetor
                </span>
              </div>

              <div className="w-full bg-black/40 rounded-2xl p-2 border border-white/5 overflow-hidden">
                <svg
                  viewBox={`0 0 ${chartSvg.width} ${chartSvg.height}`}
                  className="w-full h-36"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
                    </linearGradient>
                  </defs>

                  {/* Gradient Area */}
                  <polygon points={chartSvg.areaPoints} fill="url(#chartGrad)" />

                  {/* Deposited line (Dashed) */}
                  <polyline
                    points={chartSvg.depositPoints}
                    fill="none"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    strokeDasharray="4 4"
                  />

                  {/* Compounded balance curve */}
                  <polyline
                    points={chartSvg.linePoints}
                    fill="none"
                    stroke="#38bdf8"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
