const prayers = [
  { key: 'fajr', label: 'Subuh', icon: '<svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M240,152H199.55a73.54,73.54,0,0,0,.45-8,72,72,0,0,0-144,0,73.54,73.54,0,0,0,.45,8H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM72,144a56,56,0,1,1,111.41,8H72.59A56.13,56.13,0,0,1,72,144Zm144,56a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H208A8,8,0,0,1,216,200ZM72.84,43.58a8,8,0,0,1,14.32-7.16l8,16a8,8,0,0,1-14.32,7.16Zm-56,48.84a8,8,0,0,1,10.74-3.57l16,8a8,8,0,0,1-7.16,14.31l-16-8A8,8,0,0,1,16.84,92.42Zm192,15.16a8,8,0,0,1,3.58-10.73l16-8a8,8,0,1,1,7.16,14.31l-16,8a8,8,0,0,1-10.74-3.58Zm-48-55.16,8-16a8,8,0,0,1,14.32,7.16l-8,16a8,8,0,1,1-14.32-7.16Z"/></svg>' },
  { key: 'sunrise', label: 'Syuruq', icon: '<svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M240,152H199.55a73.54,73.54,0,0,0,.45-8,72,72,0,0,0-144,0,73.54,73.54,0,0,0,.45,8H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM72,144a56,56,0,1,1,111.41,8H72.59A56.13,56.13,0,0,1,72,144Zm144,56a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H208A8,8,0,0,1,216,200ZM72.84,43.58a8,8,0,0,1,14.32-7.16l8,16a8,8,0,0,1-14.32,7.16Zm-56,48.84a8,8,0,0,1,10.74-3.57l16,8a8,8,0,0,1-7.16,14.31l-16-8A8,8,0,0,1,16.84,92.42Zm192,15.16a8,8,0,0,1,3.58-10.73l16-8a8,8,0,1,1,7.16,14.31l-16,8a8,8,0,0,1-10.74-3.58Zm-48-55.16,8-16a8,8,0,0,1,14.32,7.16l-8,16a8,8,0,1,1-14.32-7.16Z"/><path d="M128,20V56" stroke="currentColor" stroke-width="16" stroke-linecap="round" fill="none"/><path d="M112,36l16-20l16,20" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>' },
  { key: 'dhuhr', label: 'Dzuhur', icon: '<svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"/></svg>' },
  { key: 'asr', label: 'Ashar', icon: '<svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M164,72a76.2,76.2,0,0,0-20.26,2.73,55.63,55.63,0,0,0-9.41-11.54l9.51-13.57a8,8,0,1,0-13.11-9.18L121.22,54A55.9,55.9,0,0,0,96,48c-.58,0-1.16,0-1.74,0L91.37,31.71a8,8,0,1,0-15.75,2.77L78.5,50.82A56.1,56.1,0,0,0,55.23,65.67L41.61,56.14a8,8,0,1,0-9.17,13.11L46,78.77A55.55,55.55,0,0,0,40,104c0,.57,0,1.15,0,1.72L23.71,108.6a8,8,0,0,0,1.38,15.88,8.24,8.24,0,0,0,1.39-.12l16.32-2.88a55.74,55.74,0,0,0,5.86,12.42A52,52,0,0,0,84,224h80a76,76,0,0,0,0-152ZM56,104a40,40,0,0,1,72.54-23.24,76.26,76.26,0,0,0-35.62,40,52.14,52.14,0,0,0-31,4.17A40,40,0,0,1,56,104ZM164,208H84a36,36,0,1,1,4.78-71.69c-.37,2.37-.63,4.79-.77,7.23a8,8,0,0,0,16,.92,58.91,58.91,0,0,1,1.88-11.81c0-.16.09-.32.12-.48A60.06,60.06,0,1,1,164,208Z"/></svg>' },
  { key: 'maghrib', label: 'Maghrib', icon: '<svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M240,152H199.55a73.54,73.54,0,0,0,.45-8,72,72,0,0,0-144,0,73.54,73.54,0,0,0,.45,8H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM72,144a56,56,0,1,1,111.41,8H72.59A56.13,56.13,0,0,1,72,144Zm144,56a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H208A8,8,0,0,1,216,200ZM72.84,43.58a8,8,0,0,1,14.32-7.16l8,16a8,8,0,0,1-14.32,7.16Zm-56,48.84a8,8,0,0,1,10.74-3.57l16,8a8,8,0,0,1-7.16,14.31l-16-8A8,8,0,0,1,16.84,92.42Zm192,15.16a8,8,0,0,1,3.58-10.73l16-8a8,8,0,1,1,7.16,14.31l-16,8a8,8,0,0,1-10.74-3.58Zm-48-55.16,8-16a8,8,0,0,1,14.32,7.16l-8,16a8,8,0,1,1-14.32-7.16Z"/><path d="M128,16V52" stroke="currentColor" stroke-width="16" stroke-linecap="round" fill="none"/><path d="M112,36l16,20l16-20" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>' },
  { key: 'isha', label: 'Isya', icon: '<svg width="28" height="28" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M240,96a8,8,0,0,1-8,8H216v16a8,8,0,0,1-16,0V104H184a8,8,0,0,1,0-16h16V72a8,8,0,0,1,16,0V88h16A8,8,0,0,1,240,96ZM144,56h8v8a8,8,0,0,0,16,0V56h8a8,8,0,0,0,0-16h-8V32a8,8,0,0,0-16,0v8h-8a8,8,0,0,0,0,16Zm72.77,97a8,8,0,0,1,1.43,8A96,96,0,1,1,95.07,37.8a8,8,0,0,1,10.6,9.06A88.07,88.07,0,0,0,209.14,150.33,8,8,0,0,1,216.77,153Zm-19.39,14.88c-1.79.09-3.59.14-5.38.14A104.11,104.11,0,0,1,88,64c0-1.79,0-3.59.14-5.38A80,80,0,1,0,197.38,167.86Z"/></svg>' }
];

