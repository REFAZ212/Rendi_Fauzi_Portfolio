var swiper = new Swiper(".swiper", {
  effect: "cards",
  grabCursor: true,
  initialSlide: 2,
  speed: 500,
  loop: true,
  rotate: true,
  mousewheel: {
    invert: false,
  },
});

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.dataset.theme = body.dataset.theme === 'light' ? 'dark' : 'light';
  themeToggle.innerHTML = body.dataset.theme === 'light' ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

// Language Toggle
const languageToggle = document.getElementById('language-toggle');
const translations = {
  en: {
    'nav-home': 'Home',
    'nav-about': 'About',
    'nav-skills': 'Skills',
    'nav-projects': 'Projects',
    'nav-contact': 'Contact',
    'home-title': 'Welcome to My Portfolio',
    'home-description': 'Join me on a journey through my work, filled with creativity and dedication! Whether you\'re interested in my projects, skills, or just want to connect, I\'ve got something for all tastes. Explore and let\'s collaborate!',
    'home-button': 'Explore',
    'about-title': 'About Me',
    'about-description': 'I am a passionate developer with a love for creating innovative web solutions. With experience in HTML, CSS, JavaScript, and more, I strive to build projects that are both functional and visually appealing.',
    'about-projects': 'Projects Completed',
    'about-experience': 'Years Experience',
    'about-satisfaction': 'Client Satisfaction',
    'about-role': 'Full Stack Developer',
    'skills-title': 'Skills & Expertise',
    'skills-frontend': 'Frontend',
    'skills-backend': 'Backend',
    'skills-design': 'Design',
    'skill-html': 'Semantic markup for modern web applications.',
    'skill-css': 'Advanced styling with animations and responsive design.',
    'skill-js': 'Dynamic and interactive web functionality.',
    'skill-react': 'Component-based UI for scalable applications.',
    'skill-python': 'Server-side logic and scripting.',
    'skill-database': 'Data management with SQL/NoSQL databases.',
    'skill-uiux': 'User-centric design for intuitive interfaces.',
    'skill-problem': 'Creative solutions for complex challenges.',
    'projects-title': 'Featured Projects',
    'project-portfolio-title': 'Personal Portfolio',
    'project-portfolio-desc': 'A dynamic portfolio showcasing my work with modern design and smooth animations.',
    'project-game-title': 'Game Application',
    'project-game-desc': 'An interactive game built with Pygame and modern web technologies.',
    'project-ecommerce-title': 'E-Commerce Platform',
    'project-ecommerce-desc': 'A responsive online store prototype with modern UI and smooth user experience.',
    'project-demo': 'Live Demo',
    'project-code': 'Code',
    'contact-title': 'Get In Touch',
    'contact-description': 'Ready to collaborate? Let\'s discuss your next project and bring your ideas to life!',
    'contact-email': 'Email',
    'contact-name-placeholder': 'Your Name',
    'contact-email-placeholder': 'Your Email',
    'contact-subject-placeholder': 'Subject',
    'contact-message-placeholder': 'Your Message',
    'contact-submit': 'Send Message',
    'footer-about': 'Full Stack Developer passionate about creating innovative web solutions.',
    'footer-links': 'Quick Links',
    'footer-services': 'Services',
    'footer-contact': 'Contact Info',
    'footer-copyright': '© 2025 Rendi Fauzi. All rights reserved.',
    'service-web': 'Web Development',
    'service-uiux': 'UI/UX Design',
    'service-mobile': 'Mobile Apps',
    'service-consulting': 'Consulting',
  },
  id: {
    'nav-home': 'Beranda',
    'nav-about': 'Tentang',
    'nav-skills': 'Keterampilan',
    'nav-projects': 'Proyek',
    'nav-contact': 'Kontak',
    'home-title': 'Selamat Datang di Portofolio Saya',
    'home-description': 'Ikutlah bersama saya menjelajahi karya saya yang penuh dengan kreativitas dan dedikasi! Apakah Anda tertarik dengan proyek, keterampilan, atau hanya ingin terhubung, saya punya sesuatu untuk semua selera. Jelajahi dan mari berkolaborasi!',
    'home-button': 'Jelajahi',
    'about-title': 'Tentang Saya',
    'about-description': 'Saya seorang pengembang yang bersemangat dengan kecintaan untuk menciptakan solusi web inovatif. Dengan pengalaman di HTML, CSS, JavaScript, dan lainnya, saya berusaha membangun proyek yang fungsional dan menarik secara visual.',
    'about-projects': 'Proyek Selesai',
    'about-experience': 'Tahun Pengalaman',
    'about-satisfaction': 'Kepuasan Klien',
    'about-role': 'Pengembang Full Stack',
    'skills-title': 'Keterampilan & Keahlian',
    'skills-frontend': 'Frontend',
    'skills-backend': 'Backend',
    'skills-design': 'Desain',
    'skill-html': 'Markup semantik untuk aplikasi web modern.',
    'skill-css': 'Styling lanjutan dengan animasi dan desain responsif.',
    'skill-js': 'Fungsionalitas web yang dinamis dan interaktif.',
    'skill-react': 'UI berbasis komponen untuk aplikasi yang skalabel.',
    'skill-python': 'Logika sisi server dan skrip.',
    'skill-database': 'Manajemen data dengan database SQL/NoSQL.',
    'skill-uiux': 'Desain berorientasi pengguna untuk antarmuka intuitif.',
    'skill-problem': 'Solusi kreatif untuk tantangan kompleks.',
    'projects-title': 'Proyek Unggulan',
    'project-portfolio-title': 'Portofolio Pribadi',
    'project-portfolio-desc': 'Portofolio dinamis yang menampilkan karya saya dengan desain modern dan animasi halus.',
    'project-game-title': 'Aplikasi Game',
    'project-game-desc': 'Game interaktif yang dibuat dengan Pygame dan teknologi web modern.',
    'project-ecommerce-title': 'Platform E-Commerce',
    'project-ecommerce-desc': 'Prototipe toko online responsif dengan UI modern dan pengalaman pengguna yang mulus.',
    'project-demo': 'Demo Langsung',
    'project-code': 'Kode',
    'contact-title': 'Hubungi Saya',
    'contact-description': 'Siap berkolaborasi? Mari kita bahas proyek Anda berikutnya dan wujudkan ide Anda!',
    'contact-email': 'Email',
    'contact-name-placeholder': 'Nama Anda',
    'contact-email-placeholder': 'Email Anda',
    'contact-subject-placeholder': 'Subjek',
    'contact-message-placeholder': 'Pesan Anda',
    'contact-submit': 'Kirim Pesan',
    'footer-about': 'Pengembang Full Stack yang bersemangat menciptakan solusi web inovatif.',
    'footer-links': 'Tautan Cepat',
    'footer-services': 'Layanan',
    'footer-contact': 'Info Kontak',
    'footer-copyright': '© 2025 Rendi Fauzi. Semua hak dilindungi.',
    'service-web': 'Pengembangan Web',
    'service-uiux': 'Desain UI/UX',
    'service-mobile': 'Aplikasi Mobile',
    'service-consulting': 'Konsultasi',
  }
};

