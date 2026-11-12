(function(){
var P=window.PORTO,$=function(s){return document.querySelector(s)};
var I='images/';
window.applyLang(P);window.translateStatic();
var LANG=window.LANG,tr=window.tr;
function h(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e}
function chips(arr,n,cls){return arr.slice(0,n||arr.length).map(function(s){return '<span class="'+(cls||'chip')+'">'+s+'</span>'}).join('')}
function zoom(src){$('#lb img').src=src;$('#lb').classList.add('on')}
var toastT;function toast(t){var e=$('#toast');e.textContent=t;e.classList.add('on');clearTimeout(toastT);toastT=setTimeout(function(){e.classList.remove('on')},3200)}
$('#lb').addEventListener('click',function(){this.classList.remove('on')});
document.addEventListener('keydown',function(e){if(e.key==='Escape')$('#lb').classList.remove('on')});

/* masuk bertahap: kartu muncul satu per satu */
var urlCalm=/noanim/.test(location.search),calmMode=document.documentElement.classList.contains('noanim');
var rvIO=('IntersectionObserver' in window)?new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){rvIO.unobserve(x.target);fin(x.target)}})},{threshold:.1}):null;
function fin(el){el.classList.add('in');setTimeout(function(){el.classList.remove('rv','in');el.style.transitionDelay=''},1300)}
function rv(el,i,now){if(calmMode)return;el.classList.add('rv');el.style.transitionDelay=((i%3)*90)+'ms';
  if(now||!rvIO)setTimeout(function(){fin(el)},30);else rvIO.observe(el)}

/* bahasa: ganti lalu muat ulang di posisi yang sama */
var langEl=$('#lang');langEl.setAttribute('data-l',LANG);
[].forEach.call(langEl.querySelectorAll('button'),function(b){b.setAttribute('aria-pressed',b.dataset.l===LANG);
  b.addEventListener('click',function(){var n=b.dataset.l;if(n===LANG)return;langEl.setAttribute('data-l',n);
    [].forEach.call(langEl.querySelectorAll('button'),function(x){x.setAttribute('aria-pressed',x===b)});
    var pick='',off=scrollY;['tentang','portofolio','layanan','simulasi','hobi','kontak'].forEach(function(id){var e=document.getElementById(id);if(e&&e.getBoundingClientRect().top<=80){pick=id;off=-e.getBoundingClientRect().top}});
    try{sessionStorage.setItem('langSwap',JSON.stringify({id:pick,off:off}))}catch(e){}
    setTimeout(function(){var u=new URL(location.href);u.searchParams.set('lang',n);location.href=u.toString()},280)})});

/* tema + menu HP */
var reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
$('#theme').addEventListener('click',function(){
  var root=document.documentElement,n=root.getAttribute('data-theme')==='dark'?'light':'dark',r=this.getBoundingClientRect(),x=r.left+r.width/2,y=r.top+r.height/2;
  function apply(){root.setAttribute('data-theme',n);try{localStorage.setItem('theme',n)}catch(e){}}
  if(reduced){apply();return}
  if(!document.startViewTransition){root.classList.add('theming');apply();setTimeout(function(){root.classList.remove('theming')},600);return}
  /* lingkaran melebar dari tombol; ?tms=4000 memperlambat buat dicek */
  var ms=+((/[?&]tms=(\d+)/.exec(location.search)||[])[1])||650,t=document.startViewTransition(apply);
  t.ready.then(function(){var rad=Math.hypot(Math.max(x,innerWidth-x),Math.max(y,innerHeight-y));
    root.animate({clipPath:['circle(0px at '+x+'px '+y+'px)','circle('+rad+'px at '+x+'px '+y+'px)']},{duration:ms,easing:'cubic-bezier(.4,0,.2,1)',pseudoElement:'::view-transition-new(root)'})}).catch(function(){});
});
$('#menu').addEventListener('click',function(){var o=$('#links').classList.toggle('open');this.setAttribute('aria-expanded',o)});
$('#links').addEventListener('click',function(e){if(e.target.tagName==='A'){this.classList.remove('open');$('#menu').setAttribute('aria-expanded',false)}});
/* tombol Unduh CV: file CV ikut bahasa yang dipilih */
document.querySelectorAll('[data-cv]').forEach(function(a){var l=LANG==='en'?'EN':'ID';a.href='cv/CV-Alexander-'+l+'.pdf';a.setAttribute('download','CV-Ahmad-Zulfikri-Alexander-Disyin-'+l+'.pdf')});

/* hero */
$('#avatar').src=I+'alex-avatar.webp';$('#cut').src=I+'alex-cutout.webp';
[[7,'Proyek','+'],[2,'Open source',''],[3,'Sertifikat',''],[1,'Sistem digunakan','']].forEach(function(s){
  var d=h('div');d.innerHTML='<b data-count="'+s[0]+'">0'+(s[2]?'<em>'+s[2]+'</em>':'')+'</b><span>'+tr(s[1])+'</span>';d.querySelector('b').dataset.suffix=s[2];$('#stats').appendChild(d)});
