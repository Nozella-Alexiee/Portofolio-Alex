import React, { useState, useMemo } from 'react';
import { Calculator, TrendingUp, Info } from 'lucide-react';
import { hitungMajemuk, formatRupiah } from '../data/portfolioData';

export default function FinanceSimulator() {
  const [modalAwal, setModalAwal] = useState(1000000);
  const [setoranBulanan, setSetoranBulanan] = useState(300000);
  const [bungaTahunan, setBungaTahunan] = useState(10);
  const [durasiTahun, setDurasiTahun] = useState(5);

  const hasil = useMemo(() => {
    return hitungMajemuk(Number(modalAwal), Number(setoranBulanan), Number(bungaTahunan), Number(durasiTahun));
  }, [modalAwal, setoranBulanan, bungaTahunan, durasiTahun]);

  return (
    <section id="simulasi" className="pt-4">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Simulasi Bunga Majemuk</h2>
          <p className="text-slate-400 text-sm mt-1">
            Kalkulator pertumbuhan investasi bulanan berbasis *compound interest*.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Input Sliders */}
            <div className="lg:col-span-7 space-y-5">
              
              {/* Modal Awal */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">Modal Awal</span>
                  <span className="font-mono text-blue-400 font-semibold">{formatRupiah(modalAwal)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50000000"
                  step="500000"
                  value={modalAwal}
                  onChange={(e) => setModalAwal(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Setoran Bulanan */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-300 font-medium">Setoran per Bulan</span>
                  <span className="font-mono text-blue-400 font-semibold">{formatRupiah(setoranBulanan)}</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="5000000"
                  step="100000"
                  value={setoranBulanan}
                  onChange={(e) => setSetoranBulanan(Number(e.target.value))}
                  className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              {/* Bunga & Durasi */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 font-medium">Imbal Hasil / Thn</span>
                    <span className="font-mono text-blue-400 font-semibold">{bungaTahunan}%</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    value={bungaTahunan}
                    onChange={(e) => setBungaTahunan(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-300 font-medium">Jangka Waktu</span>
                    <span className="font-mono text-blue-400 font-semibold">{durasiTahun} Tahun</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={durasiTahun}
                    onChange={(e) => setDurasiTahun(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  />
                </div>
              </div>
            </div>

            {/* Results Box */}
            <div className="lg:col-span-5 p-5 rounded-lg bg-slate-950/80 border border-slate-800/80 space-y-4">
              <div>
                <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">Estimasi Saldo Akhir</span>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white mt-1">
                  {formatRupiah(hasil.saldoAkhir)}
                </div>
              </div>

              <div className="space-y-2 text-xs pt-3 border-t border-slate-800">
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Modal Disetor:</span>
                  <span className="font-mono text-slate-200">{formatRupiah(hasil.totalDisetor)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Keuntungan Bunga Majemuk:</span>
                  <span className="font-mono text-emerald-400 font-semibold">+{formatRupiah(hasil.totalBunga)}</span>
                </div>
              </div>

              <div className="pt-2 text-[11px] text-slate-400 leading-relaxed">
                *Simulasi menggunakan rumus bunga majemuk bulanan standard: \( A = P(1 + r/n)^{nt} \).
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
