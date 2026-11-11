/* Dunia 3D: grafik candlestick yang ternyata kota. */
import * as THREE from 'three';

function rng(seed){return function(){seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}

/* posisi gedung proyek: [x, z, tinggi] */
export const LAND = { alexel:[0,-30,26], onesig:[-16,-22,18], sigchat:[-25,-34,14], siglearning:[-9,-39,14], orvella:[16,-22,16], epilketos:[25,-34,11], absensi:[11,-40,10] };
export const SPOT = { board:[-50,9,-18], plaza:[0,0,-66], certX:50, roof:[0,26,-30] };
export const CHART = { x0:-36, step:1.8, n:41, journeyIdx:[3,12,21,30,39] };

const DAY = { bg:new THREE.Color('#eeebe3'), shaft:new THREE.Color('#f8f5ee'), wick:new THREE.Color('#34322b'), frame:new THREE.Color('#2b2a25'), bar:new THREE.Color('#33322c'), hemiSky:new THREE.Color('#ffffff'), hemiGnd:new THREE.Color('#d9d2c2'), hemi:1.85, sun:2.5 };
const NIGHT = { bg:new THREE.Color('#0a0e16'), shaft:new THREE.Color('#1a2130'), wick:new THREE.Color('#7f889b'), frame:new THREE.Color('#0f131c'), bar:new THREE.Color('#c9d1e0'), hemiSky:new THREE.Color('#6d7fa8'), hemiGnd:new THREE.Color('#0b0f18'), hemi:.55, sun:.35 };
const UP = new THREE.Color('#14a556'), DOWN = new THREE.Color('#e5483f'), WHITE = new THREE.Color('#ffffff');

const U = { night:{value:0}, glow:{value:0} };
/* jendela berdasar posisi dunia (malam menyala) + cahaya warna candle */
function patch(mat, windows, glow){
  mat.customProgramCacheKey = () => 'k' + (windows ? 'w' : '') + (glow ? 'g' : '');
  mat.onBeforeCompile = (sh) => {
    sh.uniforms.uNight = U.night; sh.uniforms.uGlow = U.glow;
    if (windows) {
      sh.vertexShader = 'varying vec3 vWP;\nvarying vec3 vWN;\n' + sh.vertexShader.replace('#include <project_vertex>', `#include <project_vertex>
        vec4 wp4 = vec4(transformed, 1.0);
        #ifdef USE_INSTANCING
          wp4 = instanceMatrix * wp4;
        #endif
        wp4 = modelMatrix * wp4; vWP = wp4.xyz;
        vec3 wn = objectNormal;
        #ifdef USE_INSTANCING
          wn = mat3(instanceMatrix) * wn;
        #endif
        vWN = normalize(mat3(modelMatrix) * wn);`);
      sh.fragmentShader = 'uniform float uNight;\nvarying vec3 vWP;\nvarying vec3 vWN;\n' + sh.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        { float vert = 1.0 - step(0.5, abs(vWN.y));
          float uu = abs(vWN.x) > 0.5 ? vWP.z : vWP.x;
          vec2 g = vec2(uu * 1.5, vWP.y * 1.25); vec2 f = fract(g);
          float win = step(.22, f.x) * step(f.x, .78) * step(.3, f.y) * step(f.y, .78) * vert * step(.7, vWP.y);
          float r = fract(sin(dot(floor(g) + floor(vWP.xz * .37), vec2(12.9898, 78.233))) * 43758.5453);
          diffuseColor.rgb *= 1.0 - win * 0.07 * (1.0 - uNight);
          totalEmissiveRadiance += vec3(1.0, .76, .42) * win * step(.5, r) * uNight * 1.3; }`);
    }
    if (glow) {
      sh.fragmentShader = 'uniform float uGlow;\n' + sh.fragmentShader.replace('#include <emissivemap_fragment>', `#include <emissivemap_fragment>
        #if defined(USE_INSTANCING_COLOR) || defined(USE_COLOR)
          totalEmissiveRadiance += vColor * uGlow;
        #else
          totalEmissiveRadiance += diffuseColor.rgb * uGlow;
        #endif`);
    }
  };
  return mat;
}

export function createWorld(canvas, P, opts){
  const tx = opts.t;
  const mobile = !!opts.mobile, R = rng(7), I = P.img;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: !mobile, powerPreference: 'high-performance' });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, mobile ? 1.5 : 2));
  renderer.shadowMap.enabled = !mobile; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const scene = new THREE.Scene();
  scene.background = DAY.bg.clone();
  scene.fog = new THREE.Fog(DAY.bg.clone(), 60, 220);
  const camera = new THREE.PerspectiveCamera(30, 1, 0.5, 3000);

  const manager = new THREE.LoadingManager();
  manager.onProgress = (u, a, b) => opts.onProgress && opts.onProgress(a / b);
  manager.onLoad = () => opts.onLoad && opts.onLoad();
  const loader = new THREE.TextureLoader(manager);
  const maxAniso = renderer.capabilities.getMaxAnisotropy();
  function tex(src, cb){ const t = loader.load(I + src, cb); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = Math.min(8, maxAniso); return t; }

  /* cahaya */
  const hemi = new THREE.HemisphereLight(DAY.hemiSky, DAY.hemiGnd, DAY.hemi); scene.add(hemi);
  const sun = new THREE.DirectionalLight(0xffffff, DAY.sun); sun.position.set(-60, 95, 55); sun.target.position.set(0, 0, -25);
  scene.add(sun, sun.target);
  if (!mobile) { sun.castShadow = true; const sc = sun.shadow.camera; sc.left = -85; sc.right = 85; sc.top = 85; sc.bottom = -85; sc.near = 10; sc.far = 260; sun.shadow.mapSize.set(2048, 2048); sun.shadow.bias = -0.0004; sun.shadow.normalBias = 0.04; }

  /* tanah: warnanya sama dengan latar, jadi saat pembuka kota "tidak ada" */
  const groundMat = new THREE.MeshBasicMaterial({ color: DAY.bg.clone() });
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(3000, 3000), groundMat); ground.rotation.x = -Math.PI / 2; scene.add(ground);
  const shadowMat = new THREE.ShadowMaterial({ opacity: 0, transparent: true });
  const shadowPlane = new THREE.Mesh(new THREE.PlaneGeometry(240, 240), shadowMat); shadowPlane.rotation.x = -Math.PI / 2; shadowPlane.position.set(0, 0.01, -25); shadowPlane.receiveShadow = true; scene.add(shadowPlane);
  const grid = new THREE.GridHelper(240, 120, 0x000000, 0x000000); grid.position.set(0, 0.02, -25);
  grid.material.transparent = true; grid.material.opacity = 0; grid.material.depthWrite = false; scene.add(grid);

  const box = new THREE.BoxGeometry(1, 1, 1); box.translate(0, 0.5, 0);
  const shaftMat = patch(new THREE.MeshStandardMaterial({ color: DAY.shaft.clone(), roughness: .92, metalness: 0, transparent: true, opacity: 0 }), true, false);
  const crownMat = patch(new THREE.MeshStandardMaterial({ roughness: .45, metalness: 0 }), false, true);
  const cityCrownMat = patch(new THREE.MeshStandardMaterial({ roughness: .6, transparent: true, opacity: 0 }), false, true);
  const wickMat = new THREE.MeshBasicMaterial({ color: DAY.wick.clone() });
  const antMat = new THREE.MeshBasicMaterial({ color: DAY.wick.clone(), transparent: true, opacity: 0 });
  const frameMat = new THREE.MeshStandardMaterial({ color: DAY.frame.clone(), roughness: .6, transparent: true, opacity: 0 });
  const fade = [cityCrownMat, antMat, frameMat];   /* ikut muncul saat kota terungkap */

  /* ---------- grafik candlestick (baris depan) ---------- */
  const candles = []; let c = 4.2;
  for (let i = 0; i < CHART.n; i++) {
    const o = c; let d = (R() - 0.42) * 2.1 + 0.12;
    if (CHART.journeyIdx.includes(i)) d = 0.7 + R() * 0.8;
    c = Math.max(2.2, o + d);
    const hi = Math.max(o, c) + R() * 1.1 + 0.25, lo = Math.max(0.6, Math.min(o, c) - R() * 1.1 - 0.2);
    candles.push({ x: CHART.x0 + i * CHART.step, o, c, hi, lo });
  }

  /* ---------- kota di belakang grafik ---------- */
  const cells = [];
  const near = (x, z, r) => Object.values(LAND).some(([lx, lz]) => (x - lx) ** 2 + (z - lz) ** 2 < r * r);
  for (let r = 1; r <= 18; r += (mobile ? 2 : 1)) for (let i = 0; i < CHART.n; i++) {
    const x = CHART.x0 + i * CHART.step + (R() - .5) * .3, z = -r * 2.4 + (R() - .5) * .3;
    if (near(x, z, 4.8)) continue;
    const h = 1.4 + R() * 4 + 3.6 * Math.exp(-((x / 24) ** 2 + ((z + 20) / 22) ** 2));
    cells.push({ x, z, h, w: 1.1 + R() * .4, cap: .3 + R() * .5, up: R() > .38, ant: R() < .22 ? .8 + R() * 2 : 0 });
  }

  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), v = new THREE.Vector3(), s = new THREE.Vector3(), col = new THREE.Color();
  const put = (mesh, i, x, y, z, w, h, d) => { mesh.setMatrixAt(i, m4.compose(v.set(x, y, z), q, s.set(w, Math.max(h, .001), d))); };

  const shafts = new THREE.InstancedMesh(box, shaftMat, candles.length + cells.length);
  const crowns = new THREE.InstancedMesh(box, crownMat, candles.length);
  const wicks = new THREE.InstancedMesh(box, wickMat, candles.length);
  const cityCrowns = new THREE.InstancedMesh(box, cityCrownMat, cells.length);
  const ants = new THREE.InstancedMesh(box, antMat, Math.max(1, cells.filter(e => e.ant).length));
  candles.forEach((k, i) => {
    const lo = Math.min(k.o, k.c), hi = Math.max(k.o, k.c);
    put(shafts, i, k.x, 0, 0, 1.25, lo, 1.25);
    put(crowns, i, k.x, lo, 0, 1.38, hi - lo, 1.38); crowns.setColorAt(i, k.c >= k.o ? UP : DOWN);
    put(wicks, i, k.x, k.lo, 0, .14, k.hi - k.lo, .14);
  });
  let a = 0;
  cells.forEach((e, j) => {
    put(shafts, candles.length + j, e.x, 0, e.z, e.w, e.h, e.w);
    put(cityCrowns, j, e.x, e.h, e.z, e.w + .06, e.cap, e.w + .06);
    cityCrowns.setColorAt(j, col.copy(e.up ? UP : DOWN).lerp(WHITE, .38));
    if (e.ant) put(ants, a++, e.x + e.w * .25, e.h + e.cap, e.z - e.w * .25, .1, e.ant, .1);
  });
  ants.count = a;
  for (const m of [shafts, crowns, cityCrowns]) { m.castShadow = !mobile; m.receiveShadow = !mobile; }
  scene.add(shafts, crowns, wicks, cityCrowns, ants);

  const pickables = [];
  /* ---------- gedung proyek ---------- */
  const landmarks = {};
  for (const [id, [x, z, h]] of Object.entries(LAND)) {
    const p = P.projects.find(e => e.id === id);
    const g = new THREE.Group(); g.position.set(x, 0, z);
    const tower = new THREE.Mesh(box, shaftMat); tower.scale.set(4, h, 4);
    const bandMat = patch(new THREE.MeshStandardMaterial({ color: new THREE.Color(p.color), roughness: .4, transparent: true, opacity: 0 }), false, true);
    const band = new THREE.Mesh(box, bandMat); band.scale.set(4.25, 1.1, 4.25); band.position.y = h - 1.1;
    const back = new THREE.Mesh(box, frameMat); back.scale.set(6.7, 4.3, .16); back.position.set(0, h - 6.55, 2.0);
    const bbMat = new THREE.MeshBasicMaterial({ map: tex(p.shots[0][0]), transparent: true, opacity: 0, toneMapped: false });
    const bb = new THREE.Mesh(new THREE.PlaneGeometry(6.4, 4), bbMat); bb.position.set(0, h - 4.4, 2.1);
    tower.userData = { kind: 'project', id }; bb.userData = { kind: 'shots', id };
    for (const m of [tower, band, back]) { m.castShadow = !mobile; m.receiveShadow = !mobile; }
    g.add(tower, band, back, bb);
    if (id === 'alexel') { const ant = new THREE.Mesh(box, antMat); ant.scale.set(.16, 5, .16); ant.position.set(-1.5, h, -1.5); g.add(ant); }
    scene.add(g); pickables.push(tower, bb); fade.push(bandMat, bbMat);
    landmarks[id] = { x, z, h, bandMat, label: new THREE.Vector3(x, h + 2.2 + (id === 'alexel' ? 4.5 : 0), z) };
  }

  /* ---------- jembatan Ekosistem SIG ---------- */
  const bridgeMat = new THREE.MeshBasicMaterial({ color: '#22b866', transparent: true, opacity: 0 });
  const flows = [['onesig', 'sigchat', 0, tx.flows[0]], ['onesig', 'siglearning', 1.6, tx.flows[1]], ['siglearning', 'onesig', 1.6, tx.flows[2]]].map(([fa, fb, side, text], k) => {
    const A = landmarks[fa], B = landmarks[fb];
    const pa = new THREE.Vector3(A.x, A.h - .5, A.z), pb = new THREE.Vector3(B.x, B.h - .5, B.z);
    const mid = pa.clone().add(pb).multiplyScalar(.5); mid.y += 7;
    const dir = pb.clone().sub(pa); mid.add(new THREE.Vector3(-dir.z, 0, dir.x).normalize().multiplyScalar(side));
    const curve = new THREE.QuadraticBezierCurve3(pa, mid, pb);
    scene.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 48, .09, 6), bridgeMat));
    const dot = new THREE.Mesh(new THREE.SphereGeometry(.32, 12, 12), bridgeMat); scene.add(dot);
    return { curve, dot, k, text, label: curve.getPoint(.5).add(new THREE.Vector3(0, .9, 0)) };
  });
  fade.push(bridgeMat);

  /* ---------- papan keahlian ---------- */
  const bc = document.createElement('canvas'); bc.width = 1600; bc.height = 880;
  const bx = bc.getContext('2d'), btex = new THREE.CanvasTexture(bc); btex.colorSpace = THREE.SRGBColorSpace; btex.anisotropy = Math.min(8, maxAniso);
  const boardRows = [
    ['WEB', P.skills.web.map(s => [s, tx.used])],
    ['FIN', P.skills.fin.map(s => [s, tx.learning])],
    ['ENV', P.env.map(([k, val]) => [k, val.split(',')[0]])]
  ];
  let boardHL = 0;
  function drawBoard(){
    bx.fillStyle = '#0d0f0c'; bx.fillRect(0, 0, 1600, 880);
    bx.fillStyle = '#ffb020'; bx.font = '600 44px "Geist Mono", monospace'; bx.fillText(tx.board, 60, 92);
    bx.fillStyle = '#5c6157'; bx.font = '400 30px "Geist Mono", monospace'; bx.fillText('LIVE ●', 1400, 92);
    bx.fillStyle = '#23271f'; bx.fillRect(60, 124, 1480, 3);
    let n = 0;
    boardRows.forEach(([head, rows], ci) => {
      const x = 60 + ci * 510;
      bx.fillStyle = '#14d06a'; bx.font = '600 34px "Geist Mono", monospace'; bx.fillText(head + ' ▲', x, 192);
      rows.forEach(([t, val], ri) => {
        const y = 270 + ri * 140, on = n++ === boardHL;
        if (on) { bx.fillStyle = 'rgba(20,208,106,.14)'; bx.fillRect(x - 16, y - 54, 480, 112); }
        bx.fillStyle = on ? '#ffffff' : '#d6dacd'; bx.font = '500 36px "Geist", sans-serif';
        bx.fillText(t.length > 22 ? t.slice(0, 21) + '…' : t, x, y);
        bx.fillStyle = on ? '#14d06a' : '#7d8476'; bx.font = '400 26px "Geist Mono", monospace'; bx.fillText((on ? '▲ ' : '') + val, x, y + 38);
      });
    });
    btex.needsUpdate = true;
  }
  drawBoard();
  const [bxp, byp, bzp] = SPOT.board;
  const boardG = new THREE.Group(); boardG.position.set(bxp, 0, bzp); boardG.rotation.y = Math.PI / 2;
  const boardMat = new THREE.MeshBasicMaterial({ map: btex, transparent: true, opacity: 0, toneMapped: false }); fade.push(boardMat);
  const boardFace = new THREE.Mesh(new THREE.PlaneGeometry(26, 14.3), boardMat); boardFace.position.y = byp + 2;
  const boardBack = new THREE.Mesh(box, frameMat); boardBack.scale.set(27, 15.3, .5); boardBack.position.set(0, byp + 2 - 7.65, -.3);
  const legs = [-9, 9].map(x => { const l = new THREE.Mesh(box, frameMat); l.scale.set(.6, byp - 5.2, .6); l.position.set(x, 0, -.3); return l; });
  boardG.add(boardFace, boardBack, ...legs); scene.add(boardG);
  for (const m of [boardBack, ...legs]) m.castShadow = !mobile;

  /* ---------- alun-alun simulasi ---------- */
  const [, , pz] = SPOT.plaza, NB = 30;
  const slab = new THREE.Mesh(box, shaftMat); slab.scale.set(34, .3, 9); slab.position.set(0, 0, pz); slab.receiveShadow = !mobile; scene.add(slab);
  const barBaseMat = new THREE.MeshStandardMaterial({ color: DAY.bar.clone(), roughness: .5, transparent: true, opacity: 0 });
  const barTopMat = patch(new THREE.MeshStandardMaterial({ color: UP, roughness: .4, transparent: true, opacity: 0 }), false, true);
  fade.push(barBaseMat, barTopMat);
  const barBase = new THREE.InstancedMesh(box, barBaseMat, NB), barTop = new THREE.InstancedMesh(box, barTopMat, NB);
  barBase.castShadow = barTop.castShadow = !mobile; scene.add(barBase, barTop);
  const simT = { base: new Float32Array(NB), top: new Float32Array(NB) }, simC = { base: new Float32Array(NB), top: new Float32Array(NB) };
  let simN = 10;
  function setSim(rows){
    const yrs = rows.slice(1), max = Math.max(1, rows[rows.length - 1].saldo), k = 15 / max; simN = Math.max(1, yrs.length);
    for (let i = 0; i < NB; i++) { const r = yrs[i]; simT.base[i] = r ? r.disetor * k : 0; simT.top[i] = r ? (r.saldo - r.disetor) * k : 0; }
  }
  const barX = i => -14.5 + (i + .5) * (29 / simN), barW = () => Math.min(1.8, 29 / simN * .66);

  /* ---------- galeri sertifikat ---------- */
  P.certs.forEach((cert, k) => {
    const g = new THREE.Group(); g.position.set(SPOT.certX, 0, -6 - k * 9); g.rotation.y = -Math.PI / 2;
    const back = new THREE.Mesh(box, frameMat), mat = new THREE.MeshBasicMaterial({ transparent: true, opacity: 0, toneMapped: false });
    const img = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), mat);
    const H = 5.8;
    mat.map = tex(cert.img, t => { const w = Math.min(8.6, H * t.image.width / t.image.height); img.scale.set(w, H, 1); back.scale.set(w + .5, H + .5, .3); });
    img.scale.set(8, H, 1); back.scale.set(8.5, H + .5, .3); back.position.set(0, 6.2 - (H + .5) / 2, -.2); img.position.set(0, 6.2, .02);
    const legs2 = [-2.8, 2.8].map(x => { const l = new THREE.Mesh(box, frameMat); l.scale.set(.25, 3.4, .25); l.position.set(x, 0, -.2); return l; });
    img.userData = back.userData = { kind: 'cert', k };
    g.add(back, img, ...legs2); scene.add(g); pickables.push(img); fade.push(mat);
    back.castShadow = !mobile;
  });

  /* ---------- atap Alexel: piringan hitam + foto ---------- */
  const [rx, ry, rz] = SPOT.roof;
  const deck = new THREE.Mesh(box, frameMat); deck.scale.set(3, .32, 3); deck.position.set(rx - .7, ry, rz + .3); scene.add(deck);
  const coverMat = new THREE.MeshStandardMaterial({ map: tex(P.hobi.band.cover), roughness: .35, transparent: true, opacity: 0 });
  const vinylSide = new THREE.MeshStandardMaterial({ color: '#111', roughness: .3, transparent: true, opacity: 0 });
  fade.push(coverMat, vinylSide);
  const vinyl = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.25, .08, 48), [vinylSide, coverMat, vinylSide]);
  vinyl.position.set(rx - .7, ry + .38, rz + .3); vinyl.userData = { kind: 'vinyl' }; scene.add(vinyl); pickables.push(vinyl);
  const photos = P.hobi.foto.map((f, k) => {
    const pm = new THREE.MeshStandardMaterial({ map: tex(f), roughness: .8, side: THREE.DoubleSide, transparent: true, opacity: 0 }); fade.push(pm);
    const m = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 2), pm);
    m.position.set(rx + 1.05 + k * .75, ry + 1.05, rz - 1.25 + k * .9); m.rotation.y = -.25 - k * .45; m.userData = { kind: 'photo', k };
    scene.add(m); pickables.push(m); return m;
  });
  let spinning = true;

  /* ---------- bintang ---------- */
  const sp = new Float32Array(1400 * 3);
  for (let i = 0; i < 1400; i++) { const th = R() * Math.PI * 2, ph = Math.acos(R() * .92), r = 900; sp.set([Math.sin(ph) * Math.cos(th) * r, Math.cos(ph) * r * .8 + 30, Math.sin(ph) * Math.sin(th) * r - 30], i * 3); }
  const sg = new THREE.BufferGeometry(); sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
  const starMat = new THREE.PointsMaterial({ color: 0xffffff, size: mobile ? 1.6 : 2, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false });
  scene.add(new THREE.Points(sg, starMat));

  /* ---------- pembaruan tiap frame ---------- */
  const bgNow = new THREE.Color();
  let boardClock = 0;
  function update(dt, st){
    const n = st.night, dark = Math.max(n, st.sky * .9);
    U.night.value = n; U.glow.value = n * .75;
    bgNow.copy(DAY.bg).lerp(NIGHT.bg, dark);
    scene.background.copy(bgNow); scene.fog.color.copy(bgNow); groundMat.color.copy(bgNow);
    scene.fog.near = st.dist + 25; scene.fog.far = st.dist + 170;
    hemi.intensity = THREE.MathUtils.lerp(DAY.hemi, NIGHT.hemi, dark); hemi.color.copy(DAY.hemiSky).lerp(NIGHT.hemiSky, dark); hemi.groundColor.copy(DAY.hemiGnd).lerp(NIGHT.hemiGnd, dark);
    sun.intensity = THREE.MathUtils.lerp(DAY.sun, NIGHT.sun, dark);
    shaftMat.color.copy(DAY.shaft).lerp(NIGHT.shaft, n);
    wickMat.color.copy(DAY.wick).lerp(NIGHT.wick, n); antMat.color.copy(wickMat.color);
    frameMat.color.copy(DAY.frame).lerp(NIGHT.frame, n); barBaseMat.color.copy(DAY.bar).lerp(NIGHT.bar, n);
    const rv = st.reveal;
    shaftMat.opacity = rv; shadowMat.opacity = rv * (.16 - .1 * dark); grid.material.opacity = rv * .06 * (1 - n * .5);
    for (const m of fade) m.opacity = rv;
    starMat.opacity = Math.max(n * .85, st.sky);
    for (const [id, L] of Object.entries(landmarks)) L.bandMat.emissive.setScalar(id === st.active ? .18 + .14 * Math.sin(st.time * 4) : 0);
    flows.forEach(f => f.dot.position.copy(f.curve.getPoint((st.time * .28 + f.k * .33) % 1)));
    if (spinning) vinyl.rotation.y += dt * 2.2;
    for (let i = 0; i < NB; i++) {
      simC.base[i] += (simT.base[i] - simC.base[i]) * Math.min(1, dt * 6);
      simC.top[i] += (simT.top[i] - simC.top[i]) * Math.min(1, dt * 6);
      const w = i < simN ? barW() : 0;
      put(barBase, i, barX(i), .3, pz, w, simC.base[i], w);
      put(barTop, i, barX(i), .3 + simC.base[i], pz, w, simC.top[i], w);
    }
    barBase.instanceMatrix.needsUpdate = barTop.instanceMatrix.needsUpdate = true;
    boardClock += dt;
    if (boardClock > .9 && st.near(9)) { boardClock = 0; boardHL = (boardHL + 1) % 12; drawBoard(); }
  }
  const ray = new THREE.Raycaster(), ndc = new THREE.Vector2();
  function pick(x, y){
    ndc.set(x, y); ray.setFromCamera(ndc, camera);
    const hit = ray.intersectObjects(pickables, false)[0];
    return hit ? hit.object.userData : null;
  }
  function resize(w, h){ renderer.setSize(w, h, false); }
  function render(){ renderer.render(scene, camera); }
  return {
    camera, renderer, update, pick, resize, render, setSim,
    toggleVinyl(){ spinning = !spinning; return spinning; },
    journeyPoints: CHART.journeyIdx.map(i => new THREE.Vector3(candles[i].x, candles[i].hi + .9, 0)),
    landmarks, flows,
    chartBox: { x0: CHART.x0 - 2, x1: CHART.x0 + (CHART.n - 1) * CHART.step + 2, y0: 0, y1: Math.max(...candles.map(k => k.hi)) }
  };
}
