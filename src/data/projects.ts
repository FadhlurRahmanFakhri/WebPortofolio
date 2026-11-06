export interface Model3DConfig {
  modelUrl: string;
  /** URL ke file .mtl (opsional, dipakai saat format "obj") */
  mtlUrl?: string;
  sourceFile: string;
  objFile?: string;
  format: "glb" | "obj" | "blend";
  scale?: number;
  title?: string;
}

export interface Project {
  slug: string;
  title: string;
  category:
  | "Software Engineering"
  | "Computer Vision & AI"
  | "3D Modeling"
  | "3D Animation"
  | "2D & Digital Artwork";
  shortDescription: string;
  year: string;
  tools: string[];
  featured: boolean;
  thumbnail?: string;
  video?: string;
  model3d?: Model3DConfig;
  clientOrOrg?: string;
  role: string;
  overview: string;
  background: string;
  objectives: string[];
  contributions: string[];
  developmentProcess: {
    phase: string;
    description: string;
  }[];
  results: string[];
  links: {
    github?: string;
    demo?: string;
    artstation?: string;
    documentation?: string;
    instagram?: string;
  };
  visualHighlights: {
    title: string;
    type: "render" | "code" | "diagram" | "screenshot";
    caption: string;
    colorAccent: string;
  }[];
}