(function(){var calm=window.matchMedia('(prefers-reduced-motion: reduce)').matches||calmMode;
  document.querySelectorAll('[data-count]').forEach(function(b){var n=+b.dataset.count,suf=b.dataset.suffix?'<em>'+b.dataset.suffix+'</em>':'';
    if(calm){b.innerHTML=n+suf;return}var t0=null;function step(t){if(!t0)t0=t;var k=Math.min((t-t0)/900,1);b.innerHTML=Math.round(n*(1-Math.pow(1-k,3)))+suf;if(k<1)requestAnimationFrame(step)}
    setTimeout(function(){requestAnimationFrame(step)},350);setTimeout(function(){b.innerHTML=n+suf},1700)})})(); /* pengaman: kalau animasi ditahan browser, angka akhir tetap tampil */
[['logo-smksig.png','SMK SIG'],['logo-idx.jpg','Bursa Efek Indonesia'],['logo-ai-ready-asean.png','AI Ready ASEAN'],['asian-foundation.png','ASEAN Foundation'],['IMG_9751.webp','PT Nale System Integrator']]
  .forEach(function(l){var im=h('img');im.src=I+l[0];im.alt=l[1];im.title=l[1];$('#logos').appendChild(im)});

/* tentang */
P.about.forEach(function(t){$('#abt').appendChild(h('p','',t))});
$('#str').innerHTML='<div><h3>Web Development</h3><div class="tags">'+chips(P.skills.web,0,'chip')+'</div></div><div><h3>Finance</h3><div class="tags">'+chips(P.skills.fin,0,'chip')+'</div></div><div><h3>'+tr('Lingkungan')+'</h3><dl class="kv">'
  +P.env.map(function(r){return '<dt>'+r[0]+'</dt><dd>'+r[1]+'</dd>'}).join('')+'</dl></div>';
var journey=P.journey.slice();journey.splice(3,0,window.pklEntry());
journey.forEach(function(j,i){var li=h('li');li.innerHTML='<div class="card c"><b>'+j.t+'</b><span>'+j.d+'</span></div>';$('#tl').appendChild(li);rv(li,i)});

/* tab portofolio */
var tabs=[].slice.call(document.querySelectorAll('#tabs button'));
function moveInd(){var sel=document.querySelector('#tabs button[aria-selected=true]'),ind=document.querySelector('#tabs .ind');if(!sel||!ind)return;
  ind.style.width=sel.offsetWidth+'px';ind.style.transform='translateX('+sel.offsetLeft+'px)';$('#tabs').classList.add('js-ind')}
tabs.forEach(function(b){b.addEventListener('click',function(){
  tabs.forEach(function(x){x.setAttribute('aria-selected',x===b);$('#p-'+x.dataset.tab).hidden=x!==b});moveInd();
  if(b.dataset.tab==='proyek')renderGrid();else[].slice.call($('#p-'+b.dataset.tab).children).forEach(function(k,i){rv(k,i,true)})})});
moveInd();addEventListener('resize',moveInd);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(moveInd);

/* detail proyek */
var dlg=$('#dlg');
function detail(p){
  $('#dTitle').textContent=p.name;$('#dBadge').textContent=p.badge;var b=$('#dBody');
  b.innerHTML='<div class="gal"><div class="main"><img alt=""></div><div class="ths"></div></div><div><p class="tg">'+p.tag+'</p><p>'+p.desc+'</p>'
    +(p.points.length?'<ul>'+p.points.map(function(x){return '<li>'+x+'</li>'}).join('')+'</ul>':'')+'<div class="tags">'+chips(p.stack)+'</div><div class="row" id="dLinks"></div></div>';
  function show(k){var s=p.shots[k],im=b.querySelector('.main img');im.src=I+s[0];im.alt=p.name+' — '+s[1];
    [].forEach.call(b.querySelector('.ths').children,function(x,j){x.setAttribute('aria-pressed',j===k)})}
  p.shots.forEach(function(s,k){var t=h('button');t.title=s[1];t.innerHTML='<img src="'+I+s[0]+'" alt="'+s[1]+'">';t.addEventListener('click',function(){show(k)});b.querySelector('.ths').appendChild(t)});
  show(0);
  p.links.forEach(function(l,k){var a=h('a','btn sm'+(k===0?' sky':''),l[0]+' ↗');a.href=l[1];a.target='_blank';a.rel='noopener';$('#dLinks').appendChild(a)});
  if(dlg.showModal)dlg.showModal();else dlg.setAttribute('open','');
}
$('#dx').addEventListener('click',function(){dlg.close()});
dlg.addEventListener('click',function(e){if(e.target===dlg)dlg.close()});

