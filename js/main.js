/* Perakit: isi halaman dulu, baru dunia 3D kalau perangkatnya sanggup. */
import { renderUI } from './ui.js';
import { T, LANG, applyLang } from './i18n.js';

const P = applyLang(window.PORTO), t = T[LANG];
document.documentElement.lang = LANG;
document.querySelectorAll('[data-t]').forEach(el => { el.textContent = t[el.dataset.t]; });
document.querySelectorAll('[data-th]').forEach(el => { el.innerHTML = t[el.dataset.th]; });
document.querySelectorAll('.menu a').forEach((a, i) => { a.textContent = t.menu[i]; });
document.getElementById('mode').title = t.modeTitle;
/* ganti bahasa: simpan pilihan + posisi scroll, lalu muat ulang */
document.getElementById('lang').addEventListener('click', () => {
  try { localStorage.setItem('lang', LANG === 'en' ? 'id' : 'en'); sessionStorage.setItem('y', scrollY); } catch (e) {}
  location.reload();
});
const html = document.documentElement, q = new URLSearchParams(location.search);
const calm = matchMedia('(prefers-reduced-motion: reduce)').matches;
const ui = renderUI(P);
const loader = document.getElementById('loader');
const done = () => { if (loader.classList.contains('done')) return; loader.classList.add('done'); setTimeout(() => loader.remove(), 800); };

/* mode Pagi / Malam */
let nightT = 0, night = 0;
try { nightT = localStorage.getItem('mode') === 'malam' ? 1 : 0; } catch (e) {}
function applyMode(){
  html.classList.toggle('night', !!nightT);
  document.getElementById('mode').setAttribute('aria-pressed', !!nightT);
  document.querySelector('meta[name=theme-color]').content = nightT ? '#0a0e16' : '#eeebe3';
}
applyMode(); night = nightT;
document.getElementById('mode').addEventListener('click', () => {
  nightT = nightT ? 0 : 1; applyMode();
  try { localStorage.setItem('mode', nightT ? 'malam' : 'pagi'); } catch (e) {}
});

function webglOK(){ try { const c = document.createElement('canvas'); return !!(window.WebGLRenderingContext && (c.getContext('webgl2') || c.getContext('webgl'))); } catch (e) { return false; } }

function flat(){
  html.classList.add('flat'); done();
  document.querySelectorAll('.stop').forEach(el => el.classList.add('in'));
  ui.hooks.goTo = i => { const el = document.querySelector(`.stop[data-stop="${i}"]`); el && el.scrollIntoView({ behavior: 'smooth' }); };
  ui.calc();
}

