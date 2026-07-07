const translations = {
    id: {
        title: "Portofolio Saya",
        hero_subtitle: "Halo, Saya",
        hero_btn_about: "Tentang Saya",
        hero_btn_cv: "Download CV",
        hero_btn_skill: "Lihat Skill",
        hero_btn_project: "Lihat Project",
        hero_btn_blog: "Blog",
        hero_btn_contact: "Kontak",
        about_title: "About Me",
        about_p1: "Sebagai siswa PPLG di SMKN 1 Cianjur, saya fokus membangun fondasi logika pemrograman yang kuat. Melalui tantangan menulis 100 program Python dan berbagai aplikasi lainnya, saya mengasah kemampuan memecahkan masalah \"problem-solving\" secara bertahap, mulai dari pengolahan data dasar hingga pembuatan aplikasi untuk umkm.",
        about_p2: "Saya sangat menyukai proses membuat aplikasi yang ada di kepala Saya, mempelajari arsitektur perangkat lunak baru, dan berambisi untuk terus berkembang di bidang *software engineering* serta pengembangan aplikasi masa depan.",
        skills_title: "My Skills",
        project_title: "My Projects",
        project1_desc: "Sebuah project web untuk mempromosikan bisnis barbershop yang bernama \"Juragan Barbershop\" dengan tujuan meningkatkan visibilitas online dan memudahkan pelanggan dalam mendapatkan informasi. Project ini menampilkan desain modern, navigasi yang responsif, serta informasi lengkap mengenai layanan, fasilitas, dan lokasi barbershop dan juga website ini bukan hanya saya sendiri yang mengerjakan ini semua tetapi kali ini bersama teman saya.",
        project1_btn: "Hasil",
        project2_title: "Web dan aplikasi yg lain",
        project2_desc: "sebuah project web untuk menampilkan data dengan menggunakan php native dan mysql dan aplikasi yang saya buat pasti saya masukkan juga ke github ini.",
        project2_btn: "Repository Git",
        project3_title: "Pokedex (Hasil PKL)",
        project3_desc: "Sebuah aplikasi web Pokedex yang menampilkan berbagai informasi tentang Pokemon. Proyek ini merupakan hasil kolaborasi bersama teman sebagai bagian dari kegiatan Praktik Kerja Lapangan (PKL).",
        project3_btn: "Lihat Hasil",
        blog_title: "My Blog",
        blog1_title: "Perjalanan Belajar Programming",
        blog1_desc: "Mempelajari dasar-dasar pemrograman python dan tantangan yang saya hadapi dari awal hingga bisa membuat aplikasi sederhana.",
        blog2_title: "Membuat produk untuk UMKM",
        blog2_desc: "projek juragan barbershop adalah projek saya yang pertama kali terjun ke dunia pembuatan produk digital untuk UMKM",
        blog_btn: "Baca Selengkapnya \u2192",
        contact_title: "Contact Me",
        contact_desc: "Mari terhubung! Jika Anda memiliki pertanyaan atau ingin bekerja sama, jangan ragu untuk menghubungi saya melalui kontak di bawah ini.",
        footer_text: "Revans Kurnia Bayu Prakoso. All rights reserved."
    },
    en: {
        title: "My Portfolio",
        hero_subtitle: "Hello, I am",
        hero_btn_about: "About Me",
        hero_btn_cv: "Download CV",
        hero_btn_skill: "See Skills",
        hero_btn_project: "See Projects",
        hero_btn_blog: "Blog",
        hero_btn_contact: "Contact",
        about_title: "About Me",
        about_p1: "As a PPLG student at SMKN 1 Cianjur, I focus on building a strong foundation in programming logic. Through the challenge of writing 100 Python programs and various other applications, I hone my problem-solving skills gradually, from basic data processing to building applications for SMEs.",
        about_p2: "I really enjoy the process of creating applications that are in my head, learning new software architectures, and aspiring to continue to grow in the field of software engineering and future application development.",
        skills_title: "My Skills",
        project_title: "My Projects",
        project1_desc: "A web project to promote a barbershop business called \"Juragan Barbershop\" aiming to increase online visibility and make it easier for customers to get information. This project features a modern design, responsive navigation, as well as complete information regarding services, facilities, and the barbershop's location. Also, I wasn't the only one working on this website, but this time with a friend.",
        project1_btn: "View",
        project2_title: "Other Web and Apps",
        project2_desc: "A web project to display data using native PHP and MySQL and I will definitely upload the applications I made to this GitHub.",
        project2_btn: "Git Repository",
        project3_title: "Pokedex (PKL Project)",
        project3_desc: "A Pokedex web application that displays various information about Pokemon. This project is a collaboration with a friend as part of my Field Work Practice (PKL) activities.",
        project3_btn: "View",
        blog_title: "My Blog",
        blog1_title: "My Programming Journey",
        blog1_desc: "Learning the basics of Python programming and the challenges I faced from the beginning until being able to create simple applications.",
        blog2_title: "Creating products for SMEs",
        blog2_desc: "The juragan barbershop project is my first project diving into the world of digital product creation for SMEs.",
        blog_btn: "Read More \u2192",
        contact_title: "Contact Me",
        contact_desc: "Let's connect! If you have any questions or want to work together, please don't hesitate to contact me through the links below.",
        footer_text: "Revans Kurnia Bayu Prakoso. All rights reserved."
    }
};

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.getElementById('year').textContent = new Date().getFullYear();

