function prayerTimes(latitude, longitude) {
  fetch('http://api.aladhan.com/v1/calendar?latitude=' + latitude + '&longitude=' + longitude + '&method=4')
    .then((response) => response.json()) // mengubah api ke format json
    .then(function (response) {
      let date = new Date();
      let today = date.getDate();
      let data = response.data[0].timings;

      let app = document.getElementById('app');
      let table = document.createElement('table');
      let tableTbody = document.createElement('tbody');

      for (i in data) {
        // mengambil objek data dari data API 'aladhan'
        let row = tableTbody.insertRow();
        let name = row.insertCell(0);
        let time = row.insertCell(1);
        name.innerHTML = i;
        time.innerHTML = data[i];
        tableTbody.appendChild(row);
      }
      table.appendChild(tableTbody);
      app.appendChild(table);

      console.log(data); // menampilkan data response API pada console
      console.log(today, date);
      console.log(response.data[today]);
    });
}

// mengangani jika berhasil mendapatkan posisi pengguna
function success(position) {
  /*   console.log(position.coords.latitude, position.coords.longitude); // mengirim 2 parameter, yaitu latitude dan longitude, ke dalam fungsi prayerTimes */

  // lalu memanggil fungsi prayerTimes setelah mendapatkan posisi pengguna
  prayerTimes(position.coords.latitude, position.coords.longitude);
}

// jika lokasi tdk diaktifkan/diizinkan maka akan tampil alert
function error() {
  prayerTimes('-6.200000', '106.816666'); // latitude dan longaitude daerah jakarta
}

// mendapatkan lokasi pengguna
function userLocation() {
  // mengecek apakah geolocation didukung di browser
  if (!navigator.geolocation) {
    alert('Geolocation tidak didukung di browser ini, coba browser lain');
  } else {
    // mendapatkan posisi pengguna saat ini
    navigator.geolocation.getCurrentPosition(success, error); // dan kembali panggil fungsi success dgn posisi sebagai parameter
  }
}

function index() {
  let app = document.getElementById('app');

  let h3 = document.createElement('h3');
  h3.innerHTML = 'Jadwal Sholat';

  app.appendChild(h3);

  userLocation();

  /*   copyRight(); */
}

index(); // semua ditampung atau dijalankan dlm fungsi index

let hrs = document.getElementById('hrs');
let min = document.getElementById('min');
let sec = document.getElementById('sec');

setInterval(() => {
  let currentTime = new Date();
  hrs.innerHTML = (currentTime.getHours() < 10 ? '0' : '') + currentTime.getHours();
  min.innerHTML = (currentTime.getMinutes() < 10 ? '0' : '') + currentTime.getMinutes();
  sec.innerHTML = (currentTime.getSeconds() < 10 ? '0' : '') + currentTime.getSeconds();
});

/* function copyRight() {
  let copyRightDiv = document.querySelector('.copy-right');

  let p = document.createElement('p');
  p.innerHTML = 'Copyright © 2024 Alif Dwi Rahman. All right reserved';

  copyRightDiv.appendChild(p);
}

copyRight();  */ // me return atau memanggil fungsi dari copyRight agar tampilkan