async function start(){
  const [{ createWorld }, { createJourney }, THREE] = await Promise.all([import('./world.js'), import('./journey.js'), import('three')]);
  const mobile = innerWidth < 860;
  const ldBar = document.getElementById('ldBar'), ldTick = document.getElementById('ldTick');
  const world = createWorld(document.getElementById('world'), P, {
    mobile, t,
    onProgress: f => { ldBar.style.width = (f * 100) + '%'; ldTick.textContent = '▲ ' + (f * 100).toFixed(2).replace('.', ',') + '%'; },
    onLoad: done
  });
  setTimeout(done, 6000);
  const journey = createJourney(world, { mobile, calm: calm || q.has('snap') });
  ui.hooks.goTo = i => journey.goTo(i);
  if (q.has('debug')) window.__dbg = { world, journey };
  ui.hooks.onSim = rows => world.setSim(rows);
  ui.calc();
  try { const y = +sessionStorage.getItem('y'); if (y) { sessionStorage.removeItem('y'); setTimeout(() => { scrollTo(0, y); journey.measure(); }, 60); } } catch (e) {}

  /* label yang menempel di objek 3D */
  const layer = document.getElementById('labels'), labels = [];
  function label(text, pos, show, opt = {}){
    const el = document.createElement('div'); el.className = 'lbl' + (opt.tap ? ' tap' : '') + (opt.cls ? ' ' + opt.cls : '');
    el.innerHTML = (opt.color ? `<span class="dot" style="--c:${opt.color}"></span>` : '') + text;
    if (opt.tap) el.addEventListener('click', opt.tap);
    layer.appendChild(el); labels.push({ el, pos, show, on: false, opt });
  }
  world.journeyPoints.forEach((pt, i) => label(P.journey[i].t, pt, s => s.p > .55 && s.p < 1.6, { tap: () => ui.selectJourney(i), sel: () => ui.journeySel === i }));
  for (const [id, L] of Object.entries(world.landmarks)) {
    const p = P.projects.find(e => e.id === id), k = journey.stops.findIndex(s => s.id === id);
    label(p.name, L.label, s => s.p > 1.4 && s.p < 8.6, { tap: () => journey.goTo(k), color: p.color });
  }
  world.flows.forEach(f => label(f.text, f.label, s => s.p > 2.4 && s.p < 5.6, { cls: 'flow' }));
  const v = new THREE.Vector3();
  function placeLabels(s){
    const W = innerWidth, H = innerHeight;
    for (const L of labels) {
      let on = L.show(s);
      if (on) {
        v.copy(L.pos).project(world.camera);
        on = v.z < 1 && Math.abs(v.x) < 1.05 && v.y < .84 && v.y > -1.05;
        if (on) L.el.style.transform = `translate(${(v.x * .5 + .5) * W}px,${(-v.y * .5 + .5) * H}px) translate(-50%,-130%)`;
      }
      if (on !== L.on) { L.on = on; L.el.classList.toggle('on', on); }
      if (L.opt.sel) L.el.classList.toggle('sel', L.opt.sel());
    }
  }

  /* klik dan arahkan ke objek 3D */
  const canvas = document.getElementById('world');
  let downX = 0, downY = 0;
  const hit = e => world.pick(e.clientX / innerWidth * 2 - 1, -(e.clientY / innerHeight) * 2 + 1);
  addEventListener('pointerdown', e => { downX = e.clientX; downY = e.clientY; }, { passive: true });
  addEventListener('click', e => {
    if (e.target.closest('.panel,.top,.rail,dialog,.lbl,.hero-txt') || Math.hypot(e.clientX - downX, e.clientY - downY) > 6) return;
    const u = hit(e); if (!u) return;
    if (u.kind === 'project') journey.goTo(journey.stops.findIndex(s => s.id === u.id));
    else if (u.kind === 'shots') ui.projGal(u.id);
    else if (u.kind === 'cert') ui.certGal(u.k);
    else if (u.kind === 'photo') ui.photoGal(u.k);
    else if (u.kind === 'vinyl') world.toggleVinyl();
  });
  if (matchMedia('(hover: hover)').matches) {
    let pending = null;
    addEventListener('pointermove', e => { pending = e; }, { passive: true });
    setInterval(() => { if (!pending) return; const e = pending; pending = null;
      document.body.style.cursor = !e.target.closest('.panel,.top,.rail,.lbl') && hit(e) ? 'pointer' : ''; }, 120);
  }

  /* tombol panah kiri/kanan buat pindah pemberhentian */
  addEventListener('keydown', e => {
    if (e.target.closest('input,textarea,dialog') || e.metaKey || e.ctrlKey || e.altKey) return;
    if (e.key === 'ArrowRight') { e.preventDefault(); journey.goTo(journey.nearest() + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); journey.goTo(journey.nearest() - 1); }
  });

  const prog = document.getElementById('prog');
  if (q.has('stop')) { setTimeout(() => journey.goTo(+q.get('stop')), 50); }
  let last = performance.now(), fpsEl = null, frames = 0, fpsT = 0;
  if (q.has('debug')) { fpsEl = document.createElement('div'); fpsEl.style.cssText = 'position:fixed;left:8px;bottom:8px;z-index:99;font:12px monospace;background:#000;color:#0f0;padding:2px 6px'; document.body.appendChild(fpsEl); }
  function frame(now){
    const dt = Math.min(.05, (now - last) / 1000); last = now;
    night += (nightT - night) * Math.min(1, dt * (calm ? 99 : 3));
    const s = journey.update(dt);
    s.night = night; s.time = now / 1000;
    world.update(dt, s); world.render();
    placeLabels(s); ui.setStop(s.p);
    prog.style.width = (s.p / 13 * 100) + '%';
    if (fpsEl) { frames++; fpsT += dt; if (fpsT > .5) { fpsEl.textContent = Math.round(frames / fpsT) + ' fps · stop ' + s.p.toFixed(2); frames = 0; fpsT = 0; } }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

if (q.has('nowebgl') || !webglOK()) flat();
else start().catch(err => { console.error(err); flat(); });
