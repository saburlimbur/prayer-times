# PRAYER TIMES API - LITE SERVER

---

## Menjalankan Project menggunakan Lite-server

```bash
npm run dev
```

## Lite Server

Lite-server adalah server Node.js yang ringan dan digunakan dalam pengembangan web. Fitur utamanya termasuk menyajikan aplikasi langsung di browser dan secara otomatis menyegarkan halaman saat ada perubahan pada file HTML atau JavaScript. Selain itu, Lite Server juga dapat langsung memperbarui perubahan CSS tanpa memerlukan refresh halaman. Ini membuatnya menjadi alat yang efisien dan mempercepat proses pengembangan web.

## Endpoints - Prayer Times

### Endpoints yang sudah ditentuhan untuk Tahun, Bulan, dan Alamat tertentu.

Digunakan untuk mendapatkan kalender waktu sholat untuk tahun dan bulan tertentu dengan menggunakan koordinat geografis (latitude dan longitude) yang spesifik.

```
http://api.aladhan.com/v1/calendar?latitude=' + latitude + '&longitude=' + longitude + '&method=4

```

### Endpoints untuk Kalender Penggunaan Waktu Sholat berdasarkan Latitude dan Longitude pada Lokasi yang Digunakan .

Ini berguna untuk mendapatkan kalender waktu sholat berdasarkan latitude dan longitude pada lokasi yang diinginkan.

```
http://api.aladhan.com/v1/calendar/2017/4?latitude=51.508515&longitude=-0.1254872&method=2

```

### Endpoints untuk Penggunaan Waktu Sholat berdasarkan Alamat.

Ini adalah endpoint yang berbeda yang digunakan untuk mendapatkan waktu sholat berdasarkan alamat lokasi. Hanya perlu memberikan tahun, bulan, alamat lengkap, dan metode perhitungan dalam parameter.

```
http://api.aladhan.com/v1/calendarByAddress/2017/4?address=Sultanahmet%20Mosque,%20Istanbul,%20Turkey&method=2

```

## PRAYER TIMES AND ADHAN PLAYER

[Documentation Prayer Times API](https://aladhan.com/prayer-times-api)
