/* Panel isi, galeri, simulasi, label di atas dunia 3D. */
import { T, LANG } from './i18n.js';
export const PROJECT_ORDER = ['alexel', 'onesig', 'sigchat', 'siglearning', 'orvella', 'epilketos', 'absensi'];

const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const ext = (label, url, cls) => `<a class="${cls || 'btn'}" href="${esc(url)}" target="_blank" rel="noopener">${esc(label)} ↗</a>`;

export function renderUI(P){
  const I = P.img, byId = id => P.projects.find(p => p.id === id);
  const t = T[LANG];
  const hooks = { goTo: () => {}, onSim: () => {}, onVinyl: () => true };

  $('#heroSub').innerHTML = t.heroSub(esc(P.name), esc(P.tagline));

  /* tentang */
  $('#pAbout').innerHTML = `<p class="kick"><b>01</b> ${t.k[0]}</p><h2>${t.aboutH}</h2>
    <p class="lead">${esc(P.about[0])}</p><p>${esc(P.about[1])}</p><p>${esc(P.about[2])}</p>
    <ol class="steps" id="steps">${P.journey.map((j, i) => `<li data-i="${i}"><b>${esc(j.t)}</b><span>${esc(j.d)}</span></li>`).join('')}</ol>`;

  /* proyek: satu pemberhentian per proyek */
  $('#projStops').outerHTML = PROJECT_ORDER.map((id, k) => {
    const p = byId(id), sig = p.group === 'sig';
    return `<section class="stop tall" ${k === 0 ? 'id="proyek"' : ''} data-stop="${k + 2}" data-project="${id}"><div class="panel">
      <p class="kick"><b>02</b> ${t.k[1]} · ${k + 1}/${PROJECT_ORDER.length}${sig ? ' · ' + t.eco : ''}</p>
      <h2>${esc(p.name)} <span class="badge" style="--c:${p.color}">${esc(p.badge)}</span></h2>
      <p class="lead">${esc(p.tag)}</p>
      <button class="shot" type="button" data-gal="${id}"><img src="${I + p.shots[0][0]}" alt="${t.shotAlt} ${esc(p.name)}" loading="lazy"><span>${t.views(p.shots.length)}</span></button>
      <p style="margin-top:12px">${esc(p.desc)}</p>
      ${sig ? `<p class="flowtag">${esc(p.points[0])}</p>` : (p.points.length ? `<ul class="ticks">${p.points.map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : '')}
      <div class="chips">${p.stack.map(s => `<span class="chip">${esc(s)}</span>`).join('')}</div>
      ${p.links.length ? `<div class="row">${p.links.map((l, i) => ext(l[0], l[1], i ? 'btn' : 'btn-dark')).join('')}</div>` : ''}
      <div class="pnav"><span>${k + 1} / ${PROJECT_ORDER.length}</span><button type="button" data-go="${k + 1}" aria-label="${t.prev}">←</button><button type="button" data-go="${k + 3}" aria-label="${t.next}">→</button></div>
    </div></section>`;
  }).join('');

  /* keahlian */
  $('#pSkills').innerHTML = `<p class="kick"><b>03</b> ${t.k[2]}</p><h2>${t.skillsH}</h2>
    <p>${t.skillsP}</p>
    <div class="cols"><div><h3>Web Development</h3><ul>${P.skills.web.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div>
    <div><h3>Finance</h3><ul>${P.skills.fin.map(s => `<li>${esc(s)}</li>`).join('')}</ul></div></div>
    <dl class="env">${P.env.map(([k, v]) => `<dt>${esc(k)}</dt><dd>${esc(v)}</dd>`).join('')}</dl>`;

  /* simulasi */
  const F = [['cModal', t.simF[0], 0, 50000000, 500000, 5000000], ['cSetor', t.simF[1], 0, 5000000, 50000, 500000], ['cBunga', t.simF[2], 0, 20, .5, 7], ['cTahun', t.simF[3], 1, 30, 1, 10]];
  $('#pSim').innerHTML = `<p class="kick"><b>04</b> ${t.k[3]}</p><h2>${t.simH}</h2>
    <p>${t.simP}</p>
    ${F.map(([id, l, mn, mx, st, v]) => `<div class="fld"><label for="${id}">${l} <output id="${id}V"></output></label><input type="range" id="${id}" min="${mn}" max="${mx}" step="${st}" value="${v}"></div>`).join('')}
    <p class="sim-big" id="rAkhir"></p><div class="sim-two"><span>${t.simA}<b id="rSetor"></b></span><span>${t.simB}<b id="rBunga"></b></span></div>
    <p class="fine">${t.simNote}</p>`;
  function calc(){
    const v = id => +$('#' + id).value, m = v('cModal'), s = v('cSetor'), b = v('cBunga'), yr = v('cTahun'), tx = t, R = hitungMajemuk(m, s, b, yr);
    $('#cModalV').textContent = rupiah(m); $('#cSetorV').textContent = rupiah(s); $('#cBungaV').textContent = String(b).replace('.', ',') + '%'; $('#cTahunV').textContent = yr + ' ' + tx.years;
    $('#rAkhir').textContent = rupiah(R.akhir); $('#rSetor').textContent = rupiah(R.disetor); $('#rBunga').textContent = rupiah(R.bunga);
    hooks.onSim(R.rows);
  }
  F.forEach(([id]) => $('#' + id).addEventListener('input', calc));

  /* sertifikat */
  $('#pCert').innerHTML = `<p class="kick"><b>05</b> ${t.k[4]}</p><h2>${t.certH}</h2>
    <ul class="certs">${P.certs.map((c, k) => `<li data-cert="${k}" tabindex="0"><img src="${I + c.img}" alt="" loading="lazy"><div><b>${esc(c.title)}</b><small>${esc(c.org)} · ${esc(c.date)}</small></div><em>● ${esc(c.status)}</em></li>`).join('')}</ul>`;

  /* hobi */
  const Hb = P.hobi;
  $('#pHobi').innerHTML = `<p class="kick"><b>06</b> ${t.k[5]}</p><h2>${t.hobiH}</h2>
    <p>${esc(Hb.bintang)}</p>
    <div class="song"><img src="${I + Hb.band.cover}" alt="Sampul If I Let You Go"><div><b>${esc(Hb.band.name)} · ${esc(Hb.band.song)}</b><small>${t.fav}</small></div></div>
    <div class="chips">${Hb.playlist.artists.map(a => `<span class="chip">${esc(a)}</span>`).join('')}</div>
    <div class="row">${ext('Spotify', Hb.band.spotify)}${ext('Apple Music', Hb.band.apple)}${ext(t.playlist, Hb.playlist.url)}</div>
    <p style="margin-top:14px">${esc(Hb.nyanyi)} ${t.photoP}</p>
    <div class="photos">${Hb.foto.map((f, k) => `<img src="${I + f}" alt="${t.shot} ${k + 1}" data-photo="${k}" loading="lazy">`).join('')}</div>`;

  /* kontak */
  const C = P.contact;
  $('#pKontak').innerHTML = `<p class="kick"><b>07</b> ${t.k[6]}</p><h2>${t.kontakH}</h2><p class="lead">${esc(C.note)}</p>
    <div class="row"><a class="btn-dark" href="mailto:${esc(C.email)}">${t.email} ↗</a>${C.links.map(l => ext(l[0], l[1])).join('')}</div>
    <p class="mail">${esc(C.email)}<button type="button" id="copy">${t.copy}</button></p>
    <p class="foot">© 2026 ${esc(P.name)} — XII RPL</p>`;
  $('#copy').addEventListener('click', e => { const b = e.target, done = () => { b.textContent = t.copied; setTimeout(() => b.textContent = t.copy, 1600); };
    navigator.clipboard ? navigator.clipboard.writeText(C.email).then(done, done) : done(); });

  /* galeri */
  const gal = $('#gal'); let gList = [], gI = 0;
  function gShow(){ const [src, cap] = gList[gI]; $('#galImg').src = I + src; $('#galImg').alt = cap; $('#galCap').textContent = cap; $('#galN').textContent = (gI + 1) + ' / ' + gList.length; }
  function openGal(list, i){ gList = list; gI = i || 0; gShow(); gal.showModal ? gal.showModal() : gal.setAttribute('open', ''); }
  $('#galX').onclick = () => gal.close();
  $('#galPrev').onclick = () => { gI = (gI - 1 + gList.length) % gList.length; gShow(); };
  $('#galNext').onclick = () => { gI = (gI + 1) % gList.length; gShow(); };
  gal.addEventListener('click', e => { if (e.target === gal) gal.close(); });
  gal.addEventListener('keydown', e => { if (e.key === 'ArrowRight') $('#galNext').click(); if (e.key === 'ArrowLeft') $('#galPrev').click(); });
  const projGal = id => { const p = byId(id); openGal(p.shots.map(([s, c]) => [s, p.name + ' — ' + c])); };
  const certGal = k => openGal(P.certs.map(c => [c.img, c.title + ' — ' + c.org]), k);
  const photoGal = k => openGal(Hb.foto.map((f, i) => [f, t.shot + ' ' + (i + 1)]), k);

  /* klik di panel */
  let journeySel = P.journey.length - 1;
  function selectJourney(i){ journeySel = i; document.querySelectorAll('#steps li').forEach((li, k) => li.classList.toggle('sel', k === i)); }
  selectJourney(journeySel);
  document.addEventListener('click', e => {
    const t = e.target.closest('[data-gal],[data-go],[data-cert],[data-photo],#steps li');
    if (!t) return;
    if (t.dataset.gal) projGal(t.dataset.gal);
    else if (t.dataset.go) hooks.goTo(+t.dataset.go);
    else if (t.dataset.cert) certGal(+t.dataset.cert);
    else if (t.dataset.photo) photoGal(+t.dataset.photo);
    else selectJourney(+t.dataset.i);
  });
  document.addEventListener('keydown', e => { const t = e.target.closest && e.target.closest('[data-cert]'); if (t && e.key === 'Enter') certGal(+t.dataset.cert); });

  /* rel navigasi */
  const RAIL = [0, 1, 2, 9, 10, 11, 12, 13].map((i, k) => [i, t.rail[k]]);
  $('#rail').innerHTML = RAIL.map(([i, l]) => `<a href="#" data-go="${i}"><span>${l}</span><i></i></a>`).join('');
  $('#rail').addEventListener('click', e => e.preventDefault());
  document.querySelectorAll('.menu a, .logo, .btn-dark[href="#kontak"]').forEach(a => a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1), el = document.getElementById(id);
    if (el && el.dataset.stop) { e.preventDefault(); hooks.goTo(+el.dataset.stop); }
  }));
  const railA = [...document.querySelectorAll('#rail a')], menuA = [...document.querySelectorAll('.menu a')];
  const section = p => p < 1.5 ? (p < .5 ? 0 : 1) : p < 8.5 ? 2 : Math.min(13, Math.round(p));
  let lastSec = -1, lastStop = -1;
  function setStop(p){
    const sec = section(p), stop = Math.round(p);
    if (stop !== lastStop) { lastStop = stop; document.querySelectorAll('.stop').forEach(el => el.classList.toggle('in', +el.dataset.stop === stop)); }
    if (sec === lastSec) return; lastSec = sec;
    railA.forEach(a => a.classList.toggle('on', +a.dataset.go === sec));
    const ids = { 1: 'tentang', 2: 'proyek', 9: 'keahlian', 10: 'simulasi', 11: 'sertifikat', 12: 'hobi' };
    menuA.forEach(a => a.classList.toggle('on', a.getAttribute('href') === '#' + ids[sec]));
  }

  return { hooks, calc, setStop, selectJourney, projGal, certGal, photoGal, get journeySel(){ return journeySel; } };
}