function updateLanguage(lang) {
  document.querySelectorAll('[data-lang]').forEach(element => {
    const key = element.getAttribute('data-lang');
    element.textContent = translations[lang][key] || element.textContent;
  });
  document.querySelectorAll('[data-lang-placeholder]').forEach(element => {
    const key = element.getAttribute('data-lang-placeholder');
    element.placeholder = translations[lang][key] || element.placeholder;
  });
}

languageToggle.addEventListener('change', (e) => {
  updateLanguage(e.target.value);
});

// Initialize language
updateLanguage('en');

// Prevent form submission (for demo purposes)
document.querySelector('.contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Form submission is disabled for this demo.');
});

// ===== JAVASCRIPT UNTUK NAVBAR RESPONSIF =====

document.addEventListener('DOMContentLoaded', function() {
    // Ambil elemen yang dibutuhkan
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');
    const navLinks = document.querySelectorAll('nav ul li a');
    const navControls = document.querySelector('.nav-controls');

    // Toggle hamburger menu saat diklik
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Tutup menu saat link diklik (untuk smooth navigation)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Tutup menu saat klik di luar menu (kecuali controls)
    document.addEventListener('click', function(e) {
        if (!hamburger.contains(e.target) && 
            !navMenu.contains(e.target) && 
            !navControls.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Handle window resize (tutup menu jika layar diperbesar)
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});