/* grid proyek + filter */
var gridReady=false,FIL=[['all','Semua'],['open','Open source'],['sig','Ekosistem SIG'],['sekolah','Sekolah dan kerja']],curF='all';
function renderGrid(){
  var g=$('#pgrid');g.innerHTML='';
  var list=P.projects.filter(function(p){return curF==='all'||p.group===curF}),n=list.length,w=(3-n%3)%3; /* kartu lebar mengisi sisa slot supaya baris terakhir penuh */
  list.forEach(function(p,i){
    var wide=n>1&&((w>=1&&i===0)||(w===2&&i===n-1));
    var c=h('button','card pc'+(wide?' wide':''));
    c.innerHTML='<div class="th"><img src="'+I+p.shots[0][0]+'" alt="'+tr('Tampilan')+' '+p.name+'" loading="lazy"></div><div class="bd"><h3>'+p.name+' <span class="badge">'+p.badge+'</span></h3><p>'+p.tag+'</p><div class="tags">'+chips(p.stack,4)+'</div><span class="more">'+tr('Lihat detail →')+'</span></div>';
    c.addEventListener('click',function(){detail(p)});g.appendChild(c);rv(c,i,gridReady)});gridReady=true}
FIL.forEach(function(f){var b=h('button','',tr(f[1]));b.setAttribute('aria-pressed',f[0]===curF);
  b.addEventListener('click',function(){curF=f[0];[].forEach.call($('#filters').children,function(x){x.setAttribute('aria-pressed',x===b)});renderGrid()});$('#filters').appendChild(b)});
renderGrid();

/* sertifikat + tech stack */
P.certs.forEach(function(c){var a=h('article','card cert');
  a.innerHTML='<img src="'+I+c.img+'" alt="'+tr('Sertifikat')+' '+c.title+'" loading="lazy"><div><small>'+c.org+'</small><h3>'+c.title+'</h3><p>'+c.kind+' · '+c.date+'</p><span class="badge ok">'+c.status+'</span></div>';
  a.querySelector('img').addEventListener('click',function(){zoom(I+c.img)});$('#p-sertifikat').appendChild(a)});
var all=[];P.projects.forEach(function(p){p.stack.forEach(function(s){if(all.indexOf(s)<0)all.push(s)})});
$('#p-stack').innerHTML='<div class="card"><h3>Web Development</h3><div class="tags">'+chips(P.skills.web,0)+'</div></div><div class="card"><h3>Finance</h3><div class="tags">'+chips(P.skills.fin,0)+'</div></div>'
  +'<div class="card"><h3>'+tr('Lingkungan')+'</h3><dl class="kv">'+P.env.map(function(r){return '<dt>'+r[0]+'</dt><dd>'+r[1]+'</dd>'}).join('')+'</dl></div>'
  +'<div class="card" style="grid-column:1/-1"><h3>'+tr('Dipakai di proyek-proyekku')+'</h3><div class="tags">'+chips(all,0)+'</div></div>';

/* layanan (draf teks, isi dari proyek nyata) */
[['01','Aplikasi web','Aplikasi web lengkap, dari tampilan sampai backend dan database.',['PHP','React','TypeScript','FastAPI','Node.js']],
 ['02','Sistem informasi','Absensi, pemilihan digital, kasir, dan pencatatan. Sistem absensi buatanku sudah dipakai nyata.',['Absensi','Pemilihan','Kasir QR']],
 ['03','Pasang di server','Bantu memasang aplikasi ke server atau hosting, plus panduan pemakaiannya.',['Docker','Linux']]]
 .forEach(function(s){var c=h('article','card');c.innerHTML='<span class="n">'+s[0]+'</span><h3>'+tr(s[1])+'</h3><p>'+tr(s[2])+'</p><div class="tags">'+chips(s[3].map(tr),0)+'</div><a class="btn sm" href="#kontak" style="align-self:flex-start;margin-top:14px">'+tr('Diskusi proyek')+'</a>';$('#svc').appendChild(c);rv(c,$('#svc').children.length-1)});