let timerInterval;
let currentCoordinates = null;
let currentParams = null;
let orientationHandler = null;

function init() {
    registerServiceWorker();
    setupTheme();
    setupDates();
    setupEvents();
    setupModalEvents();
    setupQiblaModalEvents();
    getLocation();
}

function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./sw.js')
                .then(reg => console.log('PWA ServiceWorker registered:', reg.scope))
                .catch(err => console.warn('PWA ServiceWorker registration failed:', err));
        });
    }
}

function setupTheme() {
    const btnTheme = document.getElementById('btn-theme');
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    let isDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    applyTheme(isDark);

    btnTheme.addEventListener('click', () => {
        isDark = !isDark;
        applyTheme(isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

function applyTheme(isDark) {
    const btnThemeIcon = document.querySelector('#btn-theme i');
    if (isDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (btnThemeIcon) btnThemeIcon.className = 'fas fa-sun';
    } else {
        document.documentElement.removeAttribute('data-theme');
        if (btnThemeIcon) btnThemeIcon.className = 'fas fa-moon';
    }
}

function setupDates() {
    const today = new Date();
    
    // Gregorian Date
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    document.getElementById('gregorian-date').innerText = today.toLocaleDateString('id-ID', options);

    // Fix Hijri Date untuk Chrome Android (mengatasi bug 'Februari 1448 SM')
    const hijriParts = new Intl.DateTimeFormat('en-US-u-ca-islamic-umalqura', { 
        day: 'numeric', month: 'numeric', year: 'numeric' 
    }).formatToParts(today);
    
    const hDay = hijriParts.find(p => p.type === 'day').value;
    const hMonthIndex = parseInt(hijriParts.find(p => p.type === 'month').value) - 1;
    const hYear = hijriParts.find(p => p.type === 'year').value;
    
    const hijriMonths = [
        "Muharram", "Safar", "Rabiul Awal", "Rabiul Akhir", 
        "Jumadil Awal", "Jumadil Akhir", "Rajab", "Syaban", 
        "Ramadhan", "Syawal", "Dzulqa'dah", "Dzulhijjah"
    ];
    
    document.getElementById('hijri-date').innerText = `${hDay} ${hijriMonths[hMonthIndex]} ${hYear} H`;
}

function setupEvents() {
    document.getElementById('btn-gps').addEventListener('click', getLocation);
    document.getElementById('btn-manual').addEventListener('click', openModal);
    document.getElementById('btn-qibla').addEventListener('click', openQiblaModal);
}

function setupQiblaModalEvents() {
    const modal = document.getElementById('qibla-modal');
    const btnClose = document.getElementById('btn-close-qibla');
    const chkLive = document.getElementById('chk-live-compass');
    
    btnClose.addEventListener('click', closeQiblaModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeQiblaModal();
    });

    if (chkLive) {
        chkLive.addEventListener('change', (e) => {
            if (e.target.checked) {
                startCompassSensor();
            } else {
                stopCompassSensor();
                const compassDial = document.getElementById('compass-dial');
                if (compassDial) compassDial.style.transform = 'rotate(0deg)';
            }
        });
    }
}

function getQiblaDirectionDescription(angle) {
    const deg = Math.round(angle * 10) / 10;
    
    if (deg >= 337.5 || deg < 22.5) {
        return `Utara (${deg}°)`;
    } else if (deg >= 22.5 && deg < 67.5) {
        const offset = Math.round(deg * 10) / 10;
        return `Timur Laut — ${offset}° dari Utara ke Timur`;
    } else if (deg >= 67.5 && deg < 112.5) {
        const offset = Math.round((90 - deg) * 10) / 10;
        return `Timur — ${Math.abs(offset)}° dari Timur`;
    } else if (deg >= 112.5 && deg < 157.5) {
        const offset = Math.round((deg - 90) * 10) / 10;
        return `Tenggara — ${offset}° dari Timur ke Selatan`;
    } else if (deg >= 157.5 && deg < 202.5) {
        const offset = Math.round((180 - deg) * 10) / 10;
        return `Selatan — ${Math.abs(offset)}° dari Selatan`;
    } else if (deg >= 202.5 && deg < 247.5) {
        const offset = Math.round((deg - 180) * 10) / 10;
        return `Barat Daya — ${offset}° dari Selatan ke Barat`;
    } else if (deg >= 247.5 && deg < 292.5) {
        const offset = Math.round((270 - deg) * 10) / 10;
        return `Barat — ${Math.abs(offset)}° dari Barat`;
    } else if (deg >= 292.5 && deg < 337.5) {
        const offset = Math.round((deg - 270) * 10) / 10;
        return `Barat Laut — ${offset}° dari Barat ke Utara`;
    }
    return `${deg}°`;
}

function openQiblaModal() {
    if (!currentCoordinates) {
        alert("Silakan aktifkan GPS atau pilih kota terlebih dahulu untuk menentukan arah kiblat.");
        return;
    }
    const modal = document.getElementById('qibla-modal');
    modal.classList.remove('hidden');
    
    // Reset kompas ke posisi statis (Utara = Atas)
    const compassDial = document.getElementById('compass-dial');
    if (compassDial) compassDial.style.transform = 'rotate(0deg)';

    // Reset toggle live sensor
    const chkLive = document.getElementById('chk-live-compass');
    if (chkLive) chkLive.checked = false;
    
    // Hitung derajat Kiblat dari adhan.js (0° Utara, 90° Timur, 180° Selatan, 270° Barat)
    const qiblaAngle = adhan.Qibla(currentCoordinates);
    const roundedQibla = Math.round(qiblaAngle * 10) / 10;
    document.getElementById('qibla-degree').innerText = `${roundedQibla}°`;

    // Teks keterangan arah presisi (Tokyo, London, Cairo, Yogyakarta, dll)
    const qiblaDirText = document.getElementById('qibla-direction-text');
    if (qiblaDirText) {
        qiblaDirText.innerText = getQiblaDirectionDescription(qiblaAngle);
    }
    
    // Posisikan ikon Ka'bah & Garis Penunjuk dari pusat kompas (radius 78px)
    const kaabaPointer = document.getElementById('kaaba-pointer');
    const qiblaLine = document.getElementById('qibla-pointer-line');
    
    if (kaabaPointer) {
        kaabaPointer.style.transform = `rotate(${qiblaAngle}deg) translateY(-78px) rotate(-${qiblaAngle}deg)`;
    }
    if (qiblaLine) {
        qiblaLine.style.transform = `rotate(${qiblaAngle}deg)`;
    }
}

function closeQiblaModal() {
    const modal = document.getElementById('qibla-modal');
    modal.classList.add('hidden');
    stopCompassSensor();
}

function startCompassSensor() {
    const compassDial = document.getElementById('compass-dial');
    
    orientationHandler = (event) => {
        let heading = null;
        if (event.webkitCompassHeading) {
            heading = event.webkitCompassHeading; // iOS Safari
        } else if (event.alpha !== null && event.alpha !== undefined) {
            heading = 360 - event.alpha; // Android Chrome
        }
        
        if (heading !== null && compassDial) {
            compassDial.style.transform = `rotate(-${heading}deg)`;
        }
    };

    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', orientationHandler, true);
    }
}

function stopCompassSensor() {
    if (orientationHandler && window.DeviceOrientationEvent) {
        window.removeEventListener('deviceorientation', orientationHandler, true);
        orientationHandler = null;
    }
}



function setupModalEvents() {
    const modal = document.getElementById('city-modal');
    const btnClose = document.getElementById('btn-close-modal');
    const cityForm = document.getElementById('city-form');
    const cityInput = document.getElementById('city-input');
    const chipBtns = document.querySelectorAll('.chip-btn');

    btnClose.addEventListener('click', closeModal);
    
    // Close modal when clicking outside content
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    cityForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const city = cityInput.value.trim();
        if (city) {
            closeModal();
            getCityCoordinates(city);
        }
    });

    chipBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const city = btn.getAttribute('data-city');
            cityInput.value = city;
            closeModal();
            getCityCoordinates(city);
        });
    });
}

