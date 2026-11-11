/* Kamera ikut scroll: tiap <section class="stop"> = satu pemberhentian. */
import * as THREE from 'three';
import { LAND, SPOT } from './world.js';
import { PROJECT_ORDER as ORDER } from './ui.js';

function makeStops(world, mobile){
  const V = (x, y, z) => new THREE.Vector3(x, y, z);
  const shiftX = mobile ? 0 : .17, shiftY = mobile ? .2 : 0;
  const st = [];
  st.push({ pos: V(0, 8.6, 150), look: V(0, 8.6, 0), fov: 18, ox: 0, oy: mobile ? -.16 : -.2, hero: true });
  st.push({ pos: V(-36, 17, 36), look: V(-3, 5, -6), fov: 38, ox: shiftX, oy: shiftY });
  ORDER.forEach(id => {
    const [x, z, h] = LAND[id];
    st.push({ pos: V(x + 11, h * .6 + 6, z + 27), look: V(x, h - 5.5, z), fov: mobile ? 46 : 38, ox: shiftX, oy: shiftY, id });
  });
  const [bx, by, bz] = SPOT.board;
  st.push({ pos: V(bx + 40, by + 5, bz + 14), look: V(bx, by + 1.5, bz), fov: mobile ? 52 : 38, ox: shiftX, oy: shiftY });
  const pz = SPOT.plaza[2];
  st.push({ pos: V(12, 19, pz + 22), look: V(0, 6, pz), fov: mobile ? 58 : 46, ox: shiftX, oy: shiftY });
  st.push({ pos: V(SPOT.certX - 27, 13, -1), look: V(SPOT.certX, 5.5, -15), fov: mobile ? 60 : 46, ox: shiftX, oy: shiftY });
  const [rx, ry, rz] = SPOT.roof;
  st.push({ pos: V(rx + 4.8, ry + 3.6, rz + 6.2), look: V(rx + .2, ry + .9, rz - .3), fov: mobile ? 52 : 42, ox: shiftX, oy: shiftY, roof: true });
  st.push({ pos: V(40, 60, 58), look: V(-4, 0, -30), fov: mobile ? 58 : 40, ox: shiftX, oy: shiftY });
  /* layar HP sempit: mundurkan kamera supaya objeknya tidak terpotong */
  if (mobile) st.forEach((p, i) => { if (i > 0 && i < st.length - 1) p.pos.sub(p.look).multiplyScalar(i === 12 ? 1.8 : 1.45).add(p.look); });
  return st;
}

export function createJourney(world, opts){
  const cam = world.camera, calm = opts.calm;
  let mobile = opts.mobile;
  let stops = makeStops(world, mobile);
  const els = [...document.querySelectorAll('.stop')];
  let anchors = [], W = innerWidth, H = innerHeight;
  let tp = 0, cp = 0, mx = 0, my = 0, smx = 0, smy = 0;
  const pos = new THREE.Vector3(), look = new THREE.Vector3(), up = new THREE.Vector3(0, 1, 0);

  /* jarak pembuka diatur supaya seluruh grafik muat di layar */
  function fitHero(){
    const b = world.chartBox, half = (b.x1 - b.x0) / 2 + 2, aspect = W / H;
    const t = Math.tan(THREE.MathUtils.degToRad(stops[0].fov / 2));
    stops[0].pos.z = Math.max(half / (t * aspect) * (mobile ? .6 : 1), (b.y1 + 3) / t) * (mobile ? 1 : 1.16);
    const cx = mobile ? 12 : 0; stops[0].pos.x = cx; stops[0].look.x = cx;
  }
  function measure(){
    W = innerWidth; H = innerHeight;
    stops = makeStops(world, mobile = innerWidth < 860); fitHero();
    const maxS = document.documentElement.scrollHeight - H;
    anchors = els.map((el, i) => i === 0 ? 0 : Math.min(maxS, Math.max(0, el.offsetTop + el.offsetHeight / 2 - H / 2)));
    world.resize(W, H);
  }
  function scrollToP(){
    const y = scrollY;
    if (y <= anchors[0]) return 0;
    for (let i = 0; i < anchors.length - 1; i++) if (y < anchors[i + 1]) return i + (y - anchors[i]) / Math.max(1, anchors[i + 1] - anchors[i]);
    return anchors.length - 1;
  }
  /* diam sebentar di tiap pemberhentian, baru bergerak */
  const dwell = f => { const g = Math.min(1, Math.max(0, (f - .18) / .64)); return g * g * (3 - 2 * g); };
  function pose(p){
    const i = Math.min(stops.length - 1, Math.floor(p)), A = stops[i], B = stops[Math.min(stops.length - 1, i + 1)];
    const e = dwell(p - i);
    pos.lerpVectors(A.pos, B.pos, e); look.lerpVectors(A.look, B.look, e);
    const lift = Math.min(14, A.pos.distanceTo(B.pos) * .22) * Math.sin(Math.PI * e);
    pos.y += lift; look.y += lift * .4;
    return { fov: A.fov + (B.fov - A.fov) * e, ox: A.ox + (B.ox - A.ox) * e, oy: A.oy + (B.oy - A.oy) * e };
  }
  function applyOffset(ox, oy){
    const fw = W * (1 + 2 * Math.abs(ox)), fh = H * (1 + 2 * Math.abs(oy));
    cam.aspect = fw / fh;
    cam.setViewOffset(fw, fh, ox >= 0 ? 0 : fw - W, oy >= 0 ? fh - H : 0, W, H);
  }

  addEventListener('resize', () => { measure(); });
  addEventListener('load', measure);
  if (document.fonts) document.fonts.ready.then(measure);
  if (!calm) addEventListener('pointermove', e => { mx = e.clientX / W - .5; my = e.clientY / H - .5; }, { passive: true });
  measure(); tp = cp = scrollToP();

  return {
    get stops(){ return stops; },
    measure,
    goTo(i){ i = Math.max(0, Math.min(anchors.length - 1, i)); scrollTo({ top: anchors[i], behavior: calm ? 'auto' : 'smooth' }); },
    nearest(){ return Math.round(cp); },
    update(dt){
      tp = scrollToP();
      cp = calm ? tp : cp + (tp - cp) * Math.min(1, dt * 3.2);
      if (Math.abs(tp - cp) < 1e-4) cp = tp;
      const o = pose(cp);
      smx += (mx - smx) * Math.min(1, dt * 2.5); smy += (my - smy) * Math.min(1, dt * 2.5);
      pos.x += smx * 1.4; pos.y -= smy * .8;
      cam.position.copy(pos); cam.up.copy(up); cam.lookAt(look);
      cam.fov = o.fov; applyOffset(o.ox, o.oy); cam.updateProjectionMatrix();
      const reveal = THREE.MathUtils.smoothstep(cp, .12, .9);
      const sky = Math.max(0, 1 - Math.abs(cp - 12) * 1.4);
      const i = Math.round(cp), s = stops[i];
      return { p: cp, reveal, sky, dist: pos.distanceTo(look), active: s && s.id, stop: i, near: k => Math.abs(cp - k) < .6 };
    }
  };
}