export const projectCategories = [
  "All",
  "Software Engineering",
  "Computer Vision & AI",
  "3D Modeling",
  "3D Animation",
  "2D & Digital Artwork",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projectsData: Project[] = [
  {
    slug: "uda-ijal-amaik-3d-environment",
    title: "Uda Ijal — Character Walk Cycle Simulation",
    category: "3D Animation",
    shortDescription:
      "Simulasi animasi gerak berjalan (walk cycle) karakter utama 'Uda Ijal' melewati latar pos ronda 3D dalam proyek pengembangan IP terbaru di Devata Studio Kreatif.",
    year: "2025",
    tools: ["Blender", "Viewport Render", "Graph Editor", "Dope Sheet"],
    featured: true,
    thumbnail: "",
    video: "/video/DaJal_Sengak.mp4",
    model3d: {
      modelUrl: "/models/isometricRoom.glb",
      sourceFile: "src/data/obj/isometricRoom.blend",
      objFile: "src/data/obj/isometricRoom.obj",
      format: "glb",
      scale: 0.9,
      title: "Character Walk Cycle Simulation",
    },
    clientOrOrg: "PT. Devata Studio Kreatif",
    role: "3D Generalist Intern",
    overview:
      "Proyek simulasi pergerakan karakter 3D ini merupakan bagian dari tahap riset dan pengembangan (R&D) IP original terbaru 'Uda Ijal & Amaik' saat magang di Devata Studio Kreatif. Animasi ini berfokus pada pengujian kepribadian (acting & character walk cycle) karakter Uda Ijal ketika berjalan santai di lingkungan lingkungan khas Indonesia, seperti pos ronda.",
    background:
      "Pengembangan IP serial animasi memerlukan karakterization walk cycle yang unik untuk mencerminkan sifat dan gesture khas dari tokoh tersebut. Proyek ini bertujuan untuk menguji kehalusan rig karakter Uda Ijal, artikulasi pakaian, serta memastikan ritme langkah kaki dan ayunan tangan selaras dengan latar lingkungan 3D yang dirancang.",
    objectives: [
      "Merancang gaya berjalan (walk cycle) yang memiliki ciri khas personality karakter Uda Ijal.",
      "Melakukan pengujian fleksibilitas dan daya tahan rig 3D karakter Uda Ijal saat berinteraksi dengan environment.",
      "Menjaga ritme langkah kaki dan timing pergerakan agar terlihat alami tanpa adanya efek foot sliding.",
      "Menyajikan simulasi visual karakter berjalan melintasi aset environment 3D pos ronda sebagai bahan evaluasi tim produksi animasi.",
    ],
    contributions: [
      "Mengembangkan keyposing dan in-betweening gerakan berjalan karakter Uda Ijal.",
      "Mengatur Graph Editor untuk menghaluskan akselerasi pergerakan pinggul, tulang belakang, dan ayunan kedua lengan.",
      "Melakukan penataan sudut pandang kamera (camera framing) melintasi aset lingkungan 3D pos ronda.",
      "Mengekspor animasi simulasi jalan melalui Viewport Render/Playblast untuk peninjauan teknis bersama tim Devata Studio.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Character Personality & Rig Testing",
        description:
          "Analisis gesture kepribadian Uda Ijal dan pengujian struktur bone rig karakter sebelum proses animasi utama.",
      },
      {
        phase: "Phase 2: Keyposing & Walk Cycle Blocking",
        description:
          "Penyusunan pose kunci berjalan (contact, down, passing, up poses) yang disesuaikan dengan ciri khas gaya berjalan Uda Ijal.",
      },
      {
        phase: "Phase 3: Environment Integration & Splining",
        description:
          "Penggabungan karakter dengan aset environment pos ronda 3D serta penghalusan kurva pergerakan di Blender Graph Editor.",
      },
      {
        phase: "Phase 4: Playblast & Internal Review",
        description:
          "Pengambilan sampel visual animasi (playblast/viewport render) untuk evaluasi teknis tim produksi IP Devata Studio.",
      },
    ],
    results: [
      "Berhasil mengeksekusi simulasi gaya berjalan karakter Uda Ijal yang natural dan kaya akan kepribadian.",
      "Memvalidasi kualitas rig karakter 3D serta keselarasan aset lingkungan pos ronda untuk siap masuk ke tahap produksi serial animasi.",
      "Memberikan kontribusi langsung dalam alur kerja R&D pengembangan IP original 'Uda Ijal & Amaik' di Devata Studio Kreatif.",
    ],
    links: {
      artstation: "",
      demo: "https://devatastudio.com",
    },
    visualHighlights: [
      {
        title: "Master Village Set Assembly",
        type: "render",
        caption: "Wide establishing render showing modular stilt houses, stone paths, and tropical foliage.",
        colorAccent: "#526B83",
      },
      {
        title: "PBR Material Breakdown",
        type: "render",
        caption: "Albedo, Roughness, Normal, and AO channel separation for aged timber shingles.",
        colorAccent: "#7C6354",
      },
      {
        title: "Topology & Wireframe Inspection",
        type: "diagram",
        caption: "Clean edge loops and quad-dominant topology optimized for shadow deformation.",
        colorAccent: "#3B4E61",
      },
    ],
  },
  {
    slug: "uda-ijal-opening-scene-animation",
    title: "Uda Ijal — Opening Scene Animation",
    category: "3D Animation",
    shortDescription:
      "Animasi adegan pembuka (opening scene) untuk IP 'Uda Ijal & Amaik' yang memperlihatkan karakter Uda Ijal tertidur lelap di pos ronda lengkap dengan efek suara dengkurannya.",
    year: "2025",
    tools: ["Blender", "Rigify", "Weight Painting", "Viewport Render", "Graph Editor", "Dope Sheet"],
    featured: true,
    thumbnail: "",
    video: "/video/SC_1.mp4",
    model3d: {
      modelUrl: "/models/eps1.glb",
      sourceFile: "src/data/obj/eps1.blend",
      objFile: "src/data/obj/eps1.obj",
      format: "glb",
      scale: 0.8,
      title: "Episode 1 Animated 3D Set",
    },
    clientOrOrg: "PT. Devata Studio Kreatif",
    role: "3D Generalist & Animator Intern",
    overview:
      "Proyek animasi adegan pembuka (opening shot) untuk proyek IP original 'Uda Ijal & Amaik' di Devata Studio Kreatif. Adegan ini menampilkan akting komedis karakter Uda Ijal yang sedang tertidur lelap di atas bale-bale pos ronda dengan pergerakan napas kembang-kempis, gesture tubuh yang rileks, serta sinkronisasi efek suara dengkuran (snoring audio).",
    background:
      "Dalam produksi serial animasi, adegan pembuka berfungsi untuk membangun suasana (establishing mood) dan memperkenalkan sifat unik karakter kepada penonton secara visual. Proyek ini dibuat untuk mengeksplorasi acting animation pasif (micro-expressions & breathing cycles) pada rig karakter Uda Ijal di dalam environment 3D pos ronda.",
    objectives: [
      "Menganimasi pergerakan akting karakter tertidur (sleeping pose & breathing dynamics) yang komedis dan alami.",
      "Mengatur ritme kembang-kempis bagian dada dan perut karakter agar selaras dengan audio efek suara ngorok.",
      "Membuat komposisi sudut pandang kamera sinematik untuk adegan pembuka serial animasi.",
      "Menyajikan hasil render visual adegan sebagai materi perancangan layout dan sinematografi IP Devata Studio.",
    ],
    contributions: [
      "Merancang pose tertidur dan ekspresi wajah rileks pada karakter Uda Ijal.",
      "Melakukan keyframing pada siklus pernapasan dada/perut dan pergerakan mikro tubuh saat tertidur.",
      "Melakukan sinkronisasi timing gerakan animasi dengan trek audio dengkuran.",
      "Menata framing kamera serta mengekspor animasi adegan pembuka via Viewport Render/Playblast.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Scene Layout & Audio Import",
        description:
          "Penataan posisi rig Uda Ijal di atas bale pos ronda dan import trek audio dengkuran sebagai rujukan timing animasi.",
      },
      {
        phase: "Phase 2: Sleeping Pose & Breathing Keyposing",
        description:
          "Pembuatan pose kunci tertidur dan animasi siklus napas naik-turun pada struktur tulang dada dan perut.",
      },
      {
        phase: "Phase 3: Facial Acting & Audio Sync",
        description:
          "Penyelarasan gerakan mulut/pipi saat bernapas dengan irama suara dengkuran untuk memperkuat unsur komedi.",
      },
      {
        phase: "Phase 4: Playblast & Shot Review",
        description:
          "Pengambilan sampel visual Playblast lengkap dengan audio untuk ditinjau oleh tim pengarah animasi Devata Studio.",
      },
    ],
    results: [
      "Berhasil mengeksekusi adegan pembuka (opening shot) IP 'Uda Ijal & Amaik' yang lucu, ekspresif, dan kaya akan kepribadian lokal.",
      "Memperdalam penguasaan acting animation pasif, pergerakan napas (breathing cycles), dan sinkronisasi audio pada Blender.",
      "Menghasilkan shot visual adegan pembuka yang siap digunakan untuk tahapan produksi IP selanjutnya di Devata Studio Kreatif.",
    ],
    links: {
      artstation: "",
      demo: "https://devatastudio.com",
    },
    visualHighlights: [
      {
        title: "Armature & Custom Rig Controller Layout",
        type: "render",
        caption: "Bipedal control scheme with custom color-coded widgets for head, limbs, and spine.",
        colorAccent: "#526B83",
      },
      {
        title: "Lip Sync & Facial Expression Matrix",
        type: "render",
        caption: "Phoneme visemes (A, E, I, O, U, M) and comedic expression shape-key targets.",
        colorAccent: "#DDA15E",
      },
      {
        title: "Keyframe Motion Arc Analysis",
        type: "diagram",
        caption: "Graph editor curves showing smooth easing, anticipation, and secondary follow-through.",
        colorAccent: "#BC6C25",
      },
    ],
  },
  {
    slug: "face-mask-detection-cnn-haar-cascade",
    title: "Face Mask Detection via CNN and Haar Cascade",
    category: "Computer Vision & AI",
    shortDescription:
      "Aplikasi web real-time berbasis Computer Vision dan Deep Learning untuk memantau serta mengklasifikasikan penggunaan masker wajah menggunakan metode Haar Cascade/BlazeFace dan CNN.",
    year: "2026",
    tools: ["Python", "OpenCV", "TensorFlow", "Keras", "NumPy", "CNN", "Haar Cascade"],
    featured: true,
    thumbnail: "/images/projects/ProyekComputerVision.png",
    clientOrOrg: "Politeknik Caltex Riau — Computer Vision Lab",
    role: "Computer Vision & Web Developer",
    overview:
      "Proyek tugas akhir mata kuliah Computer Vision berupa aplikasi berbasis web interaktif untuk deteksi dan klasifikasi penggunaan masker wajah secara real-time maupun lewat unggahan foto. Sistem mengombinasikan algoritma Haar Cascade (Python) / BlazeFace (Web) untuk lokalisasi area wajah serta model Convolutional Neural Network (CNN) untuk inferensi penggunaan masker di sisi klien memanfaatkan TensorFlow.js.",
    background:
      "Pentingnya otomatisasi pemantauan protokol kesehatan di area publik mendorong pengembangan sistem inferensi visual yang efisien dan responsif. Proyek tugas akhir ini dibuat untuk menguji integrasi model Deep Learning (CNN) dengan arsitektur web modern agar inferensi dapat berjalan langsung di peramban (client-side) tanpa memerlukan pemrosesan berat di server.",
    objectives: [
      "Mengimplementasikan deteksi lokalisasi area wajah menggunakan Haar Cascade / BlazeFace.",
      "Melatih dan mengintegrasikan model Convolutional Neural Network (CNN) untuk memprediksi apakah pengguna memakai masker dengan benar.",
      "Membangun antarmuka web interaktif yang mendukung inferensi real-time via webcam laptop serta pengujian unggah berkas gambar.",
      "Menjalankan arsitektur inferensi client-side secara efisien menggunakan TensorFlow.js di peramban web.",
    ],
    contributions: [
      "Merancang dan melatih arsitektur model CNN untuk klasifikasi masker wajah.",
      "Mengembangkan antarmuka web responsif dengan dukungan input webcam dan unggah gambar[cite: 4].",
      "Mengintegrasikan pustaka OpenCV dan TensorFlow.js untuk pemrosesan citra serta inferensi real-time langsung di sisi klien[cite: 4].",
      "Melakukan deployment aplikasi web interaktif di platform Vercel.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Dataset Preparation & Model Training",
        description:
          "Pengumpulan dataset citra wajah bermasker dan tidak bermasker, pre-processing gambar, serta pelatihan arsitektur model CNN menggunakan TensorFlow/Keras.",
      },
      {
        phase: "Phase 2: Model Conversion & Client-side Setup",
        description:
          "Konversi model CNN ke format TensorFlow.js serta pengintegrasian detektor area wajah BlazeFace/Haar Cascade untuk pemrosesan berbasis peramban[cite: 4].",
      },
      {
        phase: "Phase 3: Web Dashboard Development",
        description:
          "Pembuatan antarmuka visual detektor, modul pengunggah foto, kontrol webcam, dan panel informasi hasil inferensi[cite: 4].",
      },
      {
        phase: "Phase 4: Testing & Web Deployment",
        description:
          "Pengujian akurasi deteksi real-time di berbagai kondisi pencahayaan dan pengunggahan aplikasi ke Vercel[cite: 4].",
      },
    ],
    results: [
      "Berhasil membangun aplikasi web deteksi masker wajah yang beroperasi sepenuhnya di sisi klien menggunakan TensorFlow.js[cite: 4].",
      "Sistem mampu melakukan inferensi cepat secara real-time via webcam maupun analisis berkas gambar foto yang diunggah[cite: 4].",
      "Menyelesaikan proyek tugas akhir mata kuliah Computer Vision Semester 8 dengan integrasi Deep Learning dan Web Development yang solid.",
    ],
    links: {
      github: "https://github.com/fakhri-dev/hybrid-face-gesture-cnn",
      documentation: "",
    },
    visualHighlights: [
      {
        title: "Two-Tier Architecture Diagram",
        type: "diagram",
        caption: "Data flow from camera stream -> Haar Cascade ROI crop -> CNN classifier -> Output telemetry.",
        colorAccent: "#526B83",
      },
      {
        title: "Confusion Matrix & Performance Metrics",
        type: "diagram",
        caption: "Validation accuracy breakdown across Anger, Happiness, Neutral, Surprise, and Gesture classes.",
        colorAccent: "#386641",
      },
      {
        title: "Live Detection Viewport",
        type: "screenshot",
        caption: "Real-time webcam bounding box with dynamic confidence scoring and FPS telemetry counter.",
        colorAccent: "#6A4C93",
      },
    ],
  },
  {
    slug: "latansa-futsal-booking-system",
    title: "Latansa Futsal — Sports Field Booking & Schedule System",
    category: "Software Engineering",
    shortDescription:
      "Sistem informasi reservasi dan papan jadwal digital interaktif real-time untuk tempat olahraga Latansa Futsal Pekanbaru berbasis framework Laravel.",
    year: "2024",
    tools: ["Laravel", "PHP", "MySQL", "Bootstrap", "Figma", "Visual Studio Code", "JavaScript"],
    featured: true,
    thumbnail: "/images/projects/LATANSA.jpeg",
    video: "",
    model3d: {
      modelUrl: "/models/eps1.glb",
      sourceFile: "src/data/obj/eps1.blend",
      objFile: "src/data/obj/eps1.obj",
      format: "glb",
      scale: 0.8,
      title: "Latansa Futsal Web",
    },
    clientOrOrg: "Politeknik Caltex Riau - Bengkel Pemrograman Framework",
    role: "Full-Stack Web Developer",
    overview:
      "Proyek aplikasi web manajemen tempat olahraga yang dikembangkan untuk Latansa Futsal Pekanbaru sebagai bagian dari mata kuliah Bengkel Pemrograman Framework. Aplikasi ini menyediakan sistem pengelolaan jadwal lapangan yang terstruktur, visualisasi ketersediaan lapangan (papan informasi lapangan terpakai dan kosong secara real-time), serta kemudahan informasi pemesanan bagi pelanggan.",
    background:
      "Pengelolaan reservasi lapangan futsal secara manual sering memicu bentrok jadwal dan ketidakjelasan status ketersediaan bagi calon penyewa. Proyek ini hadir untuk memberikan solusi digital berupa platform manajemen berbasis Laravel yang mampu menampilkan jadwal penggunaan seluruh lapangan secara presisi, akurat, dan intuitif.",
    objectives: [
      "Membangun sistem informasi reservasi dan manajemen lapangan futsal terintegrasi menggunakan framework Laravel.",
      "Merancang antarmuka papan informasi (dashboard/display) yang memisahkan status 'Lapangan Terpakai' dan 'Lapangan Kosong' beserta rentang jam penyewaan secara real-time.",
      "Menyediakan panel kontak informasi layanan, link media sosial, dan lokasi fisik tempat olahraga untuk calon penyewa.",
      "Menerapkan struktur basis data relasional yang efisien untuk mengelola transaksi pemesanan dan jadwal lapangan.",
    ],
    contributions: [
      "Merancang skema basis data relasional (MySQL) untuk tabel lapangan, jadwal slot waktu, dan reservasi pelanggan.",
      "Mengembangkan backend web menggunakan arsitektur MVC pada framework Laravel.",
      "Mendesain antarmuka front-end dashboard informasi lapangan menggunakan Blade Templating dan penyesuaian gaya CSS dinamis.",
      "Mengintegrasikan logika penentuan status ketersediaan lapangan berdasarkan waktu aktual (jam dan tanggal).",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Requirements & Database Architecture",
        description:
          "Analisis kebutuhan tempat olahraga Latansa Futsal Pekanbaru dan perancangan skema database ERD menggunakan MySQL.",
      },
      {
        phase: "Phase 2: Backend & MVC Logic Development",
        description:
          "Implementasi Controller, Model, dan Routing di Laravel untuk menangani pemrosesan data reservasi dan manipulasi jam booking.",
      },
      {
        phase: "Phase 3: Front-End & Real-Time Schedule UI Design",
        description:
          "Pembuatan antarmuka visual papan layar jadwal (menampilkan daftar Lapangan Terpakai vs Lapangan Kosong, slider foto venue, dan running text).",
      },
      {
        phase: "Phase 4: Testing & Deployment",
        description:
          "Pengujian validasi jadwal agar tidak terjadi bentrok penyewaan (double booking) serta penyelarasan tampilan antarmuka.",
      },
    ],
    results: [
      "Berhasil mengembangkan aplikasi sistem reservasi dan informasi jadwal Latansa Futsal Pekanbaru berbasis Laravel tepat waktu.",
      "Menghasilkan antarmuka papan informasi lapangan yang memudahkan pemantauan ketersediaan waktu secara langsung.",
      "Memperkuat penguasaan pemetaan arsitektur MVC, ORM Eloquent, dan integrasi frontend-backend dalam pengembangan sistem web dinamis.",
    ],
    links: {
      artstation: "",
      demo: "",
    },
    visualHighlights: [
      {
        title: "Real-Time Field Availability & Schedule Dashboard",
        type: "render",
        caption: "Tampilan papan informasi dinamis yang memisahkan status lapangan terpakai dan kosong secara real-time berdasarkan waktu sistem.",
        colorAccent: "#2A9D8F",
      },
    ],
  },
  {
    slug: "sibudi-kebudayaan-indonesia-platform",
    title: "SIBUDI — Sistem Informasi Budaya & Kesenian Indonesia",
    category: "Software Engineering",
    shortDescription:
      "Platform web portal kebudayaan interaktif berbasis komunitas untuk dokumentasi, apresiasi, dan publikasi ragam seni, tari, batik, serta warisan budaya Nusantara.",
    year: "2024",
    tools: ["Laravel", "PHP", "MySQL", "Bootstrap", "Figma", "Visual Studio Code", "JavaScript"],
    featured: true,
    thumbnail: "/images/projects/SIBUDI.jpeg",
    video: "",
    model3d: {
      modelUrl: "/models/eps1.glb",
      sourceFile: "src/data/obj/eps1.blend",
      objFile: "src/data/obj/eps1.obj",
      format: "glb",
      scale: 0.8,
      title: "SIBUDI Web",
    },
    clientOrOrg: "Politeknik Caltex Riau - Workshop Rekayasa Perangkat Lunak",
    role: "Full-Stack Web Developer & UI/UX Contributor",
    overview:
      "Proyek kolaborasi kelompok dalam mata kuliah Workshop Rekayasa Perangkat Lunak untuk membangun platform portal budaya interaktif bernama SIBUDI (Sistem Informasi Budaya dan Kesenian). Platform ini dirancang sebagai tempat berkumpulnya komunitas seni untuk mempublikasikan karya, menjelajahi ragam kategori kebudayaan daerah (tari, batik, alat musik, bahasa, permainan tradisional, hingga event seni), serta berinteraksi melalui sistem umpan berita (feed) dan kurasi konten populer.",
    background:
      "Dokumentasi dan publikasi warisan budaya Nusantara kerap kali tersebar di berbagai media yang terfragmentasi. SIBUDI hadir sebagai platform repositori dan media sosial kebudayaan berbasis komunitas yang memudahkan masyarakat umum serta pelaku seni dalam mengunggah, mengapresiasi, dan mendokumentasikan ragam seni budaya Indonesia secara terstruktur.",
    objectives: [
      "Membangun portal sistem informasi kebudayaan Indonesia yang responsif dan kolaboratif menggunakan alur kerja Software Engineering.",
      "Merancang antarmuka antarmuka media interaktif dengan fitur umpan berita (Home, Fresh, Trending) serta kategorisasi seni (Tari, Batik, Lagu Daerah, Alat Musik, Event Seni).",
      "Mengimplementasikan fitur autentikasi pengguna (termasuk SSO/Google Login), unggah karya seni, serta interaksi sosial (upvote/downvote, komentar, dan tagging).",
      "Menyediakan panel kurasi konten mingguan ('Top Minggu Ini') dan sorotan karya seni Nusantara untuk meningkatkan keterlibatan publik.",
    ],
    contributions: [
      "Berkontribusi dalam perancangan struktur antarmuka front-end portal budaya (layout feed, sidebar navigasi kategori, dan panel visual karya).",
      "Mengembangkan logika backend untuk kategorisasi konten kebudayaan, pencarian (search), serta pemfilteran tagaris (hashtags).",
      "Membangun alur interaksi antarmuka pengguna seperti pengumpulan vote, jumlah komentar, dan penyampaian pengumuman banner kegiatan.",
      "Bermitra dalam tim untuk memastikan integrasi basis data relasional serta penyelarasan alur kerja rekayasa perangkat lunak kelompok.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Requirements Analysis & Cultural Categorization",
        description:
          "Pengumpulan kebutuhan sistem, pendefinisian entitas kebudayaan Nusantara (tari, batik, musik, bahasa, dsb.), dan perancangan arsitektur basis data.",
      },
      {
        phase: "Phase 2: UI/UX Prototyping & Layout Structuring",
        description:
          "Perancangan antarmuka green-themed UI yang mencerminkan identitas kebudayaan Nusantara lengkap dengan panel navigasi dinamis.",
      },
      {
        phase: "Phase 3: Full-Stack Feature Implementation",
        description:
          "Pengembangan fungsi autentikasi, sistem manajemen konten (CRUD artikel/media seni), serta algoritma pemeringkatan konten trending.",
      },
      {
        phase: "Phase 4: Group Integration & Testing",
        description:
          "Pengujian fungsionalitas fitur interaksi pengguna, performa responsif antarmuka, dan validasi kelayakan proyek kelompok.",
      },
    ],
    results: [
      "Berhasil menyelesaikan platform SIBUDI sebagai solusi digital terpadu untuk dokumentasi dan pengenalan seni budaya Indonesia.",
      "Membuktikan kolaborasi tim yang efektif dalam menerapkan prinsip-prinsip Software Engineering pada pengembangan aplikasi web berskala kelompok.",
      "Menambah portofolio rekayasa perangkat lunak dengan penekanan pada pengelolaan platform komunitas berbasis data dan visualisasi konten budaya.",
    ],
    links: {
      artstation: "",
      demo: "",
    },
    visualHighlights: [
      {
        title: "Cultural Content Feed & Community Interaction Dashboard",
        type: "render",
        caption:
          "Antarmuka portal kebudayaan SIBUDI yang menampilkan feed konten seni interaktif, kategorisasi warisan Nusantara (tari, batik, alat musik), serta kurasi tren mingguan.",
        colorAccent: "#2D6A4F",
      },
      {
        title: "Nusantara Cultural Taxonomy & Category Filtering",
        type: "render",
        caption:
          "Sistem pemfilteran navigasi lateral yang memudahkan eksplorasi spesifik seni tari, batik, alat musik, lagu daerah, hingga event kebudayaan lokal.",
        colorAccent: "#1B4332",
      },
    ],
  },
  {
    slug: "aqua-care-hub-ui-ux",
    title: "Aqua Care Hub",
    category: "Software Engineering",
    shortDescription:
      "Desain antarmuka aplikasi pemantauan kebersihan air dan sanitasi lingkungan berbasis partisipasi masyarakat untuk mencegah risiko penyakit menular seperti Demam Berdarah (DBD).",
    year: "2023",
    tools: ["Figma", "Canva"],
    featured: false,
    thumbnail: "/images/projects/AquaCare.png",
    clientOrOrg: "Politeknik Caltex Riau — Interaksi Manusia dan Komputer",
    role: "UI/UX Designer",
    overview:
      "AquaCareHub adalah perancangan wireframe dan mockup aplikasi mobile yang berfokus pada isu air bersih dan sanitasi layak. Sistem ini dirancang untuk memberdayakan masyarakat dalam memantau kebersihan lingkungan, menerima notifikasi real-time terkait kualitas air, dan mencegah persebaran penyakit berbasis air seperti Dengue (DBD).",
    background:
      "Air tergenang pada parit dan selokan yang tersumbat menjadi tempat berkembang biaknya nyamuk Aedes aegypti penular DBD. Melalui mata kuliah Interaksi Manusia dan Komputer, proyek ini dirancang untuk menghadirkan solusi digital berorientasi pengguna (user-centered) yang mempermudah edukasi, pelaporan, dan edukasi kebersihan air bagi kesehatan masyarakat.",
    objectives: [
      "Merancang wireframe dan mockup antarmuka pengguna (UI) aplikasi mobile yang intuitif menggunakan Figma.",
      "Menyediakan alur pengguna (user flow) untuk pemantauan kebersihan air lingkungan dan notifikasi tindakan perbaikan secara real-time.",
      "Meningkatkan kesadaran masyarakat terkait pentingnya sanitasi layak dan pencegahan penyakit menular berbasis air.",
      "Menerapkan prinsip-prinsip Interaksi Manusia dan Komputer (IMK) dalam pembuatan desain antarmuka berbasis kebutuhan pengguna.",
    ],
    contributions: [
      "Melakukan riset masalah sanitasi lingkungan dan merumuskan kebutuhan antarmuka aplikasi.",
      "Merancang low-fidelity wireframe dan high-fidelity mockup untuk layar utama, autentikasi, serta fitur pemantauan.",
      "Menyusun skema warna, tata letak (layout), dan elemen visual yang konsisten sesuai tema air bersih dan kesehatan.",
      "Membuat poster promosi proyek dan dokumentasi desain antarmuka.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Problem Definition & Research",
        description:
          "Menganalisis permasalahan genangan air, risiko penyakit DBD, dan pentingnya air bersih bagi kehidupan sehari-hari.",
      },
      {
        phase: "Phase 2: Information Architecture & Wireframing",
        description:
          "Menyusun tata letak konten dan struktur navigasi aplikasi mobile pada tahap pembuatan sketsa/wireframe.",
      },
      {
        phase: "Phase 3: High-Fidelity Prototyping in Figma",
        description:
          "Pengembangan mockup interaktif lengkap dengan sistem warna, tipografi, dan komponen visual UI.",
      },
      {
        phase: "Phase 4: Presentation & Evaluation",
        description:
          "Penyusunan poster publikasi proyek dan evaluasi antarmuka berdasarkan prinsip kesederhanaan dan kemudahan akses pengguna.",
      },
    ],
    results: [
      "Berhasil merancang prototipe antarmuka aplikasi mobile AquaCareHub yang user-friendly di Figma.",
      "Mendapatkan pemahaman mendalam mengenai penerapan prinsip usability dan UI/UX pada proyek mata kuliah IMK.",
      "Menghasilkan dokumentasi desain visual dan poster presentasi proyek.",
    ],
    links: {
      github: "https://github.com/FadhlurRahmanFakhri",
    },
    visualHighlights: [
      {
        title: "Homography Transformation Matrix",
        type: "diagram",
        caption: "Perspective rectification projecting camera view onto top-down 2D roadway grid.",
        colorAccent: "#526B83",
      },
      {
        title: "Multi-Class Bounding & ID Tracking",
        type: "screenshot",
        caption: "Simultaneous tracking of passenger cars, utility trucks, and motorcycles across 3 lanes.",
        colorAccent: "#2A9D8F",
      },
    ],
  },

  {
    slug: "dangerous-routes-gis",
    title: "Dangerous Routes Pekanbaru",
    category: "Software Engineering",
    shortDescription:
      "Web GIS interaktif berbasis OpenLayers dan ArcGIS untuk visualisasi pemetaan titik jalan rusak dan lokasi rawan kecelakaan di wilayah Pekanbaru.",
    year: "2024",
    tools: ["ArcGIS", "OpenLayers", "JavaScript", "HTML", "CSS"],
    featured: false,
    thumbnail: "/images/projects/DangerousRoute.png",
    clientOrOrg: "Politeknik Caltex Riau - Sistem Informasi Geografis",
    role: "GIS & Web Developer",
    overview:
      "Proyek Sistem Informasi Geografis (SIG) web interaktif yang menampilkan pemetaan data spasial jalan rusak dan titik rawan kecelakaan di Kota Pekanbaru. Aplikasi ini dibangun menggunakan pustaka OpenLayers untuk membantu pengguna melihat detail titik bahaya, melakukan penyaringan wilayah (per kecamatan), serta mengelola data spasial secara dinamis.",
    background:
      "Kondisi jalan yang rusak dan berlubang di wilayah urban sering kali meningkatkan risiko kecelakaan lalu lintas. Melalui proyek mata kuliah Sistem Informasi Geografis ini, dikembangkan sebuah portal peta digital interaktif berbasis web untuk menyajikan informasi spasial yang akurat berdasarkan hasil survei dan wawancara lapangan[cite: 2], sehingga dapat menjadi rujukan titik rawan bagi masyarakat maupun pihak berwenang.",
    objectives: [
      "Menampilkan visualisasi data spasial titik jalan rusak dan rawan kecelakaan di Kota Pekanbaru secara interaktif.",
      "Menerapkan OpenLayers dan ArcGIS untuk pengelolaan serta perataan layer peta digital.",
      "Menyediakan fitur penyaringan (filter) lokasi berdasarkan wilayah kecamatan di Pekanbaru.",
      "Menampilkan detail informasi lokasi, alamat, foto bukti kondisi jalan, serta koordinat titik rawan saat ikon peta dipilih.",
    ],
    contributions: [
      "Mengolah dan memetakan koordinat spasial daerah rawan kecelakaan hasil survei lapangan.",
      "Mengintegrasikan layanan peta dari ArcGIS ke dalam antarmuka web interaktif berbasis OpenLayers.",
      "Mengembangkan fitur penyaringan (filter kecamatan), pengelolaan layer peta (Data Survey, Polygon Pekanbaru), dan pop-up informasi detail titik bahaya.",
      "Merancang antarmuka web yang responsif untuk kemudahan aksesibilitas informasi peta bagi masyarakat umum.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Data Collection & Spatial Preparation",
        description:
          "Pengumpulan data koordinat lokasi titik rawan kecelakaan dan jalan rusak di Pekanbaru melalui survei serta pengolahan layers spasial menggunakan ArcGIS.",
      },
      {
        phase: "Phase 2: OpenLayers Web GIS Integration",
        description:
          "Menghubungkan data spasial ke antarmuka web interaktif berbasis JavaScript menggunakan pustaka OpenLayers.",
      },
      {
        phase: "Phase 3: Interactive Features Implementation",
        description:
          "Pembuatan fitur kontrol peta seperti layer switcher, penyaringan per kecamatan, serta jendela popup informasi detail titik lokasi.",
      },
      {
        phase: "Phase 4: Testing & Deployment",
        description:
          "Pengujian fungsionalitas peta interaktif dan modul pengelolaan data kecelakaan untuk memastikan informasi tersaji secara visual dan akurat.",
      },
    ],
    results: [
      "Berhasil membangun aplikasi Web GIS interaktif untuk visualisasi daerah rawan kecelakaan di Pekanbaru.",
      "Mempermudah identifikasi titik bahaya jalan melalui fitur penyaringan wilayah per kecamatan dan detail pop-up foto lapangan.",
      "Memberikan kontribusi nyata dalam penyediaan data publikasi lalu lintas berbasis spasial untuk meningkatkan keselamatan berkendara di Pekanbaru.",
    ],
    links: {
      github: "",
    },
    visualHighlights: [
      {
        title: "Jury Real-Time Scoring Interface",
        type: "screenshot",
        caption: "Responsive scoring rubric with automated subtotal calculation and submission confirmation.",
        colorAccent: "#526B83",
      },
      {
        title: "Relational Schema Architecture",
        type: "diagram",
        caption: "Entity-Relationship model linking delegates, events, judge rubrics, and certified results.",
        colorAccent: "#264653",
      },
    ],
  },
  {
    slug: "yasnur-pelaminan-laravel",
    title: "Yasnur Pelaminan Website",
    category: "Software Engineering",
    shortDescription:
      "Platform web penyedia jasa sewa dan dekorasi pelaminan berbasis Laravel untuk mempromosikan usaha keluarga, menampilkan galeri produk, serta mempermudah reservasi bagi calon pengantin.",
    year: "2024",
    tools: ["Laravel", "PHP", "MySQL", "Bootstrap", "HTML", "CSS", "JavaScript"],
    featured: false,
    thumbnail: "/images/projects/Pelaminan.png",
    clientOrOrg: "Politeknik Caltex Riau — Bengkel Pemrograman Framework",
    role: "Full Stack Web Developer",
    overview:
      "Aplikasi web responsif yang dikembangkan menggunakan framework Laravel untuk modernisasi katalog dan konsultasi layanan Yasnar Pelaminan (usaha dekorasi pernikahan milik keluarga). Website ini dirancang untuk menampilkan galeri dekorasi pernikahan, menyampaikan warisan/sejarah usaha sejak 1997, serta mempermudah komunikasi dan pemesanan layanan bagi calon pengantin.",
    background:
      "Diangkat dari usaha dekorasi pernikahan milik keluarga yang berdiri sejak 1997, proyek praktikum Bengkel Pemrograman Framework ini bertujuan membangun platform digital yang memadukan profesionalisme teknis dengan ke hangatan nilai-nilai keluarga. Pemilihan klien keluarga mempermudah kolaborasi langsung dalam merancang fitur katalog dan konsultasi yang ramah pengguna.",
    objectives: [
      "Merancang website yang estetis dan intuitif untuk menampilkan keelokan berbagai paket dekorasi pelaminan.",
      "Membangun arsitektur web yang sederhana namun responsif menggunakan framework Laravel agar mudah diakses pengunjung.",
      "Menyediakan sarana komunikasi dan integrasi peta lokasi untuk mempermudah calon pengantin berkonsultasi serta melakukan pemesanan.",
      "Menyajikan narasi sejarah dan warisan usaha keluarga guna meningkatkan kepercayaan dan keterlibatan calon klien.",
    ],
    contributions: [
      "Mengembangkan struktur backend dan pengolahan basis data menggunakan PHP Laravel dan MySQL.",
      "Merancang antarmuka frontend (UI/UX) untuk landing page, katalog Galeri Pernikahan, serta integrasi peta lokasi fisik usaha.",
      "Melakukan wawancara dan pengumpulan aset visual foto dekorasi pelaminan langsung dari pihak klien keluarga.",
      "Menerapkan fitur formulir pemesanan/reservasi serta saluran kontak langsung untuk mempermudah alur komunikasi klien.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Requirements Gathering & Family Business Analysis",
        description:
          "Diskusi kebutuhan sistem bersama pihak keluarga selaku pemilik usaha Yasnur Pelaminan (berdiri sejak 1997) dan pengumpulan galeri foto produk.",
      },
      {
        phase: "Phase 2: Database & Backend Architecture",
        description:
          "Perancangan skema database MySQL, konfigurasi routing, controller, dan model menggunakan MVC Laravel.",
      },
      {
        phase: "Phase 3: Frontend Integration & Layouting",
        description:
          "Pembuatan antarmuka visual landing page, tata letak galeri foto pernikahan, section cerita usaha, serta embed Google Maps lokasi.",
      },
      {
        phase: "Phase 4: Testing & Deployment",
        description:
          "Pengujian fungsionalitas alur pemesanan, pengiriman pesan kontak, serta pengujian responsivitas tampilan di berbagai perangkat.",
      },
    ],
    results: [
      "Berhasil membangun website katalog dan reservasi Yasnar Pelaminan berbasis Laravel secara menyeluruh.",
      "Mempermudah calon klien dalam melihat portofolio dekorasi, lokasi fisik usaha, dan menghubungi pengelola secara langsung.",
    ],
    links: {
      github: "https://github.com/FadhlurRahmanFakhri/laravel_fakhri"
    },
    visualHighlights: [
      {
        title: "Editorial Design System Spec",
        type: "diagram",
        caption: "Typographic scale, color hierarchy, and grid rhythm documentation.",
        colorAccent: "#526B83",
      },
    ],
  },
  {
    slug: "stylized-2d-building-grease-pencil",
    title: "Stylized 2D Building Animation",
    category: "2D & Digital Artwork",
    shortDescription:
      "Eksplorasi pembuatan aset bangunan 2D NPR (Non-Photorealistic Rendering) bergaya hand-drawn menggunakan fitur Grease Pencil dan 3D viewport pada software Blender.",
    year: "2025",
    tools: ["Blender", "Grease Pencil", "Eevee"],
    featured: false,
    thumbnail: "",
    video: "/video/FinalRender.mp4",
    clientOrOrg: "PT. Devata Studio Kreatif",
    role: "3D Generalist Intern",
    overview:
      "Proyek visualisasi animasi bangunan bertingkat gaya toko/kafe kartun yang menggunakan teknik gambar tangan 2D memanfaatkan tool Grease Pencil di Blender. Bangunan ditampilkan dengan rotasi 360 derajat lengkap dengan outline bernuansa line-art digital, pewarnaan cel-shaded, serta detail dekoratif tanaman dan kanopi.",
    background:
      "Integrasi alur kerja 2D kini semakin banyak digunakan dalam industri animasi modern. Proyek ini dibuat untuk mengeksplorasi kapabilitas Grease Pencil di Blender dalam menghasilkan aset arsitektur bernuansa kartun yang memiliki kedalaman bentuk 2D namun tetap mempertahankan estetika ilustrasi gambar tangan tradisional.",
    objectives: [
      "Merancang konsep struktur bangunan dua lantai dengan gaya visual hand-drawn/anime yang unik.",
      "Menggunakan fitur Grease Pencil di Blender untuk line-art dan stroke outline secara presisi pada ruang 2D.",
      "Menerapkan teknik pewarnaan flat/cel-shading serta pencahayaan NPR untuk memperkuat kesan ilustrasi 2D.",
      "Menghasilkan render animasi rotasi turntable 360 derajat yang halus untuk kebutuhan pameran portofolio aset visual.",
    ],
    contributions: [
      "Membuat bloking dasar geometri 2D sebagai panduan proporsi dan perspektif bangunan.",
      "Menggambar detail garis (stroke line-art), jendela, pintu, kanopi, serta dekorasi tanaman menggunakan Grease Pencil.",
      "Mengatur material fill color dan pencahayaan NPR (Non-Photorealistic Rendering) agar tampilan terlihat seperti ilustrasi 2D yang hidup.",
      "Melakukan setup kamera turntable, pergerakan rotasi dinamis, dan rendering akhir.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Concept & 2D Blockout",
        description:
          "Penyusunan ide arsitektur bangunan kartun dan pembuatan mesh dasar 2D sebagai rujukan skala serta perspektif.",
      },
      {
        phase: "Phase 2: Line Art Drawing with Grease Pencil",
        description:
          "Penataan garis kontur dan detail artistik menggunakan tool Grease Pencil secara 2D langsung.",
      },
      {
        phase: "Phase 3: Color Fill & Shading Setup",
        description:
          "Pemberian warna (flat color/cel-shading) pada setiap layer bagian bangunan seperti dinding, kanopi, kaca, dan tanaman.",
      },
      {
        phase: "Phase 4: Turntable Animation & Rendering",
        description:
          "Konfigurasi animasi rotasi penuh 360 derajat dan proses rendering video ekspor animasi menggunakan Blender Eevee.",
      },
    ],
    results: [
      "Berhasil mengeksekusi animasi rotasi bangunan bergaya 2D hand-drawn yang responsif dan konsisten.",
      "Menguasai alur kerja perpaduan teknik 2D Grease Pencil pada Blender.",
      "Menghasilkan karya visual animasi loop yang cocok untuk aset latar game maupun animasi pendek.",
    ],
    links: {
      instagram: "https://www.instagram.com/cyborg.dimension/",
    },
    visualHighlights: [
      {
        title: "Twilight Harbor Color Key",
        type: "render",
        caption: "Warm lantern lights reflecting against calm ocean tides under deep indigo twilight skies.",
        colorAccent: "#526B83",
      },
    ],
  },
  {
    slug: "pages-of-wisdom-2d-3d-animation",
    title: "Pages of Wisdom",
    category: "2D & Digital Artwork",
    shortDescription:
      "Eksplorasi pembuatan aset animasi hibrida 2D/3D yang menampilkan buku terbuka di atas meja dengan gaya visual cel-shaded NPR dan detail line-art stroke menggunakan Blender.",
    year: "2025",
    tools: ["Blender", "Grease Pencil", "Eevee"],
    featured: false,
    thumbnail: "",
    video: "/video/Wisdom.mp4",
    clientOrOrg: "PT. Devata Studio Kreatif",
    role: "3D Generalist Intern",
    overview:
      "Proyek karya visual 'Pages of Wisdom' merupakan animasi turntable 360 derajat yang menggabungkan struktur pemodelan 3D dengan estetika ilustrasi 2D. Menggambarkan sebuah buku terbuka yang melayang di atas stand kayu dan meja dengan alas kain bertuliskan inisial, karya ini memanfaatkan pencahayaan Non-Photorealistic Rendering (NPR) serta outline bernuansa gambar tangan.",
    background:
      "Proyek ini mengeksplorasi teknik 2D/3D hybrid pipeline di dalam Blender untuk menciptakan aset objek fantasi/klasik. Pendekatan ini memungkinkan aset memiliki kedalaman bentuk dan pencahayaan dinamis layaknya objek 3D, namun tetap mempertahankan tekstur visual yang hangat dan artistik seperti komik atau animasi 2D tradisional.",
    objectives: [
      "Merancang model 3D buku terbuka, meja, dan alas kain dengan proporsi serta gaya visual komik/anime.",
      "Menerapkan shading NPR (Non-Photorealistic Rendering) dan cel-shading untuk memberikan efek pewarnaan 2D yang tegas.",
      "Menggabungkan garis kontur/outline menggunakan Grease Pencil untuk memperkuat kesan line-art gambar tangan.",
      "Menghasilkan render animasi rotasi turntable 360 derajat yang halus dan sinematik untuk presentasi portofolio.",
    ],
    contributions: [
      "Membuat pemodelan 3D (blockout hingga detail mesh) untuk buku, penyangga kayu, meja, dan alas meja.",
      "Mengatur sistem pewarnaan flat/cel-shading serta lighting bayangan tegas (shadow threshold) pada viewport Eevee.",
      "Menambahkan stroke line-art dan detail garis halaman buku menggunakan elemen Grease Pencil.",
      "Melakukan setup kamera turntable loop 360 derajat dan proses ekspor rendering akhir.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: 3D Modeling & Framing",
        description:
          "Pemodelan dasar objek buku terbuka, penyangga kayu, dan meja beserta perancangan komposisi sudut pandang.",
      },
      {
        phase: "Phase 2: Stylized NPR Shading & Line Art",
        description:
          "Penerapan material cel-shaded, pengaturan warna dasar (flat color), dan penambahan stroke outline gaya 2D.",
      },
      {
        phase: "Phase 3: Lighting & Atmosphere Setup",
        description:
          "Penataan arah pencahayaan (spotlight) untuk menciptakan kontras bayangan yang dramatis pada permukaan meja dan buku.",
      },
      {
        phase: "Phase 4: Turntable Animation & Rendering",
        description:
          "Konfigurasi pergerakan kamera memutar 360 derajat dan proses rendering video loop menggunakan Blender Eevee engine.",
      },
    ],
    results: [
      "Berhasil mengeksekusi animasi rotasi 360 derajat hibrida 2D/3D 'Pages of Wisdom' dengan estetika visual cel-shaded yang konsisten.",
      "Memperdalam penguasaan teknik perpaduan 3D mesh modeling, NPR shading, dan elemen line-art 2D pada Blender.",
      "Menghasilkan aset animasi loop berkualitas yang cocok digunakan dalam animasi pendek maupun proyek gim.",
    ],
    links: {
      instagram: "https://www.instagram.com/cyborg.dimension/",
    },
    visualHighlights: [
      {
        title: "Twilight Harbor Color Key",
        type: "render",
        caption: "Warm lantern lights reflecting against calm ocean tides under deep indigo twilight skies.",
        colorAccent: "#526B83",
      },
    ],
  },

  /// isometric room
  {
    slug: "isometric-room-3d-study",
    title: "Isometric Room",
    category: "3D Modeling",
    shortDescription:
      "Desain dan visualisasi 3D kamar tidur bergaya isometrik modern yang dilengkapi dengan pencahayaan hangat, detail furnitur presisi, dan elemen dekoratif interior.",
    year: "2025",
    tools: ["Blender", "Image Texture & UV Mapping", "Cycle", "Render"],
    featured: false,
    thumbnail: "/images/projects/IsometricRoom-FinalRender.png",
    clientOrOrg: "PT. Devata Studio Kreatif",
    role: "3D Generalist Intern",
    overview:
      "Proyek pemodelan dan visualisasi 3D interior ruang kamar tidur bergaya isometrik yang dikembangkan selama masa magang di Devata Studio Kreatif. Proyek ini berfokus pada pembuatan prop lingkungan 3D, seperti tempat tidur, set meja komputer kerja, lemari pakaian, lampu meja, bingkai pajangan dinding, serta tanaman hias dengan pencahayaan sinematik yang tenang dan modern.",
    background:
      "Pemodelan isometrik sering digunakan dalam aset lingkungan game, animasi diorama, maupun promosi visual arsitektur. Proyek ini bertujuan untuk melatih keterampilan prop modeling, teksturing material yang realistis, penataan komposisi sudut pandang isometrik, serta manajemen pencahayaan interior (interior lighting) di Blender.",
    objectives: [
      "Merancang dan membuat pemodelan 3D prop furnitur kamar tidur bergaya modern minimalis secara teratur.",
      "Mengatur pencahayaan lembut (soft indoor light & window light beam) untuk menciptakan nuansa ruang yang hangat dan nyaman.",
      "Menerapkan material serta tekstur yang realistis pada permukaan kayu, kain seprai, dinding, dan barang-barang elektronik.",
      "Menghasilkan render visual diorama isometrik resolusi tinggi untuk kebutuhan aset lingkungan portofolio.",
    ],
    contributions: [
      "Membuat pemodelan 3D (hard-surface modeling) untuk seluruh objek interior kamar (meja, lemari, tempat tidur, komputer, bingkai foto, dan dekorasi).",
      "Menata layout ruang serta menyesuaikan skala prop agar proporsional dalam tampilan kamera orthographic/isometric.",
      "Mengatur pencahayaan hangat dari lampu tidur, monitor, serta efek sinar matahari yang masuk melintasi jendela.",
      "Melakukan setup rendering dan kompositing akhir menggunakan Cycles render engine di Blender.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Concept & Isometric Framing",
        description:
          "Penyusunan referensi layout kamar tidur modern dan penataan sudut pandang kamera orthographic/isometric di Blender.",
      },
      {
        phase: "Phase 2: Prop Modeling & Layouting",
        description:
          "Pemodelan 3D detail untuk setiap elemen furnitur, perangkat meja kerja, perabotan tidur, dan tanaman hias.",
      },
      {
        phase: "Phase 3: Texturing & Lighting Setup",
        description:
          "Pemberian material tekstur serta konfigurasi titik pencahayaan (key light, fill light, dan emissive light monitor/lampu).",
      },
      {
        phase: "Phase 4: High-Quality Rendering & Polish",
        description:
          "Proses rendering resolusi tinggi menggunakan Blender Cycles serta pengesetan denoiser untuk hasil visual yang bersih.",
      },
    ],
    results: [
      "Berhasil mewujudkan visualisasi 3D Isometric Room dengan estetika interior modern, bersih, dan hangat.",
      "Menguasai alur kerja pemodelan diorama 3D, tata letak prop ruangan, dan teknik lighting interior di Blender.",
      "Menghasilkan aset studi visual diorama 3D berkualitas tinggi yang melengkapi portofolio selama magang di Devata Studio Kreatif.",
    ],
    links: {
      artstation: "",
    },
    visualHighlights: [
      {
        title: "Gonjong Roof Curve Elevation",
        type: "render",
        caption: "Orthographic architectural view demonstrating geometric harmony of swooping eaves.",
        colorAccent: "#526B83",
      },
      {
        title: "Intricate Timber Carving Close-Up",
        type: "render",
        caption: "Macro render of hand-painted gold leaf inlay and weathered ironwood grain.",
        colorAccent: "#E76F51",
      },
    ],
  },

  //apple
  {
    slug: "stylized-3d-prop-apple-study",
    title: "Apple - Modeling Mastery ",
    category: "3D Modeling",
    shortDescription:
      "Simulasi fisika 3D (rigid body dynamics) yang menampilkan efek jatuhnya buah apel secara alami ke dalam mangkuk dekoratif berstruktur voronoi di atas meja kayu.",
    year: "2025",
    tools: ["Blender", "UV Mapping", "Rigid Body World", "Cycles"],
    featured: true,
    thumbnail: "",
    video: "/video/7.mp4",
    model3d: {
      modelUrl: "/models/apple1.glb",
      sourceFile: "src/data/obj/apple1.blend",
      objFile: "src/data/obj/apple1.obj",
      format: "glb",
      scale: 1.2,
      title: "Apple",
    },
    clientOrOrg: "PT. Devata Studio Kreatif",
    role: "3D Generalist Intern",
    overview:
      "Proyek eksperimen simulasi fisika 3D yang berfokus pada dinamika rigid body dan interaksi tabrakan (collision detection) antar objek. Video ini menampilkan puluhan aset 3D buah apel yang jatuh bersamaan, saling bertabrakan secara real-time, dan tertampung di dalam wadah mangkuk berlubang pola voronoi.",
    background:
      "Eksplorasi simulasi fisika pada software 3D seperti Blender sangat penting untuk menciptakan pergerakan objek masif yang alami tanpa perlu melakukan keyframing manual satu per satu. Proyek ini dibuat untuk mempelajari konfigurasi massa (mass), koefisien pantulan (bounciness/restitution), gesekan (friction), serta bentuk kolider (collision shape) pada objek dinamis.",
    objectives: [
      "Merancang model 3D buah apel dan mangkuk berstruktur pola voronoi beserta tekstur permukaan meja kayu.",
      "Mengkonfigurasi sistem Rigid Body World di Blender untuk mengontrol gravitasi, tabrakan, dan gravitasi masif.",
      "Mengatur parameter gesekan (friction) dan pantulan (restitution) agar interaksi antar-apel dan mangkuk terasa realistis.",
      "Menghasilkan render animasi pergerakan simulasi fisika yang mulus dan alami.",
    ],
    contributions: [
      "Membuat pemodelan 3D buah apel (lengkap dengan tangkai dan daun) serta mangkuk dekoratif berlubang.",
      "Menentukan tipe objek kolider (Active Rigid Body untuk apel dan Passive Rigid Body/Mesh Collider untuk mangkuk & meja).",
      "Melakukan kalkulasi (bake physics simulation) untuk mengunci pergerakan gerak jatuh dan tumpukan apel.",
      "Menata pencahayaan studio, kamera turntable/orbiting, serta melakukan rendering akhir.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: 3D Modeling & Texturing",
        description:
          "Pemodelan aset buah apel, perancangan geometri mangkuk voronoi, serta pemberian tekstur kayu pada permukaan meja.",
      },
      {
        phase: "Phase 2: Physics Setup & Collider Configuration",
        description:
          "Pengaturan status Active/Passive Rigid Body, massa tiap apel, bentuk kolisi (Mesh/Convex Hull), dan gesekan lantai.",
      },
      {
        phase: "Phase 3: Physics Baking & Tweaking",
        description:
          "Proses pengujian kalkulasi simulasi fisika, penyesuaian substep per frame untuk mencegah objek saling tembus (clipping), dan pencatatan gerak (baking).",
      },
      {
        phase: "Phase 4: Lighting & Final Rendering",
        description:
          "Pemberian tata cahaya (lighting setup), pengaturan kamera mengelilingi objek, dan ekspor render animasi.",
      },
    ],
    results: [
      "Berhasil mensimulasikan interaksi tabrakan dan tumpukan puluhan buah apel secara alami menggunakan Rigid Body Blender.",
      "Menguasai alur kerja konfigurasi fisika 3D, pengelolaan kolider Mesh, dan penguncian gerakan (baking simulation).",
      "Menghasilkan karya studi motion/simulation 3D yang dinamis untuk portofolio visual.",
    ],
    links: {
      artstation: "",
    },
    visualHighlights: [
      {
        title: "Subdivision Topology Inspection",
        type: "render",
        caption: "Smooth quad mesh with natural organic deformation contours.",
        colorAccent: "#E63946",
      },
    ],
  },

  //plane
  {
    slug: "plane-3d-study",
    title: "Plane - Modeling Mastery ",
    category: "3D Modeling",
    shortDescription:
      "Animasi motion 3D yang menampilkan pesawat baling-baling bergaya kartun (stylized cartoon plane) melayang terbang membelah gumpalan awan dalam pergerakan kamera orbiting 360 derajat.",
    year: "2025",
    tools: ["Blender", "Cycles", "UV Mapping", "Graph Editor"],
    featured: true,
    thumbnail: "",
    video: "/video/PLANE-MODELING MASTERY.mp4",
    model3d: {
      modelUrl: "/models/apple1.glb",
      sourceFile: "src/data/obj/apple1.blend",
      objFile: "src/data/obj/apple1.obj",
      format: "glb",
      scale: 1.2,
      title: "Plane",
    },
    clientOrOrg: "PT. Devata Studio Kreatif",
    role: "3D Generalist Intern",
    overview:
      "Proyek animasi motion 3D yang dibuat selama masa magang di Devata Studio Kreatif. Proyek ini menampilkan aset pesawat terbang baling-baling bergaya kartun (stylized/chibi plane) berwarna merah-kuning dengan detail kode 'F-29', lengkap dengan putaran baling-baling dinamis serta pergerakan kamera mengelilingi objek (orbiting camera) di antara gumpalan awan 3D.",
    background:
      "Eksplorasi animasi kendaraan (vehicle motion design) bergaya kartun memerlukan perpaduan antara gerakan melayang yang halus (floating sway animation), rotasi propeler yang dinamis, serta efek kedalaman visual saat melewati aset awan. Proyek ini dibuat untuk memperdalam teknik pembuatan animasi looping kendaraan 3D dan perancangan sinematografi kamera mengelilingi objek di Blender.",
    objectives: [
      "Merancang dan melakukan pemodelan 3D pesawat terbang baling-baling bergaya kartun/stylized dengan material berkilau (glossy finish).",
      "Menganimasi pergerakan melayang pesawat (floating/hovering motion) agar terlihat alami dan dinamis saat terbang.",
      "Mengatur pergerakan kamera orbit 360 derajat yang mulus melintasi gumpalan awan 3D di sekeliling pesawat.",
      "Menghasilkan render animasi motion loop berkualitas tinggi untuk kebutuhan reel/portofolio aset 3D.",
    ],
    contributions: [
      "Membuat pemodelan 3D pesawat kartun, sayap, kokpit, baling-baling, serta aset gumpalan awan 3D.",
      "Mengatur animasi rotasi cepat pada baling-baling dan efek swaying/kemiringan sayap pesawat saat terbang.",
      "Melakukan setup lintasan kamera memutar (camera track/orbit animation) untuk menampilkan detail sudut pandang pesawat dari berbagai arah.",
      "Menata pencahayaan studio dengan latar belakang warna gradasi serta melakukan proses ekspor render akhir.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: 3D Modeling & Stylized Texturing",
        description:
          "Pemodelan aset 3D pesawat kartun 'T-29', gumpalan awan gaya visual pop-art/stylized, serta penyesuaian material warna merah, kuning, dan hitam.",
      },
      {
        phase: "Phase 2: Vehicle Motion & Propeller Keyframing",
        description:
          "Penataan keyframe gerakan baling-baling berputar cepat serta variasi gerakan melayang naik-turun pada bodi pesawat.",
      },
      {
        phase: "Phase 3: Camera Orbit & Environment Framing",
        description:
          "Penyusunan pergerakan kamera 360 derajat mengelilingi pesawat dan penataan letak awan 3D untuk efek kedalaman (depth of field & foreground parallax).",
      },
      {
        phase: "Phase 4: Lighting & Final Rendering",
        description:
          "Pengaturan sistem pencahayaan yang bersih, penyesuaian bayangan, dan proses ekspor video animasi loop.",
      },
    ],
    results: [
      "Berhasil mengeksekusi animasi motion 3D penerbangan pesawat kartun dengan pergerakan kamera memutar yang halus dan sinematik.",
      "Menguasai alur kerja animasi kendaraan (vehicle motion design), penataan pergerakan kamera orbit, serta efek parallax objek lingkungan di Blender.",
      "Menghasilkan aset studi visual motion 3D berkualitas tinggi selama magang di Devata Studio Kreatif.",
    ],
    links: {
      artstation: "",
    },
    visualHighlights: [
      {
        title: "Subdivision Topology Inspection",
        type: "render",
        caption: "Smooth quad mesh with natural organic deformation contours.",
        colorAccent: "#E63946",
      },
    ],
  },

  //mini world
  {
    slug: "mini-world-3d-study",
    title: "Mini World - Modeling Mastery",
    category: "3D Modeling",
    shortDescription:
      "Desain dan visualisasi diorama 3D 3D miniatur kabin kayu gaya low-poly berlatar belakang hutan pinus hangat bernuansa musim gugur.",
    year: "2025",
    tools: ["Blender", "Cycles", "UV Mapping", "Shader Nodes"],
    featured: true,
    thumbnail: "/images/projects/miniworld-revWcycle.png",
    model3d: {
      modelUrl: "/models/apple1.glb",
      sourceFile: "src/data/obj/apple1.blend",
      objFile: "src/data/obj/apple1.obj",
      format: "glb",
      scale: 1.2,
      title: "Mini World",
    },
    clientOrOrg: "PT. Devata Studio Kreatif",
    role: "3D Generalist Intern",
    overview:
      "Proyek pemodelan visualisasi diorama 3D 3D 'Mini World' yang dikembangkan selama masa magang di Devata Studio Kreatif. Karya ini menampilkan rumah kabin kayu gaya low-poly (A-frame cabin) lengkap dengan teras, tangga, bebatuan, serta deretan pohon pinus geometris di atas platform tanah bertekstur nuansa cokelat-oranye hangat khas musim gugur.",
    background:
      "Gaya pemodelan low-poly diorama sering digunakan dalam pembuatan game indie, aset lingkungan 3D, maupun ilustrasi digital karena bentuk geometrisnya yang bersih dan estetis. Proyek ini bertujuan untuk mengeksplorasi efisiensi jumlah poligon (polycount), harmoni palet warna hangat, serta pencahayaan lembut pada pemodelan lingkungan diorama di Blender.",
    objectives: [
      "Merancang model 3D kabin kayu beratap segitiga (A-frame cabin) dengan gaya arsitektur low-poly yang rapi.",
      "Membuat aset lingkungan seperti pohon pinus geometris, batu, dan platform tanah bertekstur daun musim gugur.",
      "Menerapkan kombinasi palet warna cokelat, oranye, dan krem untuk menciptakan suasana hangat dan tenang.",
      "Menghasilkan render visual diorama isometrik beresolusi tinggi dengan pencahayaan studio yang lembut.",
    ],
    contributions: [
      "Membuat seluruh pemodelan 3D low-poly (kabin kayu, teras, tangga, pohon pinus, dan bebatuan).",
      "Menyusun tata letak (composition & layouting) diorama agar terlihat proporsional pada sudut pandang kamera isometrik.",
      "Mengatur sistem pewarnaan material, tekstur tanah, dan skema pencahayaan hangat (soft warm studio lighting).",
      "Melakukan setup rendering dan ekspor gambar akhir menggunakan Cycles render engine di Blender.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Low-Poly Blockout & Concept",
        description:
          "Penentuan ide diorama kabin kayu musim gugur dan pemodelan bentuk-bentuk dasar geometris (blockout) di Blender.",
      },
      {
        phase: "Phase 2: Environment Prop Modeling",
        description:
          "Pemodelan detail struktur kabin kayu, tangga, teras, bebatuan, serta pembentukan variasi ukuran pohon pinus low-poly.",
      },
      {
        phase: "Phase 3: Color Palette & Particle Setup",
        description:
          "Pemberian material warna hangat (monokromatik cokelat-oranye) dan pembuatan tekstur hamparan daun pada platform tanah.",
      },
      {
        phase: "Phase 4: Lighting & Final Rendering",
        description:
          "Pengaturan pencahayaan hangat (ambient & key light), penyesuaian sudut kamera orthographic/isometric, serta ekspor render akhir.",
      },
    ],
    results: [
      "Berhasil mewujudkan visualisasi 3D Low-Poly Mini World Diorama dengan estetika lingkungan yang hangat, rapi, dan menenangkan.",
      "Menguasai alur kerja pemodelan 3D low-poly, efisiensi topologi geometri, serta manajemen pencahayaan diorama di Blender.",
      "Menghasilkan aset studi visual diorama 3D berkualitas yang melengkapi portofolio selama magang di Devata Studio Kreatif.",
    ],
    links: {
      instagram: "https://www.instagram.com/cyborg.dimension/",
    },
    visualHighlights: [
      {
        title: "Subdivision Topology Inspection",
        type: "render",
        caption: "Smooth quad mesh with natural organic deformation contours.",
        colorAccent: "#E63946",
      },
    ],
  },

  //bicycle
  {
    slug: "bicycle-3d-study",
    title: "Bicycle - Modeling Mastery",
    category: "3D Modeling",
    shortDescription:
      "Desain dan visualisasi 3D area parkir sepeda ruangan indoor dengan pencahayaan sinematik (volumetric lighting) dan variasi warna sepeda yang detail.",
    year: "2025",
    tools: ["Blender", "Cycles", "Image Texture", "UV Mapping"],
    featured: true,
    thumbnail: "/images/projects/SepedaRender.png",
    model3d: {
      modelUrl: "/models/apple1.glb",
      sourceFile: "src/data/obj/apple1.blend",
      objFile: "src/data/obj/apple1.obj",
      format: "glb",
      scale: 1.2,
      title: "Bicycle",
    },
    clientOrOrg: "PT. Devata Studio Kreatif",
    role: "3D Generalist Intern",
    overview:
      "Proyek pemodelan dan visualisasi 3D aset lingkungan ruangan (indoor environment) yang dikembangkan selama masa magang di Devata Studio Kreatif. Proyek ini berfokus pada pemodelan 3D sepeda mountain bike/hybrid (hard-surface modeling) dengan detail rantai, rem, jari-jari roda, dan rak parkir, dipadukan dengan atmosfer ruangan industri yang dipenuhi elemen pipa serta pencahayaan sinematik melintasi jendela.",
    background:
      "Pemodelan sepeda merupakan salah satu latihan hard-surface modeling yang kompleks karena membutuhkan ketelitian tinggi pada proporsi rangka, struktur mekanis rantai, gear, serta susunan jari-jari roda. Proyek ini dibuat untuk menguji tingkat kedetailan pemodelan objek mekanis sekaligus eksplorasi pencahayaan atmosferik (volumetric light/dust beam) di Blender.",
    objectives: [
      "Merancang model 3D sepeda dengan detail komponen mekanis (rangka, stang, rantai, piringan rem, dan susunan jari-jari roda) yang presisi.",
      "Membuat aset lingkungan pendukung seperti pipa industri, sistem ventilasi udara, jendela, dan tempat parkir besi.",
      "Mengatur pencahayaan sinematik atmosferik (volumetric lighting) dari luar jendela untuk menciptakan efek bias cahaya yang realistis.",
      "Menghasilkan render visual dengan variasi warna material sepeda (merah, ungu, hitam, dan toska) beresolusi tinggi.",
    ],
    contributions: [
      "Membuat pemodelan 3D hard-surface untuk sepeda beserta komponen mekanisnya.",
      "Menyusun tata letak (layout & staging) deretan sepeda pada rak parkir dan penataan prop pipa di ruangan.",
      "Mengatur variasi material warna sepeda, tingkat kilau (roughness/metallic), serta material volumetric fog pada pencahayaan jendela.",
      "Melakukan setup rendering dan kompositing menggunakan Cycles render engine di Blender.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Hard-Surface Bicycle Modeling",
        description:
          "Pemodelan detail struktur sepeda (rangka utama, roda, jari-jari, rantai, pedal, dan tempat duduk) menggunakan teknik hard-surface modeling di Blender.",
      },
      {
        phase: "Phase 2: Indoor Environment Setup",
        description:
          "Pemodelan elemen latar belakang seperti tembok ruangan, pipa industri besar, saluran air-conditioner/ventilasi, dan rak parkir besi.",
      },
      {
        phase: "Phase 3: Shading & Volumetric Lighting",
        description:
          "Pemberian variasi material cat sepeda dan pengaturan efek bias sinar cahaya matahari (sunbeam/volumetric light) dari arah jendela.",
      },
      {
        phase: "Phase 4: High-Quality Rendering & Polish",
        description:
          "Pengaturan kamera, proses rendering menggunakan Cycles engine, serta pembersihan noise (denoising) untuk hasil visual akhir.",
      },
    ],
    results: [
      "Berhasil mewujudkan visualisasi 3D area parkir sepeda indoor dengan detail hard-surface modeling yang presisi dan atmosferik.",
      "Menguasai alur kerja pemodelan mekanis kompleks (sepeda) serta manajemen pencahayaan efek volumetric light di Blender.",
      "Menghasilkan aset studi visual 3D berkualitas tinggi yang melengkapi portofolio selama magang di Devata Studio Kreatif.",
    ],
    links: {
      artstation: "",
    },
    visualHighlights: [
      {
        title: "Subdivision Topology Inspection",
        type: "render",
        caption: "Smooth quad mesh with natural organic deformation contours.",
        colorAccent: "#E63946",
      },
    ],
  },

  //Primitive Owl
  {
    slug: "primitive-owl-3d-study",
    title: "Primitive Owl - 3D Generalist ",
    category: "3D Modeling",
    shortDescription:
      "Desain dan visualisasi karakter 3D burung hantu berbentuk kubus (stylized cube owl) yang bertengger di atas dahan pohon berlatar belakang hutan malam hari.",
    year: "2025",
    tools: ["Blender", "Cycles", "Image Texture", "UV Mapping", "Render"],
    featured: true,
    thumbnail: "/images/projects/4.png",
    model3d: {
      modelUrl: "/models/apple1.glb",
      sourceFile: "src/data/obj/apple1.blend",
      objFile: "src/data/obj/apple1.obj",
      format: "glb",
      scale: 1.2,
      title: "Primitive Owl",
    },
    clientOrOrg: "PT. Devata Studio Kreatif",
    role: "3D Generalist Intern",
    overview:
      "Proyek pemodelan dan visualisasi karakter 3D bergaya stylized geometri yang dikembangkan selama masa magang di Devata Studio Kreatif. Proyek ini menampilkan karakter burung hantu berbentuk dasar kubus (cube-shaped owl) lengkap dengan motif bulu, paruh kuning, serta mata hitam besar, yang hinggap di dahan pohon berlatar belakang suasana hutan lebat di malam hari.",
    background:
      "Perancangan karakter 3D berkonsep geometri dasar (seperti kubus/balok) sering diterapkan dalam desain karakter game modern dan mainan kolektif (vinyl figures). Proyek ini bertujuan untuk melatih kombinasi pemodelan karakter stylized, integrasi aset lingkungan 3D (hutan malam), serta pengaturan pencahayaan moonlight yang misteratis namun estetis di Blender.",
    objectives: [
      "Merancang dan membuat pemodelan 3D karakter burung hantu bergaya kubus (cube owl) yang unik dan ekspresif.",
      "Membuat lingkungan 3D pendukung berupa dahan tempat bertengger, pepohonan hutan, dan ranting berlatar malam hari.",
      "Mengatur suasana pencahayaan malam (night/moonlight atmosphere) untuk menonjolkan karakter utama di bagian tengah.",
      "Menghasilkan render visual karakter 3D resolusi tinggi dengan estetika visual yang rapi.",
    ],
    contributions: [
      "Membuat pemodelan 3D karakter burung hantu kubus beserta detail wajah, bulu, dan kakinya.",
      "Menyusun struktur lingkungan 3D hutan (dahan pohon foreground, latar belakang pepohonan, dan bebatuan).",
      "Mengatur penataan cahaya (key light hangat pada karakter dan rim light/ambient biru dingin untuk malam hari).",
      "Melakukan setup kamera dan proses rendering akhir menggunakan Cycles render engine di Blender.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Character Blockout & Stylized Concept",
        description:
          "Pemodelan bentuk dasar kubus untuk tubuh burung hantu dan penataan proporsi wajah serta kaki di Blender.",
      },
      {
        phase: "Phase 2: Environment Staging & Framing",
        description:
          "Pemodelan dahan pohon tempat hinggap burung hantu serta penyusunan aset pepohonan hutan sebagai latar belakang.",
      },
      {
        phase: "Phase 3: Shading & Night Lighting",
        description:
          "Pemberian tekstur/material bulu dan pengaturan kontras warna antara malam hari (biru tua) dengan sorotan cahaya pada karakter.",
      },
      {
        phase: "Phase 4: Final Rendering & Polish",
        description:
          "Proses rendering resolusi tinggi menggunakan Cycles engine di Blender serta penyesuaian denoiser untuk kejernihan gambar.",
      },
    ],
    results: [
      "Berhasil mewujudkan visualisasi 3D Cube Owl in the Night Forest dengan gaya karakter geometri stylized yang menarik.",
      "Menguasai alur kerja pemodelan karakter geometri, staging lingkungan alam 3D, dan manajemen pencahayaan suasana malam (night scene).",
      "Menghasilkan aset studi karakter dan lingkungan 3D berkualitas tinggi yang melengkapi portofolio magang di Devata Studio Kreatif.",
    ],
    links: {
      artstation: "",
    },
    visualHighlights: [
      {
        title: "Subdivision Topology Inspection",
        type: "render",
        caption: "Smooth quad mesh with natural organic deformation contours.",
        colorAccent: "#E63946",
      },
    ],
  },

  //Motion Study
  {
    slug: "360-kick-taekwondo",
    title: "360 Kick Taekwondo ",
    category: "3D Animation",
    shortDescription:
      "Studi animasi karakter 3D berbasis keyframe yang mensimulasikan gerakan tendangan berputar dinamis 360 Kick (360-degree spin kick) olahraga Taekwondo.",
    year: "2025",
    tools: ["Blender", "Graph Editor", "Viewport Render", "Pose Mode / Rigging", "Dope Sheet"],
    featured: true,
    thumbnail: "",
    video: "/video/Motion-Animation Mastery.mp4",
    model3d: {
      modelUrl: "/models/apple1.glb",
      sourceFile: "src/data/obj/apple1.blend",
      objFile: "src/data/obj/apple1.obj",
      format: "glb",
      scale: 1.2,
      title: "360 Kick Taekwondo",
    },
    clientOrOrg: "PT. Devata Studio Kreatif",
    role: "3D Generalist Intern",
    overview:
      "Proyek latihan aksi karakter 3D (character action animation) yang berfokus pada gerakan bela diri Taekwondo, khususnya teknik 360 Kick. Menggunakan karakter manekin kayu (mannequin rig), proyek ini mengeksplorasi prinsip-prinsip animasi seperti pose-to-pose, anticipation, weight, arcs, serta timing & spacing untuk menghasilkan gerakan tendangan berputar udara yang realistis dan bertenaga.",
    background:
      "Menganimasi gerakan bela diri berkecepatan tinggi memerlukan pemahaman mendalam tentang perpindahan bobot tubuh (weight transfer), momentum putaran, serta siluet pose yang jelas. Proyek ini dibuat untuk memperdalam pemahaman mengenai mekanika tubuh manusia (body mechanics) dalam animasi aksi dinamis menggunakan Blender.",
    objectives: [
      "Membuat rangkaian animasi keyframe gerakan tendangan Taekwondo 360 Kick dari persiapan awalan hingga pendaratan.",
      "Penerapan 12 prinsip animasi dasar, terutama anticipation, follow-through, timing, dan arcs pada rotasi tubuh.",
      "Mengatur kurva pergerakan (graph editor) agar transisi putaran di udara dan hentakan tendangan terasa alami serta memiliki momentum.",
      "Menghasilkan pengujian visual (playblast/render) animasi karakter aksi secara presisi.",
    ],
    contributions: [
      "Melakukan breakdown referensi video gerakan nyata Taekwondo 360 kick ke dalam keypose utama (blocking phase).",
      "Melakukan rigging pose dan penataan keyframe pada karakter manekin kayu 3D (wooden mannequin rig).",
      "Melakukan inbetweening, penghalusan kurva Graph Editor, serta penyesuaian timing untuk memberikan kesan dorongan dan gravitasi yang realistis.",
      "Melakukan ekspor dan rendering urutan animasi pergerakan karakter.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Motion Analysis & Keyposing (Blocking)",
        description:
          "Analisis pergerakan kaki, pinggul, dan tumpuan badan serta penentuan keypose utama (awalan melompat, putaran badan 360°, puncak tendangan, dan pendaratan).",
      },
      {
        phase: "Phase 2: In-Betweening & Graph Editor Splining",
        description:
          "Penambahan frame transisi dan penghalusan kurva rotasi bone untuk menciptakan pergerakan melayang dan putaran tubuh yang mulus.",
      },
      {
        phase: "Phase 3: Polish & Weight Adjustment",
        description:
          "Penyempurnaan rasa bobot (weight), kontak pendaratan di tanah, serta kejelasan siluet tendangan.",
      },
      {
        phase: "Phase 4: Playblast & Final Render",
        description:
          "Proses penataan kamera, pencahayaan dasar, dan ekspor animasi akhir menggunakan Blender.",
      },
    ],
    results: [
      "Berhasil mengeksekusi animasi gerakan bela diri Taekwondo 360 Kick dengan mekanika tubuh (body mechanics) yang dinamis dan proporsional.",
      "Memperdalam pemahaman alur kerja animasi 3D keyframe, khususnya dalam memanipulasi rotasi rig dan kurva pergerakan di Blender Graph Editor.",
      "Menghasilkan aset studi animasi karakter aksi yang solid untuk portofolio 3D animator.",
    ],
    links: {
      instagram: "https://www.instagram.com/cyborg.dimension/",
    },
    visualHighlights: [
      {
        title: "Subdivision Topology Inspection",
        type: "render",
        caption: "Smooth quad mesh with natural organic deformation contours.",
        colorAccent: "#E63946",
      },
    ],
  },
  {
    slug: "3d-character-walk-cycle",
    title: "Walk Cycle",
    category: "3D Animation",
    shortDescription:
      "Studi animasi mekanika tubuh (body mechanics) berbasis loop yang mensimulasikan siklus berjalan (walk cycle) karakter 3D secara ritmis dan alami.",
    year: "2025",
    tools: ["Blender", "Graph Editor", "Viewport Render", "Pose Mode / Rigging", "Dope Sheet"],
    featured: true,
    thumbnail: "",
    video: "/video/RenderWalkCycle.mp4",
    model3d: {
      modelUrl: "/models/apple1.glb",
      sourceFile: "src/data/obj/apple1.blend",
      objFile: "src/data/obj/apple1.obj",
      format: "glb",
      scale: 1.2,
      title: "Walk Cycle",
    },
    clientOrOrg: "PT. Devata Studio Kreatif",
    role: "3D Generalist Intern",
    overview:
      "Proyek latihan dasar animasi 3D yang berfokus pada pembuatan siklus pergerakan berjalan (walk cycle) secara looping berulang. Menggunakan karakter manekin kayu (mannequin rig), proyek ini melatih penerapan fundamental 12 prinsip animasi seperti contact, down, passing, up poses, weight transfer, serta pergerakan counter-balance antara lengan dan kaki.",
    background:
      "Membuat pergerakan berjalan yang alami tanpa terkesan kaku atau 'melayang' (foot sliding) merupakan fondasi penting bagi seorang 3D animator. Proyek ini bertujuan untuk menguasai alur kerja perancangan mekanika tubuh manusia saat berjalan tegak, penyesuaian bobot (weight), serta kesinambungan loop di Blender.",
    objectives: [
      "Merancang 4 pose kunci utama dalam walk cycle: Contact, Down (Passing/Pospush), Passing, dan Up.",
      "Memastikan keseimbangan pergerakan panggul (pelvis tilt/weight shifting) dan rotasi bahu secara harmonis.",
      "Mengatur kesinambungan frame awal dan akhir agar menghasilkan animasi loop berjalan yang mulus tanpa jeda kaku.",
      "Menghilangkan masalah foot sliding (kaki tergelincir) dengan penyelarasan kurva Graph Editor secara presisi.",
    ],
    contributions: [
      "Melakukan posing dasar (contact & passing pose) pada karakter manekin kayu 3D.",
      "Mengatur transisi in-betweening, bobot gravitasi pada pinggul, serta ayunan tangan yang berlawanan dengan gerakan kaki (counter-animation).",
      "Melakukan polishing kurva rotasi bone dan lokasi pergerakan di Graph Editor untuk menciptakan siklus berjalan yang konsisten.",
      "Menata pencahayaan studio dasar dan mengekspor animasi loop walk cycle.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Keyposing (Contact & Breakdown)",
        description:
          "Penentuan pose kontak kaki saat menyentuh lantai, pose dorongan (push/down), dan pose lewatan (passing pose).",
      },
      {
        phase: "Phase 2: Weight & Spine Adjustment",
        description:
          "Pemberian efek artikulasi pada tulang belakang, kemiringan pinggul (hip tilt), dan ayunan bahu sesuai perpindahan berat badan.",
      },
      {
        phase: "Phase 3: Graph Editor Splining & Looping",
        description:
          "Penghalusan kurva pergerakan kaki dan tangan serta penyesuaian nilai frame awal dan akhir untuk siklus loop berulang.",
      },
      {
        phase: "Phase 4: Playblast & Rendering",
        description:
          "Pengujian ritme langkah serta proses rendering akhir tampilan karakter berjalan.",
      },
    ],
    results: [
      "Berhasil mengeksekusi animasi 3D walk cycle yang halus, stabil, dan ritmis tanpa adanya foot sliding.",
      "Memperdalam pemahaman mendalam tentang prinsip dasar body mechanics dan penggunaan Blender Graph Editor untuk animasi loop.",
      "Menghasilkan aset studi dasar animasi yang penting untuk pengembangan animasi karakter lebih lanjut.",
    ],
    links: {
      instagram: "https://www.instagram.com/cyborg.dimension/",
    },
    visualHighlights: [
      {
        title: "Subdivision Topology Inspection",
        type: "render",
        caption: "Smooth quad mesh with natural organic deformation contours.",
        colorAccent: "#E63946",
      },
    ],
  },
  {
    slug: "3d-character-run-cycle",
    title: "Run Cycle ",
    category: "3D Animation",
    shortDescription:
      "Studi animasi mekanika tubuh (body mechanics) dinamis berbasis loop yang mensimulasikan gerak berlari cepat (run cycle) karakter 3D dengan dorongan momentum yang presisi.",
    year: "2025",
    tools: ["Blender", "Graph Editor", "Viewport Render", "Pose Mode / Rigging", "Dope Sheet"],
    featured: true,
    thumbnail: "",
    video: "/video/RenderRunCycle.mp4",
    model3d: {
      modelUrl: "/models/apple1.glb",
      sourceFile: "src/data/obj/apple1.blend",
      objFile: "src/data/obj/apple1.obj",
      format: "glb",
      scale: 1.2,
      title: "Run Cycle",
    },
    clientOrOrg: "PT. Devata Studio Kreatif",
    role: "3D Generalist Intern",
    overview:
      "Proyek studi animasi 3D yang berfokus pada dinamika gerakan berlari (run cycle) secara looping berulang. Menggunakan karakter manekin kayu (mannequin rig), proyek ini menekankan penerapan pose ekstrem saat berlari, seperti pose kontak cepat, airborne/flight phase (saat kedua kaki tidak menyentuh tanah), dorongan panggul yang lebih condong ke depan, serta ayunan tangan yang lebih agresif dibandingkan siklus berjalan.",
    background:
      "Menganimasi gerakan berlari membutuhkan penekanan pada momentum, gravitasi, dan tenaga dorong (weight & drive). Proyek ini bertujuan untuk menguasai perbedaan mendasar antara siklus berjalan dan berlari dalam animasi 3D, khususnya menjaga agar gerakan tetap terasa memiliki bobot alami tanpa ada masalah foot sliding di Blender.",
    objectives: [
      "Merancang pose kunci utama run cycle: Contact, Passing, Up (Airborne Phase), dan Down.",
      "Mengatur kemiringan tubuh (forward lean) dan rotasi panggul agar mencerminkan kecepatan serta dorongan berlari.",
      "Memastikan fase melayang di udara (airborne frame) tereksekusi dengan mulus saat perpindahan langkah kaki.",
      "Mengatur kesinambungan ritme loop frame awal dan akhir agar menghasilkan animasi berulang yang konsisten.",
    ],
    contributions: [
      "Melakukan keyposing posisi ekstrem kaki dan dorongan tubuh pada karakter manekin kayu 3D.",
      "Mengatur keseimbangan ayunan lengan dan tekukan siku yang lebih intensif untuk mengimbangi kecepatan langkah berlari.",
      "Melakukan penghalusan kurva rotasi bone pada Graph Editor untuk menghilangkan akselerasi yang patah dan foot sliding.",
      "Menata pencahayaan studio dasar dan melakukan ekspor render animasi akhir.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Keyposing & Airborne Framing",
        description:
          "Penentuan pose kontak utama, dorongan kaki (push-off), serta penyesuaian frame melayang di udara (airborne phase).",
      },
      {
        phase: "Phase 2: Lean & Weight Distribution",
        description:
          "Pengaturan condong tubuh ke depan, dinamika ayunan dada dan panggul, serta penyesuaian gravitasi saat pendaratan kaki.",
      },
      {
        phase: "Phase 3: Graph Editor Splining & Timing Polish",
        description:
          "Penyempurnaan timing & spacing langkah kaki di Graph Editor untuk menciptakan efek kecepatan berlari yang dinamis dan loop yang mulus.",
      },
      {
        phase: "Phase 4: Playblast & Final Render",
        description:
          "Pengujian ritme kecepatan langkah serta ekspor animasi akhir menggunakan Blender Eevee.",
      },
    ],
    results: [
      "Berhasil mengeksekusi animasi 3D run cycle yang dinamis, bertenaga, dan konsisten secara looping.",
      "Memperdalam pemahaman mekanika tubuh (body mechanics) mengenai perbedaan dinamika, momentum, dan airborne phase antara jalan dan lari.",
      "Menghasilkan aset studi aksi animasi karakter yang solid untuk portofolio 3D animator.",
    ],
    links: {
      instagram: "https://www.instagram.com/cyborg.dimension/",
    },
    visualHighlights: [
      {
        title: "Subdivision Topology Inspection",
        type: "render",
        caption: "Smooth quad mesh with natural organic deformation contours.",
        colorAccent: "#E63946",
      },
    ],
  },
  {
    slug: "long-jump",
    title: "Long Jump ",
    category: "3D Animation",
    shortDescription:
      "Studi animasi mekanika tubuh (body mechanics) yang mensimulasikan gerakan lompat jauh ke depan (broad jump) mulai dari persiapan (anticipation), dorongan (takeoff), melayang (airborne), hingga pendaratan (landing).",
    year: "2025",
    tools: ["Blender", "Graph Editor", "Viewport Render", "Pose Mode / Rigging", "Dope Sheet"],
    featured: true,
    thumbnail: "",
    video: "/video/RenderJump.mp4",
    model3d: {
      modelUrl: "/models/apple1.glb",
      sourceFile: "src/data/obj/apple1.blend",
      objFile: "src/data/obj/apple1.obj",
      format: "glb",
      scale: 1.2,
      title: "Long Jump",
    },
    clientOrOrg: "PT. Devata Studio Kreatif",
    role: "3D Generalist Intern",
    overview:
      "Proyek latihan aksi karakter 3D yang berfokus pada dinamika lompatan jauh ke depan (broad jump). Menggunakan karakter manekin kayu (mannequin rig), proyek ini menekankan penerapan 12 prinsip dasar animasi seperti anticipation (membungkuk sebelum melompat), squash & stretch saat pendaratan, serta pergerakan counter-balance tangan untuk menjaga keseimbangan saat melayang di udara.",
    background:
      "Menganimasi gerakan melompat melintasi jarak horizontal memerlukan pemahaman mendalam tentang transfer energi dan gravitasi. Proyek ini bertujuan untuk menguasai alur kerja penataan pose kunci (keyposing) dari posisi takeoff hingga menyerap benturan (impact absorption) saat pendaratan di Blender.",
    objectives: [
      "Merancang pose kunci utama lompatan: Anticipation/Crouch, Takeoff/Stretch, Airborne Apex, dan Landing/Squash.",
      "Menyempurnakan dorongan momentum ke depan serta gaya gravitasi saat karakter berada di udara.",
      "Mengatur ayunan kedua lengan untuk memperkuat kesan dorongan tenaga saat melompat.",
      "Memastikan benturan pendaratan (landing impact) terlihat alami dan memiliki rasa bobot yang realistis.",
    ],
    contributions: [
      "Melakukan keyposing posisi penekanan lutut (anticipation) dan dorongan penuh pada karakter manekin kayu 3D.",
      "Mengatur lintasan parabolik (arc) pergerakan panggul saat karakter melayang di udara.",
      "Melakukan penghalusan kurva Graph Editor pada akselerasi loncatan dan pengereman saat mendarat.",
      "Menata pencahayaan studio dasar dan melakukan ekspor render animasi akhir.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Keyposing & Anticipation Setup",
        description:
          "Penentuan pose awal bungkuk (squash/crouch) sebagai gaya dorong sebelum melompat ke depan.",
      },
      {
        phase: "Phase 2: Takeoff & Airborne Arc",
        description:
          "Pengaturan pose ekstensi tubuh saat lepas landas (takeoff) dan pembentukan kurva lintasan melayang (arc) di udara.",
      },
      {
        phase: "Phase 3: Landing Impact & Polish",
        description:
          "Penyempurnaan momen mendarat (impact recovery) untuk menyerap energi dorongan dan menyeimbangkan kembali posisi berdiri tegak.",
      },
      {
        phase: "Phase 4: Playblast & Final Render",
        description:
          "Pengujian timing gerakan secara menyeluruh dan proses ekspor render akhir animasi menggunakan Blender Eevee.",
      },
    ],
    results: [
      "Berhasil mengeksekusi animasi 3D Broad Jump dengan penekanan anticipation dan landing impact yang meyakinkan.",
      "Memperdalam penguasaan prinsip body mechanics terkait transfer energi dorong dan gravitasi pada gerakan melompat.",
      "Menghasilkan aset studi aksi mekanika tubuh yang melengkapi portofolio 3D animator.",
    ],
    links: {
      instagram: "https://www.instagram.com/cyborg.dimension/",
    },
    visualHighlights: [
      {
        title: "Subdivision Topology Inspection",
        type: "render",
        caption: "Smooth quad mesh with natural organic deformation contours.",
        colorAccent: "#E63946",
      },
    ],
  },
  {
    slug: "child-of",
    title: "Child Of Constraint — Drinking Animation ",
    category: "3D Animation",
    shortDescription:
      "Studi interaksi karakter 3D dengan objek (prop interaction) menggunakan constraint Child Of di Blender untuk mensimulasikan gerakan mengambil kaleng, minum, dan meletakkannya kembali ke meja.",
    year: "2025",
    tools: ["Blender", "Graph Editor", "Viewport Render", "Child Of Constraint", "Dope Sheet"],
    featured: true,
    thumbnail: "",
    video: "/video/RenderMeletakkanObjek.mp4",
    model3d: {
      modelUrl: "/models/apple1.glb",
      sourceFile: "src/data/obj/apple1.blend",
      objFile: "src/data/obj/apple1.obj",
      format: "glb",
      scale: 1.2,
      title: "Child Of",
    },
    clientOrOrg: "PT. Devata Studio Kreatif",
    role: "3D Generalist Intern",
    overview:
      "Proyek latihan animasi 3D yang berfokus pada penguasaan teknik prop interaction menggunakan constraint 'Child Of' di Blender, sebagai bagian dari modul Animation Mastery selama magang di Devata Studio Kreatif. Animasi ini menampilkan karakter manekin kayu 3D (mannequin rig) yang menjangkau kaleng minuman di atas meja, mengangkatnya ke mulut untuk minum, dan meletakkannya kembali secara halus tanpa interupsi pergeseran lokasi (offset shifting).",
    background:
      "Menganimasi karakter yang memegang dan melepas benda dinamis merupakan tantangan teknis dalam animasi 3D, karena membutuhkan peralihan hierarki parent-child (parenting switch) secara tepat per frame. Proyek ini dibuat untuk melatih penggunaan constraint Child Of serta pengelolaan influence slider agar interaksi tangan karakter dan prop kaleng terlihat alami dan presisi.",
    objectives: [
      "Membuat alur gerakan karakter 3D mengambil kaleng di meja, mengarahkannya ke mulut untuk minum, dan meletakkannya kembali.",
      "Menerapkan dan mengonfigurasi constraint 'Child Of' pada prop kaleng untuk mengontrol hirarki hubungan dengan tulang tangan (hand bone rig).",
      "Mengatur keyframing nilai influence (0 to 1 switch) pada constraint Child Of agar perindahan penguasaan objek terjadi secara mulus tanpa snapping.",
      "Menerapkan prinsip acting dasar (anticipation, hold pose, dan timing) saat karakter berinteraksi dengan benda di sekitarnya.",
    ],
    contributions: [
      "Melakukan keyposing posisi tangan karakter saat meraih, mengangkat, dan meletakkan kembali kaleng minuman di atas meja.",
      "Konfigurasi constraint Child Of pada objek kaleng serta penyelarasan lokasi origin/pivot point terhadap tangan karakter.",
      "Melakukan keyframing pada parameter Influence constraint Child Of serta pencocokan matriks transformasi (Clear/Set Inverse) saat pelepasan objek.",
      "Menata sudut kamera Viewport dan mengekspor animasi visual Playblast untuk evaluasi modul Animation Mastery.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Prop & Rig Setup with Child Of Constraint",
        description:
          "Penambahan constraint Child Of pada kaleng minuman berpatokan pada armature tulang tangan manekin 3D.",
      },
      {
        phase: "Phase 2: Acting & Keyposing (Take & Drink)",
        description:
          "Penyusunan pose kunci ketika tangan mendekati kaleng, momen greb/cengkeraman, gerakan mengangkat kaleng ke posisi minum, dan meletakkannya kembali ke meja.",
      },
      {
        phase: "Phase 3: Influence Switching & Splining",
        description:
          "Pengaturan transisi nilai Influence constraint dari 0 (diam di meja) ke 1 (terikut gerakan tangan) dan kembali ke 0 (dilepas di meja) pada Dope Sheet & Graph Editor.",
      },
      {
        phase: "Phase 4: Playblast & Module Evaluation",
        description:
          "Pengujian kehalusan perpindahan kaleng tanpa adanya snapping/interupsi pergeseran dan pembuatan video Playblast akhir.",
      },
    ],
    results: [
      "Berhasil menguasai penerapan constraint Child Of di Blender untuk interaksi objek-karakter yang stabil dan realistis.",
      "Memahami alur kerja teknik parenting switch, manajemen influence keyframe, serta pemecahan masalah snapping pada animasi prop.",
      "Menyelesaikan materi latihan modul Animation Mastery dengan baik selama magang di Devata Studio Kreatif.",
    ],
    links: {
      instagram: "https://www.instagram.com/cyborg.dimension/",
    },
    visualHighlights: [
      {
        title: "Constraint Influence & Matrix Switch",
        type: "render",
        caption: "Transisi presisi nilai Influence (0 ke 1) pada constraint Child Of untuk pelekatan kaleng ke tangan tanpa efek snapping.",
        colorAccent: "#E63946",
      },
    ],
  },
  {
    slug: "snow-character-locomotion-study",
    title: "Snow Character — Locomotion & Jogging Study ",
    category: "3D Animation",
    shortDescription:
      "Latihan animasi mekanika tubuh (body mechanics & locomotion) otodidak yang memperlihatkan alih pergerakan berlari kecil (jogging) hingga berjalan karakter 3D 'Snow' melintasi area trotoar perkotaan.",
    year: "2025",
    tools: ["Blender", "Graph Editor", "Viewport Render", "Dope Sheet", "Cycle"],
    featured: true,
    thumbnail: "",
    video: "/video/Render-SnowSongongFix.mp4",
    model3d: {
      modelUrl: "/models/apple1.glb",
      sourceFile: "src/data/obj/apple1.blend",
      objFile: "src/data/obj/apple1.obj",
      format: "glb",
      scale: 1.2,
      title: "Exercise",
    },
    clientOrOrg: "PT. Devata Studio Kreatif",
    role: "3D Generalist Intern",
    overview:
      "Proyek latihan animasi 3D mandiri (self-taught exercise) selama masa magang di Devata Studio Kreatif. Menggunakan rig karakter 3D 'Snow', proyek ini mengeksplorasi alur pergerakan lokomosi (locomotion study) seperti berlari kecil (jogging) dan bertransisi ke berjalan santai di trotoar pinggir jalan kota lengkap dengan rotasi pergerakan kamera sinematik.",
    background:
      "Eksplorasi animasi gerak lokomosi karakter melintasi lingkungan 3D memerlukan pemahaman mendalam mengenai perpindahan tumpuan berat badan (weight shift), momentum kontak kaki di area trotoar, serta transisi ritme dari berlari kecil ke jalan santai. Proyek ini dibuat secara otodidak untuk mengasah kepekaan acting, body mechanics, dan sinematografi kamera di Blender.",
    objectives: [
      "Menganimasi gerakan berlari kecil (jogging) dan transisi langkah kaki karakter Snow yang alami di atas trotoar.",
      "Mengatur keseimbangan ritme ayunan lengan, kelenturan panggul, serta posisi dada sesuai momentum pergerakan.",
      "Merancang pergerakan kamera mengitari karakter (camera tracking & orbit) untuk memperlihatkan detail akting dari berbagai sudut pandang.",
      "Menghasilkan video pengujian animasi lokomosi karakter 3D yang mulus tanpa hambatan foot sliding.",
    ],
    contributions: [
      "Melakukan keyposing gerak lari santai/jogging pada rig karakter Snow.",
      "Penyesuaian pergerakan tulang belakang (spine twist), panggul, serta ayunan tangan untuk mengimbangi dorongan kaki.",
      "Melakukan setup sinematografi pergerakan kamera mengitari karakter melintasi aset lingkungan jalan kota 3D.",
      "Mengatur Graph Editor untuk memperhalus transisi antar-pose dan melangsungkan rendering akhir.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Environment Setup & Rig Inspection",
        description:
          "Penataan aset jalan perkotaan 3D dan pengujian rentang gerak rig karakter Snow.",
      },
      {
        phase: "Phase 2: Jogging & Walk Blocking",
        description:
          "Penyusunan pose-pose kunci utama (contact, down, passing, up poses) untuk pergerakan lari santai melintasi trotoar.",
      },
      {
        phase: "Phase 3: Camera Tracking & Curve Splining",
        description:
          "Pengaturan gerakan kamera mengikuti karakter dari samping hingga depan serta penghalusan kurva pergerakan di Graph Editor.",
      },
      {
        phase: "Phase 4: Playblast & Self-Evaluation",
        description:
          "Pengujian ritme gerak lokomosi serta pembuatan video render akhir sebagai sarana evaluasi mandiri.",
      },
    ],
    results: [
      "Berhasil mengeksekusi studi animasi lokomosi (jogging & walk mechanics) karakter Snow secara otodidak dengan ritme yang halus.",
      "Memperdalam pemahaman teknis mengenai sinematografi kamera pengikut (tracking camera) dan mekanika tubuh karakter 3D di Blender.",
      "Menambah variasi eksplorasi animasi aksi karakter dalam portofolio magang di Devata Studio Kreatif.",
    ],
    links: {
      instagram: "https://www.instagram.com/cyborg.dimension/",
    },
    visualHighlights: [
      {
        title: "Locomotion Transition & Camera Tracking",
        type: "render",
        caption: "Transisi ritmis dari gerakan berlari kecil (jogging) ke berjalan dengan pergerakan kamera tracking yang mengitari karakter secara sinematik.",
        colorAccent: "#E63946",
      },
    ],
  },
  {
    slug: "minione-trailer",
    title: "Mini One — Animation Trailer",
    category: "3D Animation",
    shortDescription:
      "Proyek trailer animasi 3D cinematic sebagai ujian kelayakan magang di Devata Studio Kreatif, menampilkan karakter minion berukuran raksasa di lingkungan perkotaan malam hari.",
    year: "2025",
    tools: ["Blender", "Rigify", "Graph Editor", "Render", "Dope Sheet", "Cycle", "Capcut"],
    featured: true,
    thumbnail: "",
    video: "/video/MiniOne-FinalEditing.mp4",
    model3d: {
      modelUrl: "/models/apple1.glb",
      sourceFile: "src/data/obj/apple1.blend",
      objFile: "src/data/obj/apple1.obj",
      format: "glb",
      scale: 1.2,
      title: "Exam",
    },
    clientOrOrg: "PT. Devata Studio Kreatif",
    role: "3D Generalist Intern",
    overview:
      "Proyek trailer sinematik 3D 'Mini One' yang diproduksi sebagai ujian akhir kelayakan magang sebelum bergabung ke dalam tim produksi IP utama di Devata Studio Kreatif. Trailer berdurasi pendek ini dibuat dari awal (from scratch), mencakup perancangan karakter 3D minion (baik versi mini maupun raksasa), pemodelan lanskap perkotaan (city environment) malam hari, penyusunan tata kamera sinematik, hingga penyuntingan audio dan teks trailer.",
    background:
      "Sebelum diterjunkan ke alur kerja produksi IP studio, setiap peserta magang diuji untuk membuktikan penguasaan pipeline animasi 3D secara mandiri end-to-end. Proyek ini menjadi ajang pembuktian kemampuan pemodelan lingkungan perkotaan, character rigging & animation, sinematografi pacing trailer, serta penyuntingan audio-visual.",
    objectives: [
      "Membangun trailer animasi 3D dari tahap konsep, layout, rigging, hingga pascaproduksi secara mandiri.",
      "Merancang aset lingkungan perkotaan 3D (gedung, lampu jalan, dan lanskap kota) beserta pencahayaan suasana malam (night lighting).",
      "Menganimasi pergerakan akting karakter minion kecil dan karakter minion ungu raksasa secara dinamis.",
      "Menyusun tata kamera sinematik (dolly shot, panning, bird's eye view) serta memotong pacing video sesuai trek audio narasi trailer.",
    ],
    contributions: [
      "Membuat pemodelan 3D dan tekstur untuk karakter minion serta aset gedung/jalan kota.",
      "Melakukan rigging dan keyframing animasi gerak jalan (locomotion) karakter minion kecil dan pergerakan lambat minion raksasa.",
      "Menata pencahayaan malam hari (street lights, ambient moonlight, & volumetric fog).",
      "Melakukan penyuntingan sinematografi kamera, penyelarasan audio voiceover/SFX, dan perancangan teks penjelas (titles/credits) trailer.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Pre-Production & Environment Modeling",
        description:
          "Penyusunan ide cerita trailer, pemodelan lanskap gedung-gedung kota 3D, penataan lampu jalan, dan pembuatan rig karakter minion.",
      },
      {
        phase: "Phase 2: Character Animation & Camera Layout",
        description:
          "Penataan gerak karakter di jalanan kota dan pembuatan pergerakan kamera sinematik (close-up ke bird's-eye view memutar).",
      },
      {
        phase: "Phase 3: Lighting & Rendering",
        description:
          "Konfigurasi pencahayaan malam hari, penyesuaian bayangan gedung, dan pengesetan render engine Blender Eevee.",
      },
      {
        phase: "Phase 4: Post-Production & Sound Design",
        description:
          "Penyuntingan klip video, sinkronisasi audio narasi otomotif/aksi yang dramatis, serta penambahan title card trailer ('Mini One Trailer', 'Presents by Fadhlur Rahman Fakhri').",
      },
    ],
    results: [
      "Berhasil mengeksekusi proyek ujian kelayakan magang berupa trailer animasi 3D 'Mini One' secara mandiri dari awal hingga pascaproduksi.",
      "Membuktikan penguasaan pipeline lengkap 3D animation (modeling, layout, rigging, lighting, camera movement, dan video editing).",
      "Lulus evaluasi ujian kelayakan dan resmi bergabung dalam tim pengembangan IP utama di Devata Studio Kreatif.",
    ],
    links: {
      instagram: "https://www.instagram.com/cyborg.dimension/",
    },
    visualHighlights: [
      {
        title: "Cinematic Camera & Giant Scale Staging",
        type: "render",
        caption: "Pengambilan gambar sinematik dari sudut pandang atas (bird's-eye view) yang memperlihatkan kontras skala karakter minion raksasa di lanskap perkotaan malam hari.",
        colorAccent: "#E63946",
      },
    ],
  },
  {
    slug: "karhutla-3d-animated-short",
    title: "Karhutla — 3D Environmental Awareness Short Film",
    category: "3D Animation",
    shortDescription:
      "Proyek film pendek animasi 3D personal bertema kesadaran lingkungan yang menggambarkan krisis kebakaran hutan dan lahan (Karhutla) di Indonesia.",
    year: "2026",
    tools: ["Blender", "EEVEE Engine", "Fluid & Smoke Simulation", "Substance Painter", "Environment Design"],
    featured: true,
    thumbnail: "",
    video: "/video/karhutla.mp4",
    model3d: {
      modelUrl: "/models/apple1.glb",
      sourceFile: "src/data/obj/apple1.blend",
      objFile: "src/data/obj/apple1.obj",
      format: "glb",
      scale: 1.2,
      title: "Exam",
    },
    clientOrOrg: "Personal Independent Project",
    role: "3D Generalist, Technical Artist & Director",
    overview:
      "Sebuah proyek karya animasi 3D independen yang dibuat untuk mengasah keterampilan teknis 3D sekaligus menyuarakan isu krisis lingkungan kebakaran hutan dan lahan (Karhutla) di Indonesia. Proyek ini memadukan pembuatan lingkungan hutan stilisasi/realistis, simulasi partikel api dan asap dinamis, serta pencahayaan atmosferik untuk menciptakan narasi visual yang dramatis dan menggugah kesadaran publik.",
    background:
      "Bencana tahunan Karhutla membawa dampak ekologis dan sosial yang serius bagi wilayah Indonesia. Melalui media media visual 3D, proyek ini dirancang sebagai bentuk suar kritis sosial dan media kampanye edukatif yang menggambarkan secara dramatis visualisasi kerusakan ekosistem hutan akibat lalapan api.",
    objectives: [
      "Membangun lanskap lingkungan hutan 3D yang kaya detail dengan teknik penyusunan vegetasi dan prop yang efisien.",
      "Mengimplementasikan simulasi volumetric (api dan asap) dinamis yang responsif terhadap interaksi objek lingkungan.",
      "Mengoptimalkan pipeline rendering 3D (EEVEE) untuk menghasilkan pencahayaan atmosferik berkualitas tinggi dengan waktu render yang efisien.",
      "Menyampaikan narasi sosial dan pesan kesadaran lingkungan hidup melalui estetika visual dan pengadeganan sinematik.",
    ],
    contributions: [
      "Merancang konsep visual, komposisi kamera sinematik, serta pencahayaan (lighting setup) berpendar api.",
      "Melakukan eksperimen dan eksekusi simulasi volumetrik api dan asap menggunakan fitur simulasi Blender.",
      "Mengembangkan model vegetasi 3D (pepohonan, ranting, dan permukaan tanah) serta pengolahan material/tekstur.",
      "Melakukan komposisi akhir (compositing) dan tata warna (color grading) untuk memperkuat suasana dramatis krisis kebakaran.",
    ],
    developmentProcess: [
      {
        phase: "Phase 1: Concept & Environmental Modeling",
        description:
          "Riset referensi visual Karhutla serta perancangan aset vegetasi 3D dan tata letak lingkungan hutan.",
      },
      {
        phase: "Phase 2: Fire & Smoke Volumetric Simulation",
        description:
          "Pengaturan domain dan flow simulasi fisika api/asap untuk menciptakan pergerakan kobaran api yang dinamis di antara pepohonan.",
      },
      {
        phase: "Phase 3: Lighting, Camera Movement & EEVEE Rendering",
        description:
          "Penataan kamera sinematik, pencahayaan emisi api lokal, dan optimasi sampel render pada engine EEVEE.",
      },
      {
        phase: "Phase 4: Post-Processing & Fine-Tuning",
        description:
          "Penyelarasan kontras warna, penambahan efek kabut atmosferik, dan penggabungan klip animasi.",
      },
    ],
    results: [
      "Berhasil merancang dan mengeksekusi sekuens animasi 3D 'Karhutla' secara mandiri, mulai dari environment modeling hingga simulasi volumetrik api dan asap.",
      "Membuktikan penguasaan simulasi fisika (fluid & smoke) serta optimasi rendering EEVEE untuk kebutuhan visualisasi atmosferik yang kompleks.",
      "Menghasilkan karya media visual 3D yang tidak hanya mengasah kapabilitas teknis 3D Generalist, tetapi juga menjadi sarana kampanye kesadaran isu lingkungan.",
    ],
    links: {
      instagram: "https://www.instagram.com/cyborg.dimension/",
    },
    visualHighlights: [
      {
        title: "Dynamic Forest Fire & Smoke Simulation Sequence",
        type: "render",
        caption:
          "Sekuens animasi yang menampilkan simulasi volumetrik api dan asap interaktif di tengah kerapatan lanskap pepohonan hutan.",
        colorAccent: "#E76F51",
      },
      {
        title: "Atmospheric Lighting & EEVEE Render Composition",
        type: "render",
        caption:
          "Komposisi sinematik dengan pencahayaan emisi api lokal dan atmosfer kabut asap yang dioptimalkan menggunakan engine EEVEE.",
        colorAccent: "#D97706",
      },
    ],
  },
];
