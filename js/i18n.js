/* Bahasa ID/EN. Isi bahasa Indonesia tetap ada di HTML dan data.js; file ini cuma menyimpan terjemahan Inggrisnya.
   Terjemahan isi (tentang, proyek, sertifikat, hobi) diambil dari situs lama Alex lewat versi Kota Bursa. */
(function(){
  var L='id';
  try{var q=/[?&]lang=(en|id)/.exec(location.search);L=q?q[1]:(localStorage.getItem('lang')==='en'?'en':'id')}catch(e){}
  try{localStorage.setItem('lang',L)}catch(e){}
  window.LANG=L;document.documentElement.setAttribute('lang',L);

  /* teks antarmuka: kunci = teks Indonesia persis, nilai = Inggris */
  var UI={
    'Beranda':'Home','Tentang':'About','Portofolio':'Portfolio','Layanan':'Services','Kontak':'Contact','Simulasi':'Simulation','Hobi':'Hobbies',
    'Proyek':'Projects','Sertifikat':'Certificates','Unduh CV':'Download CV','Lihat proyek →':'View projects →',
    'Halo, aku':"Hi, I'm",'pelajar pasar modal':'capital market student',
    'Siswa XII RPL di SMK SIG. Aku membangun aplikasi sekolah, editor kode, dan platform belajar ngoding, sambil mendalami pasar modal.':'A 12th-grade Software Engineering student at SMK SIG. I build school apps, a code editor, and a coding-learning platform, while studying the capital market.',
    'Editor kode buatanku · v1.0':'The code editor I built · v1.0',
    'Sekolah, sertifikasi & PKL':'School, certifications & internship',
    'Dua minat,':'Two interests,','satu cara berpikir.':'one way of thinking.',
    'Karya, sertifikat,':'Work, certificates,','dan tools.':'and tools.',
    'Paling depan Alexel Studio, editor kode buatanku sendiri. Setelah itu tiga aplikasi sekolah yang saling nyambung, lalu proyek lainnya.':'Up front is Alexel Studio, the code editor I built myself. Then three connected school apps, and the rest of my projects.',
    'Jasa pembuatan':'Web development','website.':'services.',
    'Terbuka untuk proyek freelance. Ceritakan kebutuhannya, nanti kita bahas bareng mana yang paling masuk akal.':"Open to freelance projects. Tell me what you need and we'll work out together what makes the most sense.",
    'Bunga majemuk,':'Compound interest,','dihitung langsung.':'calculated live.',
    'Modal awal':'Initial capital','Setoran per bulan':'Monthly deposit','Bunga per tahun':'Annual interest','Jangka waktu':'Time period',
    'Estimasi akhir':'Final estimate','Total setoran':'Total deposits','Estimasi bunga':'Estimated interest',
    'Simulasi sederhana pakai bunga majemuk bulanan, cuma buat ilustrasi belajar.':'Simple simulation using monthly compound interest, for educational illustration only.',
    'Di luar':'Beyond','ngoding.':'coding.',
    'Yang diputer pas nugas':'On repeat while studying','Melihat bintang':'Stargazing','Bernyanyi':'Singing','Memotret hal random':'Taking random photos',
    'Playlist Apple Music ↗':'Apple Music playlist ↗','Band favorit:':'Favourite band:',', lagu favorit If I Let You Go.':', favourite song If I Let You Go.',
    'Mari':"Let's",'terhubung.':'connect.',
    '© 2026 Ahmad Zulfikri Alexander Disyin — XII RPL':'© 2026 Ahmad Zulfikri Alexander Disyin — 12th grade RPL',
    /* atribut dan teks dinamis */
    'Navigasi utama':'Main navigation','Ganti tema terang atau gelap':'Switch between light and dark theme','Buka menu':'Open menu','Tutup':'Close','Ganti bahasa':'Switch language',
    'Foto Alex':'Photo of Alex','Grafik saldo per tahun':'Balance chart per year',
    'Sistem digunakan':'Systems in use','Lingkungan':'Environment','Dipakai di proyek-proyekku':'Used across my projects',
    'Semua':'All','Ekosistem SIG':'SIG Ecosystem','Sekolah dan kerja':'School & work','Lihat detail →':'View details →',
    'Tampilan':'Preview of','Aplikasi web custom':'Custom web apps','Sistem informasi':'Information systems','Pasang di server':'Server deployment',
    'Aplikasi web dari kebutuhan sampai jalan: backend, database, dan antarmuka yang rapi.':'Web apps from requirements to running: backend, database, and a clean interface.',
    'Absensi, pemilihan digital, kasir, dan pencatatan. Sudah digunakan nyata, bukan sekadar contoh.':'Attendance, digital voting, cashier, and record keeping. Already in real use, not just samples.',
    'Bantu naik ke hosting dan atur domain, supaya aplikasinya benar-benar bisa dipakai.':'Help putting it on hosting and setting up the domain, so the app is actually usable.',
    'Absensi':'Attendance','Pemilihan':'Voting','Kasir QR':'QR cashier','Diskusi proyek':'Discuss a project',
    'Kirim email ↗':'Send email ↗','Salin':'Copy','Tersalin ✓':'Copied ✓',
    'CV belum diunggah. Kirim filenya, nanti dipasang di tombol ini.':'CV not uploaded yet. Send the file and it will be attached to this button.'
  };
  var DESC='Alexander, a 12th-grade Software Engineering student at SMK SIG. A web developer who is also learning to read financial reports.';

  /* terjemahan isi, urut sama dengan data.js */
  var EN={
    about:[
      "Hi, I'm Alex — currently a 12th-grade Software Engineering student at SIG Vocational School. My interest in finance started back in middle school, wanting to understand how to manage money so I wouldn't just spend it carelessly later in life.",
      'When I entered vocational school I chose software engineering, honestly without much enthusiasm. But over time I got to know coding and software engineering more deeply — and it just stuck with me until now.',
      'These two interests might seem unrelated, but to me they connect: both are about recognizing patterns and building something neat out of data.'],
    journey:[['Middle School','Started being curious about financial management & capital markets.'],['Early Vocational',"Chose Software Engineering major, but honestly wasn't that motivated yet."],['Over time','Got to know and fell in love with coding / software engineering.'],['18 May 2026','Attended Capital Market School by Indonesia Stock Exchange, Surabaya.'],['Now','12th Grade Software Engineering Student, focused on improving my skills through a web-based attendance system project.']],
    pkl:['Jan – Jun 2026','Internship (PKL) at PT Nale System Integrator, Malang. Assessment result: GOOD.'],
    fin:['Basic Capital Market','Basic Financial Analysis','Investment & Stocks','Financial Recording'],
    env:['Machine','Operating System','Development Tools','Backend Stack'],
    projects:{
      alexel:{tag:'The code editor that works with AI.',desc:'A desktop code editor I built myself, free and open source. AI agents such as Claude Code, Codex, and Gemini can code alongside me, but every change still waits for my approval and can be undone with checkpoints. Tools you usually open separately are built in: a database client, an API client, Docker, notebooks, a browser, and Remote SSH.',
        points:['AI agents with per-change review, checkpoints, and undo','Databases: PostgreSQL, MySQL, SQLite, MongoDB, Redis + ER diagrams & Ask Your Data','An HTTP client built on .http files, with encrypted secrets','Jupyter notebooks, a browser tab, and Remote SSH','macOS · Windows · Linux'],links:['Website & download','GitHub'],shots:['Antartika theme','Database client','API client','Agent swarm','Notebook']},
      onesig:{badge:'11 ROLES',tag:'The school record book — hub of the SIG ecosystem.',desc:'The main app of SMK SIG: timetables, attendance, report grades, announcements, a school calendar, plus a digital wallet and a co-op store with QR checkout at the cashier. An account is created once here and also works in SIGChat and SIGlearning. Each role (student, teacher, homeroom teacher, cashier, counsellor, principal and more) only sees what belongs to its job, and important changes go to an audit log.',
        points:['When data disagrees, oneSIG is always right'],shots:['Home','Co-op cashier','Grade sheet','Timetable']},
      sigchat:{tag:'End-to-end encrypted school chat.',desc:'A chat app only for people at the school, replacing WhatsApp groups for school matters. Messages are end-to-end encrypted, so even the server cannot read them. Class and subject groups are created automatically from oneSIG data, students can message the counsellor directly, and teachers can pin notices, run polls and share SIGlearning lesson cards.',
        points:['Names, classes and roles come from oneSIG'],shots:['Chat room','Dark mode','Subject group (phone)','Sign in (phone)']},
      siglearning:{badge:'CP · QUIZ',tag:'An online learning space for teachers and students.',desc:'An online learning space. Teachers write learning outcomes and post lessons (video, PDF) and quizzes; students study and take quizzes any time, with progress tracking, exam practice and a class effort board. It opens from the oneSIG menu with no new password, and teachers can pull quiz scores into the oneSIG grade sheet.',
        points:['Quiz scores are practice until they reach oneSIG'],shots:['Home','Quiz','Progress','Teacher view']},
      orvella:{desc:'A coding-learning platform open to anyone. Every chapter has four phases, and the code you write really runs in a sandbox. You learn inside Orvella OS, a desktop in the browser with a dock, windows, a Sandbox, a project Gallery and Orvi, the AI assistant. Classmates can code together in real time, and mentors write their own lessons in the Content Studio.',
        points:['Understand → Practise → Quiz → Test','12 languages: Python · JavaScript · C · C++ · Rust · Java · Kotlin · Go · PHP · SQL · HTML · CSS','Your code actually runs, it is not just pattern-matched'],shots:['Orvella OS','Sandbox','Chapter: Understand']},
      epilketos:{tag:'Digital student council elections.',desc:'Digital student council elections at SMK Semen Gresik. Voters are verified by face recognition right in the browser, ballots are stored with no trace of who cast them, and the quick count turns straight into a printable official report. Runs as a kiosk-mode PWA on tablets.',shots:['Voting booth','Ballot','Quick count']},
      absensi:{name:'Attendance System',badge:'IN USE',tag:'A web attendance system that is actually in use.',desc:'A web-based attendance system, used for daily attendance recording along with summary reports for staff. It is currently used by PT Cipta Nirmala (RS SEMEN GRESIK)!',shots:['Dashboard','Sign-in page','Leave & sick notes']}
    },
    certs:[{title:'Capital Market School',kind:'Finance',date:'18 May 2026 · Surabaya',status:'PASSED'},{kind:'15 AI learning modules',date:'26 July 2026',status:'PASSED'},{title:'Internship (PKL)',kind:'Internship · Malang',date:'1 Jan – 30 Jun 2026',status:'GOOD'}],
    hobi:{note:'Songs that accompany me coding, studying, and looking at the night sky.',info:'137 songs • 8 hours 42 minutes',bintang:'One of my favorite moments is sitting for a while and looking at the night sky — spotting stars between schoolwork and coding.',nyanyi:'I also love singing, and I excel at high notes!'},
    contact:'Open to web project collaborations or discussions about finance.'
  };

  /* tr(): terjemahkan satu teks (dipakai kode yang membuat DOM) */
  window.tr=function(s){return L==='en'&&UI[s]!=null?UI[s]:s};
  window.trYears=function(n){return L==='en'?(n===1?'year':'years'):'tahun'};

  /* isi data.js diganti Inggris (dipanggil sebelum halaman dirender) */
  window.applyLang=function(P){
    if(L!=='en')return P;
    P.about=EN.about;P.journey=P.journey.map(function(j,i){return{t:EN.journey[i][0],d:EN.journey[i][1]}});
    P.skills.fin=EN.fin;P.env=P.env.map(function(r,i){return[EN.env[i],r[1]]});
    P.projects.forEach(function(p){var e=EN.projects[p.id];if(!e)return;
      ['name','badge','tag','desc','points'].forEach(function(k){if(e[k])p[k]=e[k]});
      if(e.links)p.links=p.links.map(function(l,i){return[e.links[i]||l[0],l[1]]});
      if(e.shots)p.shots=p.shots.map(function(s,i){return[s[0],e.shots[i]||s[1]]})});
    P.certs.forEach(function(c,i){for(var k in EN.certs[i])c[k]=EN.certs[i][k]});
    P.hobi.playlist.note=EN.hobi.note;P.hobi.playlist.info=EN.hobi.info;P.hobi.bintang=EN.hobi.bintang;P.hobi.nyanyi=EN.hobi.nyanyi;P.contact.note=EN.contact;
    return P};
  window.pklEntry=function(){return L==='en'?{t:EN.pkl[0],d:EN.pkl[1]}:{t:'Jan – Jun 2026',d:'PKL di PT Nale System Integrator, Malang. Hasil penilaian: BAIK.'}};

  /* terjemahkan teks tetap di HTML (node teks, atribut, judul, meta) */
  window.translateStatic=function(){
    if(L!=='en')return;
    var w=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode:function(n){
      var p=n.parentNode.nodeName;return(p==='SCRIPT'||p==='STYLE'||p==='svg'||p==='symbol')?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),nodes=[],n;
    while(n=w.nextNode())nodes.push(n);
    nodes.forEach(function(t){var k=t.nodeValue.trim();if(k&&UI[k]!=null)t.nodeValue=t.nodeValue.replace(k,UI[k])});
    document.querySelectorAll('[aria-label],[title],[alt]').forEach(function(e){['aria-label','title','alt'].forEach(function(a){var v=e.getAttribute(a);if(v&&UI[v]!=null)e.setAttribute(a,UI[v])})});
    var d=document.querySelector('meta[name=description]');if(d)d.content=DESC;
    var od=document.querySelector('meta[property="og:description"]');if(od)od.content='A 12th-grade Software Engineering student at SMK SIG. A web developer who is also learning to read financial reports.';
    var ol=document.querySelector('meta[property="og:locale"]');if(ol)ol.content='en_US';
  };
})();