/* kalkulator */
var rp=LANG==='en'?function(n){return 'Rp'+Math.round(n).toLocaleString('en-US')}:rupiah; /* Inggris pakai koma ribuan */
function calc(){var m=+$('#cModal').value,s=+$('#cSetor').value,b=+$('#cBunga').value,t=+$('#cTahun').value,R=hitungMajemuk(m,s,b,t);
  $('#vModal').textContent=rp(m);$('#vSetor').textContent=rp(s);$('#vBunga').textContent=String(b).replace('.',',')+'%';$('#vTahun').textContent=t+' '+window.trYears(t);
  $('#rAkhir').textContent=rp(R.akhir);$('#rSetor').textContent=rp(R.disetor);$('#rBunga').textContent=rp(R.bunga);
  var max=Math.max(R.akhir,1),bars=$('#bars');bars.innerHTML='';
  R.rows.slice(1).forEach(function(r){var d=h('div');d.title=(LANG==='en'?'Year ':'Tahun ')+r.y+': '+rp(r.saldo);var a=h('i'),u=h('u');
    a.style.height=((r.saldo-r.disetor)/max*100)+'%';u.style.height=(r.disetor/max*100)+'%';d.appendChild(a);d.appendChild(u);bars.appendChild(d)})}
['cModal','cSetor','cBunga','cTahun'].forEach(function(id){$('#'+id).addEventListener('input',calc)});calc();

/* hobi */
var H=P.hobi;$('#plNote').textContent=H.playlist.note;H.playlist.artists.forEach(function(a){$('#art').insertAdjacentHTML('beforeend','<span class="chip">'+a+'</span>')});
$('#plInfo').textContent=H.playlist.info;$('#plUrl').href=H.playlist.url;$('#bSp').href=H.band.spotify;$('#bAp').href=H.band.apple;
$('#bintang').textContent=H.bintang;$('#nyanyi').textContent=H.nyanyi;
H.foto.forEach(function(f,i){var im=h('img');im.src=I+f;im.alt=(LANG==='en'?'My photo ':'Hasil jepretan ')+(i+1);im.loading='lazy';im.addEventListener('click',function(){zoom(I+f)});$('#fotos').appendChild(im)});

document.querySelectorAll('.hb > .card').forEach(function(c,i){rv(c,i)});

/* kontak */
$('#cnote').textContent=P.contact.note;$('#mailTxt').textContent=P.contact.email;
var m=h('a','btn sky',tr('Kirim email ↗'));m.href='mailto:'+P.contact.email;$('#cbtns').appendChild(m);
P.contact.links.forEach(function(l){var a=h('a','btn',l[0]+' ↗');a.href=l[1];a.target='_blank';a.rel='noopener';$('#cbtns').appendChild(a)});
$('#copy').addEventListener('click',function(){var b=this;function done(){b.textContent=tr('Tersalin ✓');setTimeout(function(){b.textContent=tr('Salin')},1600)}
  if(navigator.clipboard&&navigator.clipboard.writeText)navigator.clipboard.writeText(P.contact.email).then(done,done);else done()});

/* animasi halus + menu aktif */
var links=[].slice.call(document.querySelectorAll('#links a'));
if('IntersectionObserver' in window){
  var io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}})},{threshold:.08});
  document.querySelectorAll('.reveal').forEach(function(n){io.observe(n)});
  var io2=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting)links.forEach(function(a){var id=x.target.id;if(id==='simulasi'||id==='hobi')id='portofolio';a.classList.toggle('on',a.getAttribute('href')==='#'+id)})})},{rootMargin:'-45% 0px -50% 0px'});
  document.querySelectorAll('main > section, main > .wrap.hero').forEach(function(s){if(s.id)io2.observe(s)});
}else document.querySelectorAll('.reveal').forEach(function(n){n.classList.add('in')});

/* progres scroll, bayangan navbar, paralaks hero */
(function(){var prog=$('#prog'),pill=$('.pill'),tick=false;
  function upd(){tick=false;var max=document.documentElement.scrollHeight-innerHeight;prog.style.transform='scaleX('+(max>0?Math.min(scrollY/max,1):0)+')';pill.classList.toggle('scrolled',scrollY>24)}
  addEventListener('scroll',function(){if(!tick){tick=true;requestAnimationFrame(upd)}},{passive:true});upd();
  var hero=$('.hero'),still=reduced||window.matchMedia('(pointer: coarse)').matches||urlCalm;
  if(!still){hero.addEventListener('mousemove',function(e){var r=hero.getBoundingClientRect();
      hero.style.setProperty('--mx',((e.clientX-r.left)/r.width-.5)*2);hero.style.setProperty('--my',((e.clientY-r.top)/r.height-.5)*2)});
    hero.addEventListener('mouseleave',function(){hero.style.setProperty('--mx',0);hero.style.setProperty('--my',0)})}
})();

/* pulihkan posisi scroll setelah ganti bahasa */
try{var sw=sessionStorage.getItem('langSwap');if(sw){sessionStorage.removeItem('langSwap');sw=JSON.parse(sw);
  var rt=document.documentElement;rt.style.scrollBehavior='auto';var se=sw.id&&document.getElementById(sw.id);
  window.scrollTo(0,se?se.getBoundingClientRect().top+scrollY+sw.off:sw.off);requestAnimationFrame(function(){rt.style.scrollBehavior=''})}}catch(e){}
})();