// Theme Toggle Logic
const themeToggleBtn = document.getElementById('theme-toggle');
const sunIcon = document.querySelector('.sun-icon');
const moonIcon = document.querySelector('.moon-icon');

// Check local storage for theme
let currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    sunIcon.style.display = 'none';
    moonIcon.style.display = 'block';
}

themeToggleBtn.addEventListener('click', () => {
    if (document.documentElement.getAttribute('data-theme') === 'light') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
        sunIcon.style.display = 'block';
        moonIcon.style.display = 'none';
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'block';
    }
});

// Language Toggle Logic
const langToggleBtn = document.getElementById('lang-toggle');
let currentLang = localStorage.getItem('lang') || 'id';

function applyLanguage(lang) {
    document.documentElement.lang = lang;
    langToggleBtn.textContent = lang.toUpperCase();
    document.title = translations[lang].title;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// Initial apply
if (currentLang !== 'id') {
    applyLanguage(currentLang);
}

langToggleBtn.addEventListener('click', () => {
    currentLang = currentLang === 'id' ? 'en' : 'id';
    localStorage.setItem('lang', currentLang);
    applyLanguage(currentLang);
});

// PDF Generation Logic
document.getElementById('download-cv-btn').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Tambahkan class khusus untuk menyembunyikan semua tombol di PDF
    document.body.classList.add('pdf-export-mode');
    
    // Ubah teks tombol sementara agar user tahu sedang memproses
    const originalText = this.textContent;
    this.textContent = 'Memproses PDF...';

    // Opsi untuk html2pdf
    const opt = {
      margin:       [0.2, 0, 0.2, 0], // Margin atas dan bawah agar tidak terlalu mepet
      filename:     'Portofolio_Revans_Kurnia.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true, backgroundColor: '#ffffff' },
      jsPDF:        { unit: 'in', format: 'a4', orientation: 'portrait' },
      pagebreak:    { mode: ['css', 'legacy'], avoid: ['section', '.about-box', '.skill-box', '.project-card', '.blog-card', '.contact-links'] }
    };

    // Generate PDF dari seluruh body
    html2pdf().set(opt).from(document.body).save().then(() => {
        // Kembalikan tampilan setelah selesai
        document.body.classList.remove('pdf-export-mode');
        this.textContent = originalText;
    }).catch(err => {
        console.error("Error generating PDF:", err);
        document.body.classList.remove('pdf-export-mode');
        this.textContent = originalText;
        alert("Terjadi kesalahan saat membuat PDF.");
    });
});