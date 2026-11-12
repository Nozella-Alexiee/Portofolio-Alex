import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export default function BentoAbout() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="tentang" className="pt-4">
      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-white">Tentang Saya</h2>
          <p className="text-slate-400 text-sm mt-1">Latar belakang, ketertarikan, dan alat yang dipakai sehari-hari.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5">
          {/* Main Story */}
          <div className="md:col-span-8 p-6 rounded-xl bg-slate-900/30 border border-slate-800 space-y-4">
            <h3 className="text-base font-semibold text-white">Cerita Singkat</h3>
            <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
              <p>
                Aku Alex, sekarang kelas XII RPL di SMK Semen Gresik (SMK SIG). Waktu awal masuk jurusan RPL, sejujurnya belum seberapa niat. Tapi seiring berjalannya waktu dan mulai kenal logika coding, arsitektur backend, dan problem solving—ternyata malah keterusan dan jatuh cinta sampai sekarang.
              </p>
              <p>
                Di luar ngoding, ketertarikanku ke dunia finance sebenarnya udah muncul sejak SMP. Waktu itu penasaran gimana cara mengelola uang dengan bener biar ga asal-asalan, sampai akhirnya ikut Sekolah Pasar Modal resmi dari PT Bursa Efek Indonesia (IDX) di Surabaya.
              </p>
              <p className="text-slate-400">
                Dua hal ini sekilas beda arah, tapi buatku saling melengkapi: keduanya sama-sama soal membaca pola data dan merangkai sesuatu yang rapi serta terukur.
              </p>
            </div>
          </div>

          {/* Tools & Environment */}
          <div className="md:col-span-4 p-6 rounded-xl bg-slate-900/30 border border-slate-800 flex flex-col justify-between">
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-white">Lingkungan Kerja</h3>
              <ul className="space-y-2.5 text-xs">
                <li className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Perangkat</span>
                  <span className="font-mono text-slate-200">MacBook Air M1</span>
                </li>
                <li className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Sistem Operasi</span>
                  <span className="font-mono text-slate-200">macOS</span>
                </li>
                <li className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Editor</span>
                  <span className="font-mono text-slate-200">VS Code & Alexel</span>
                </li>
                <li className="flex justify-between py-1 border-b border-slate-800/60">
                  <span className="text-slate-400">Terminal</span>
                  <span className="font-mono text-slate-200">Zsh · Git</span>
                </li>
                <li className="flex justify-between py-1">
                  <span className="text-slate-400">Database Tools</span>
                  <span className="font-mono text-slate-200">DBeaver · Terminal</span>
                </li>
              </ul>
            </div>

            <div className="pt-3 text-[11px] font-mono text-blue-400">
              SMK Semen Gresik · Angkatan 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
