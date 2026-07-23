# 🕌 Jadwal Sholat Web (Indonesia)

Aplikasi Web Jadwal Sholat Indonesia yang presisi, ringan, dan **100% offline-first**. Dibuat menggunakan HTML5, CSS3, dan Vanilla JavaScript tanpa framework berat, serta didukung oleh algoritma kalkulasi astronomi [adhan.js](https://github.com/batoulapps/adhan-js) yang disesuaikan dengan standar **Kemenag RI**.

---

## 🌟 Fitur Utama

- 🕋 **Kalkulasi Waktu Sholat Offline & Presisi**
  - Menggunakan metode kalkulasi astronomi offline tanpa bergantung pada API jadwal sholat eksternal.
  - Parameter sesuai standar Kemenag RI: Sudut Subuh $20^\circ$, Sudut Isya $18^\circ$, Mazhab Syafi'i, dan Ikhtiyati $+2$ menit.
  - **Koreksi Elevasi**: Otomatis memperhitungkan koreksi ketinggian dataran (Dip Angle) via Open-Meteo API untuk akurasi Syuruq & Maghrib.

- 📱 **Progressive Web App (PWA) & Full Offline**
  - Dapat di-install langsung ke layar utama smartphone/desktop (*Add to Home Screen*).
  - Dilengkapi *Service Worker* (`sw.js`) untuk menyimpan cache seluruh aset aplikasi sehingga tetap dapat diakses tanpa koneksi internet.

- 🏙️ **Modal Pencarian Kota & Quick Chips**
  - Modal UI modern menggantikan `prompt()` native.
  - Shortcut pilihan kota populer Indonesia (*Jakarta, Bandung, Surabaya, Yogyakarta, Medan, Makassar*).
  - Integrasi lokasi otomatis via GPS Geolocation & Nominatim OpenStreetMap.

- 🧭 **Kompas Arah Kiblat & Garis Acuan Layar**
  - Menghitung derajat arah Kiblat secara presisi dari lokasi pengguna ($0^\circ$ Utara, $90^\circ$ Timur, $180^\circ$ Selatan, $270^\circ$ Barat).
  - Dilengkapi **Garis Acuan Layar (Crosshair)** vertikal & horisontal yang statis tegak lurus dengan bingkai layar HP/browser.
  - Opsi *Live Sensor Kompas HP* (`DeviceOrientation`) untuk memutar piringan kompas di mobile browser.

- 🌙 **Dark Mode (Tema Gelap)**
  - Toggle mudah via ikon Bulan/Matahari di AppBar.
  - Otomatis mendeteksi preferensi sistem (`prefers-color-scheme`) dan menyimpan pilihan tema di `localStorage`.
  - Kontras teks tinggi yang nyaman untuk penggunaan malam hari.

- ⏱️ **Countdown Timer Pintar**
  - Hitung mundur real-time menuju waktu sholat berikutnya.
  - Otomatis beralih menghitung mundur ke **Subuh hari esok** ketika waktu Isya hari ini telah lewat.

- 📅 **Kalender Masehi & Hijriah**
  - Format tanggal Masehi Indonesia (`id-ID`).
  - Format tanggal Hijriah (*Umm al-Qura*) dengan workaround cerdas penanganan bug ICU translasi di Chrome Android.

---

## 📁 Struktur Project

```
jadwal-sholat-web/
├── index.html              # Halaman utama aplikasi (PWA, Theme, Modals, Kiblat UI)
├── privacy-policy.html     # Kebijakan Privasi aplikasi
├── manifest.json           # Web App Manifest (PWA configuration)
├── sw.js                   # Service Worker (Full offline caching strategy)
├── compare.js              # Script pengujian & validasi offline vs data Kemenag (Node.js)
├── README.md               # Dokumentasi resmi project
├── css/
│   └── style.css           # Custom CSS (Design system, variables, Dark mode, Animations)
├── js/
│   ├── adhan.js             # Library astronomi adhan.js (UMD)
│   └── app.js               # Logika utama (Prayers, Modals, Compass, PWA, Theme)
└── icons/
    ├── icon-192.svg        # PWA Icon (192x192)
    └── icon-512.svg        # PWA Icon (512x512)
```

---

## 🚀 Cara Menjalankan Secara Lokal

1. **Clone Repositori**:
   ```bash
   git clone https://github.com/wisya/jadwal-sholat-web.git
   cd jadwal-sholat-web
   ```

2. **Jalankan Web Server Lokal**:
   Anda bisa menggunakan HTTP server sederhana (seperti `npx serve`, Live Server VS Code, atau Python `http.server`):
   ```bash
   npx serve .
   # ATAU
   python3 -m http.server 8000
   ```

3. **Buka di Browser**:
   Akses `http://localhost:8000` di browser Anda.

4. **Uji Coba Script Validasi (Node.js)**:
   ```bash
   node compare.js
   ```

---

## 📄 Lisensi & Kredit

- **Pengembang**: **iOnline Studio**
- **Library Astronomi**: [adhan-js](https://github.com/batoulapps/adhan-js) oleh Batoul Apps.
- **Ikon & Font**: Google Fonts (Roboto) & Font Awesome 6.4.