function openModal() {
    const modal = document.getElementById('city-modal');
    const cityInput = document.getElementById('city-input');
    modal.classList.remove('hidden');
    cityInput.focus();
}

function closeModal() {
    const modal = document.getElementById('city-modal');
    modal.classList.add('hidden');
}

function showLoading(show) {
    if (show) {
        document.getElementById('loading').classList.remove('hidden');
        document.getElementById('content').classList.add('hidden');
    } else {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('content').classList.remove('hidden');
    }
}

function getLocation() {
    showLoading(true);
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;
                fetchCityName(lat, lng);
                calculatePrayers(lat, lng);
            },
            (error) => {
                alert("Gagal mendapatkan lokasi GPS. Menggunakan Jakarta sebagai default.");
                const lat = -6.2088;
                const lng = 106.8456;
                document.getElementById('city-name').innerText = "Jakarta (Default)";
                calculatePrayers(lat, lng);
            },
            { timeout: 10000 }
        );
    } else {
        alert("Browser tidak mendukung Geolocation.");
    }
}

async function getCityCoordinates(city) {
    showLoading(true);
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(city)}`);
        const data = await response.json();
        if (data && data.length > 0) {
            const lat = parseFloat(data[0].lat);
            const lng = parseFloat(data[0].lon);
            document.getElementById('city-name').innerText = city;
            calculatePrayers(lat, lng);
        } else {
            alert("Kota tidak ditemukan.");
            showLoading(false);
        }
    } catch (e) {
        alert("Gagal mencari kota.");
        showLoading(false);
    }
}

async function fetchCityName(lat, lng) {
    try {
        const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`);
        const data = await response.json();
        let city = data.address.city || data.address.town || data.address.village || data.address.county || "Lokasi Anda";
        document.getElementById('city-name').innerText = city;
    } catch (e) {
        document.getElementById('city-name').innerText = "Lokasi Anda";
    }
}

