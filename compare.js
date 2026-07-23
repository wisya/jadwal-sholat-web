const fs = require('fs');
globalThis.adhan = {};
const adhanCode = fs.readFileSync(__dirname + '/js/adhan.js', 'utf8');
(new Function('module', adhanCode))(undefined);
const adhan = globalThis.adhan;





const date = new Date('2026-07-15T12:00:00+07:00'); // noon local time
const coordinates = new adhan.Coordinates(-7.8014, 110.3644);

const params = adhan.CalculationMethod.Other();
params.fajrAngle = 20.0;
params.ishaAngle = 18.0;
params.madhab = adhan.Madhab.Shafi;
params.adjustments.fajr = 2;
params.adjustments.sunrise = -2;
params.adjustments.dhuhr = 2;
params.adjustments.asr = 2;
params.adjustments.maghrib = 2;
params.adjustments.isha = 2;

const pt = new adhan.PrayerTimes(coordinates, date, params);
const fmt = (d) => {
    let h = d.getHours().toString().padStart(2, '0');
    let m = d.getMinutes().toString().padStart(2, '0');
    return `${h}:${m}`;
};

const offline = {
    Subuh: fmt(pt.fajr),
    Syuruq: fmt(pt.sunrise),
    Dzuhur: fmt(pt.dhuhr),
    Ashar: fmt(pt.asr),
    Maghrib: fmt(pt.maghrib),
    Isya: fmt(pt.isha)
};

const kemenag = {
    Subuh: '04:33',
    Syuruq: '05:50',
    Dzuhur: '11:48',
    Ashar: '15:08',
    Maghrib: '17:39',
    Isya: '18:52'
};

console.log("Perbandingan Jadwal (Tgl 15 Juli 2026) Koordinat -7.8014, 110.3644 vs API MyQuran (Kota Yogyakarta):");
for (let p in kemenag) {
    console.log(`- ${p}: Kemenag (${kemenag[p]}) vs Offline (${offline[p]})`);
}
