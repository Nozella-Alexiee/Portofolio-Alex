import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, DollarSign, Calendar, Percent, Info, ArrowUpRight } from 'lucide-react';
import { hitungMajemuk, formatRupiah } from '../data/portfolioData';

export default function FinanceSimulator() {
  const [modalAwal, setModalAwal] = useState(1000000);
  const [setoranBulanan, setSetoranBulanan] = useState(300000);
  const [bungaTahunan, setBungaTahunan] = useState(10);
  const [durasiTahun, setDurasiTahun] = useState(5);
  const [showTable, setShowTable] = useState(false);

  const hasil = useMemo(() => {
    return hitungMajemuk(Number(modalAwal), Number(setoranBulanan), Number(bungaTahunan), Number(durasiTahun));
  }, [modalAwal, setoranBulanan, bungaTahunan, durasiTahun]);

  const persentaseBunga = hasil.saldoAkhir > 0
    ? Math.round((hasil.totalBunga / hasil.saldoAkhir) * 100)
    : 0;

  return (
    <section id="simulasi" className="py-16 md:py-24 border-t border-slate-900/80 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/50 text-blue-400 text-xs font-mono font-medium mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Finance Interactive Widget</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kalkulator Bunga Majemuk
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Simulasi pertumbuhan modal bulanan dengan keajaiban bunga majemuk (*compound interest*). Dibuat langsung untuk merefleksikan minat Alex di dunia investasi dan matematika finansial.
          </p>
        </div>

        {/* Main Simulator Card */}
        <div className="rounded-3xl bg-[#0c1322] border border-blue-900/40 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Modal Awal */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-medium text-slate-300 flex items-center gap-1.5">
                    <DollarSign className="w-4 h-4 text-blue-400" />
                    Modal Awal (Investasi Pertama)
                  </span>
                  <span className="font-mono font-bold text-blue-400 text-sm">
                    {formatRupiah(modalAwal)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50000000"
                  step="500000"
                  value={modalAwal}
                  onChange={(e) => setModalAwal(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                  <span>Rp 0</span>
                  <span>Rp 25.000.000</span>
                  <span>Rp 50.000.000</span>
                </div>
              </div>

              {/* Setoran Rutin Bulanan */}
              <div>
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-medium text-slate-300 flex items-center gap-1.5">
                    <Calendar className="w-4 h-4 text-sky-400" />
                    Setoran Rutin per Bulan
                  </span>
                  <span className="font-mono font-bold text-sky-400 text-sm">
                    {formatRupiah(setoranBulanan)}
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="10000000"
                  step="100000"
                  value={setoranBulanan}
                  onChange={(e) => setSetoranBulanan(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono mt-1">
                  <span>Rp 0</span>
                  <span>Rp 5.000.000</span>
                  <span>Rp 10.000.000</span>
                </div>
              </div>

              {/* Grid 2 Column: Bunga & Durasi */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                
                {/* Bunga per tahun */}
                <div className="p-4 rounded-2xl bg-[#111a30]/60 border border-slate-800/80">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-slate-300 font-medium flex items-center gap-1">
                      <Percent className="w-3.5 h-3.5 text-blue-400" />
                      Imbal Hasil (% / Thn)
                    </span>
                    <span className="font-mono font-bold text-white">{bungaTahunan}%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="25"
                    step="0.5"
                    value={bungaTahunan}
                    onChange={(e) => setBungaTahunan(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                  <div className="text-[10px] text-slate-400 font-mono mt-1 text-right">
                    Rata-rata IHSG / Obligasi
                  </div>
                </div>

                {/* Durasi Investasi */}
                <div className="p-4 rounded-2xl bg-[#111a30]/60 border border-slate-800/80">
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="text-slate-300 font-medium flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5 text-sky-400" />
                      Jangka Waktu
                    </span>
                    <span className="font-mono font-bold text-white">{durasiTahun} Tahun</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={durasiTahun}
                    onChange={(e) => setDurasiTahun(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                  />
                  <div className="text-[10px] text-slate-400 font-mono mt-1 text-right">
                    {durasiTahun * 12} bulan akumulasi
                  </div>
                </div>

              </div>

            </div>

            {/* Result Panel (5 cols) */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-[#101930] border border-blue-800/40 flex flex-col justify-between space-y-6">
              
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-400 font-semibold block mb-1">
                  Proyeksi Saldo Akhir ({durasiTahun} Tahun)
                </span>
                <div className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-sky-200 to-white">
                  {formatRupiah(hasil.saldoAkhir)}
                </div>
                <p className="text-xs text-slate-400 mt-1 font-mono">
                  Bunga dihitung majemuk bulanan (r = {bungaTahunan}%/12)
                </p>
              </div>

              {/* Breakdown Bar */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-400">Modal Sendiri: {100 - persentaseBunga}%</span>
                  <span className="text-blue-400 font-bold">Hasil Bunga: {persentaseBunga}%</span>
                </div>
                <div className="w-full h-3 bg-slate-800 rounded-full overflow-hidden flex">
                  <div
                    className="bg-slate-500 h-full transition-all duration-300"
                    style={{ width: `${100 - persentaseBunga}%` }}
                    title="Modal Disetor"
                  />
                  <div
                    className="bg-blue-500 h-full transition-all duration-300"
                    style={{ width: `${persentaseBunga}%` }}
                    title="Hasil Bunga Majemuk"
                  />
                </div>
              </div>

              {/* Stats Numbers */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3 rounded-xl bg-[#0c1322] border border-slate-800">
                  <span className="text-slate-400 text-[11px] block">Total Disetor</span>
                  <span className="font-mono font-bold text-slate-200 text-sm mt-0.5 block">
                    {formatRupiah(hasil.totalDisetor)}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-blue-950/40 border border-blue-800/50">
                  <span className="text-blue-300 text-[11px] block">Keuntungan Bunga</span>
                  <span className="font-mono font-bold text-blue-400 text-sm mt-0.5 block">
                    +{formatRupiah(hasil.totalBunga)}
                  </span>
                </div>
              </div>

              {/* Toggle Table Button */}
              <button
                onClick={() => setShowTable(!showTable)}
                className="w-full py-2.5 px-4 rounded-xl bg-blue-600/10 hover:bg-blue-600/20 border border-blue-500/30 text-blue-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
              >
                <span>{showTable ? "Sembunyikan Rincian Tahunan" : "Lihat Rincian Tiap Tahun"}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

            </div>

          </div>

          {/* Breakdown Table (Expandable) */}
          {showTable && (
            <div className="mt-8 pt-6 border-t border-slate-800/80 animate-in fade-in duration-300">
              <h4 className="text-sm font-bold text-white mb-3">Tabel Akumulasi Per Tahun:</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs font-mono">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400">
                      <th className="py-2 px-3">Tahun</th>
                      <th className="py-2 px-3">Total Disetor</th>
                      <th className="py-2 px-3">Saldo Akumulasi</th>
                      <th className="py-2 px-3 text-right">Pertumbuhan Bunga</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 text-slate-300">
                    {hasil.breakdownTahunan.map((row) => (
                      <tr key={row.tahun} className="hover:bg-blue-950/20">
                        <td className="py-2 px-3 font-semibold text-white">Tahun {row.tahun}</td>
                        <td className="py-2 px-3">{formatRupiah(row.disetor)}</td>
                        <td className="py-2 px-3 font-semibold text-blue-400">{formatRupiah(row.saldo)}</td>
                        <td className="py-2 px-3 text-right text-emerald-400">
                          +{formatRupiah(Math.max(0, row.saldo - row.disetor))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