async function calculatePrayers(lat, lng) {
    const date = new Date();
    currentCoordinates = new adhan.Coordinates(lat, lng);
    
    // Ambil data ketinggian/elevasi dari API gratis (Open-Meteo)
    let elevation = 0;
    try {
        const evRes = await fetch(`https://api.open-meteo.com/v1/elevation?latitude=${lat}&longitude=${lng}`);
        const evData = await evRes.json();
        if (evData.elevation && evData.elevation.length > 0) {
            elevation = evData.elevation[0];
        }
    } catch (e) {
        console.warn("Gagal mengambil data elevasi, menggunakan 0 mdpl.", e);
    }

    // Hitung Koreksi Elevasi
    let elevationCorrection = 0;
    if (elevation > 0) {
        let dipAngle = 0.0347 * Math.sqrt(elevation);
        elevationCorrection = Math.round(dipAngle * 4); 
    }
    
    currentParams = adhan.CalculationMethod.Other();
    currentParams.fajrAngle = 20.0;
    currentParams.ishaAngle = 18.0;
    currentParams.madhab = adhan.Madhab.Shafi;
    
    // Terapkan Ikhtiyati Kemenag (+2 Menit) beserta Koreksi Elevasi untuk Syuruq & Maghrib
    currentParams.adjustments.fajr = 2;
    currentParams.adjustments.sunrise = -2 - elevationCorrection; 
    currentParams.adjustments.dhuhr = 2;
    currentParams.adjustments.asr = 2;
    currentParams.adjustments.maghrib = 2 + elevationCorrection; 
    currentParams.adjustments.isha = 2;
    
    const prayerTimes = new adhan.PrayerTimes(currentCoordinates, date, currentParams);
    
    const times = {
        fajr: prayerTimes.fajr,
        sunrise: prayerTimes.sunrise,
        dhuhr: prayerTimes.dhuhr,
        asr: prayerTimes.asr,
        maghrib: prayerTimes.maghrib,
        isha: prayerTimes.isha
    };

    renderPrayerList(times, prayerTimes);
    setupCountdown(prayerTimes);
    showLoading(false);
}

function formatTime(dateObj) {
    if (!dateObj) return "--:--";
    let h = dateObj.getHours().toString().padStart(2, '0');
    let m = dateObj.getMinutes().toString().padStart(2, '0');
    return `${h}:${m}`;
}

function getActivePrayerKey(prayerTimes) {
    if (!prayerTimes) return 'none';
    let activeKey = prayerTimes.currentPrayer();
    if (activeKey === 'sunrise') {
        const now = new Date();
        const diffMs = now.getTime() - prayerTimes.sunrise.getTime();
        // Syuruq hanya aktif selama 15 menit setelah waktu syuruq tiba
        if (diffMs > 15 * 60 * 1000) {
            activeKey = 'none';
        }
    }
    return activeKey;
}

function renderPrayerList(times, prayerTimes) {
    const list = document.getElementById('prayer-list');
    list.innerHTML = '';
    
    const activeKey = getActivePrayerKey(prayerTimes);
    
    prayers.forEach(p => {
        const pTime = times[p.key];
        const isActive = (p.key === activeKey);
        const card = document.createElement('div');
        card.className = `prayer-card ${isActive ? 'active' : ''}`;
        card.innerHTML = `
            <div class="prayer-icon">${p.icon}</div>
            <div class="prayer-name">
                ${p.label}
                ${isActive ? '<span class="active-badge">Sekarang</span>' : ''}
            </div>
            <div class="prayer-time">${formatTime(pTime)}</div>
        `;
        list.appendChild(card);
    });
}

function setupCountdown(prayerTimes) {
    if (timerInterval) clearInterval(timerInterval);
    
    function update() {
        let next = prayerTimes.nextPrayer();
        let nextTime;
        let pName;
        
        if (next === 'none') {
            // Setelah Isya, target berikutnya adalah Subuh hari esok
            const tomorrow = new Date();
            tomorrow.setDate(tomorrow.getDate() + 1);
            const tomorrowPrayerTimes = new adhan.PrayerTimes(currentCoordinates, tomorrow, currentParams);
            nextTime = tomorrowPrayerTimes.fajr;
            pName = 'Subuh (Besok)';
        } else {
            nextTime = prayerTimes.timeForPrayer(next);
            const pObj = prayers.find(p => p.key === next);
            pName = pObj ? pObj.label : next;
        }
        
        document.getElementById('countdown-widget').classList.remove('hidden');
        document.getElementById('next-prayer-name').innerText = pName;
        
        const now = new Date();
        const diff = nextTime.getTime() - now.getTime();
        
        if (diff <= 0) {
            // Refresh kalkulasi jika waktu sholat telah lewat
            calculatePrayers(currentCoordinates.latitude, currentCoordinates.longitude);
            return;
        }
        
        let s = Math.floor(diff / 1000);
        let m = Math.floor(s / 60);
        let h = Math.floor(m / 60);
        s = s % 60;
        m = m % 60;
        
        document.getElementById('countdown-timer').innerText = 
            `-${h.toString().padStart(2,'0')}:${m.toString().padStart(2,'0')}:${s.toString().padStart(2,'0')}`;
            
        // Re-render list bila status waktu sholat aktif berubah
        renderPrayerList({
            fajr: prayerTimes.fajr,
            sunrise: prayerTimes.sunrise,
            dhuhr: prayerTimes.dhuhr,
            asr: prayerTimes.asr,
            maghrib: prayerTimes.maghrib,
            isha: prayerTimes.isha
        }, prayerTimes);
    }
    
    update();
    timerInterval = setInterval(update, 1000);
}

document.addEventListener('DOMContentLoaded', init);

