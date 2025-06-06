// Array gambar untuk background
const gambar = [
    'chan (4).png',
    'chan (1).png',
    'chan (5).png',
    'chan (3).png',
    'chan (6).png',
    'chan (5).png',
    'chan (2).png',
    'chan (3).png'
  ];
  
  // Array pesan untuk balon percakapan
  const pesan = [
    "Selamat Tahun baru!",
    "Heeeh? Kenapa kau? kok badmood kali kutengok?",
    "Oooh gitu...",
    "Bentar lagi mau tamat, jadi wajar lah memikirkan masa depan",
    "Tapi khwatir teru menerus tidak ada gunanya Rafa-kun.",
    "Mungkin tahun depan akan lebih sulit, tapi tidak ada gunanya memikirkanya terus menerus, tidak ada juga yang peduli. Semuanya tergantung kamu.",
    "Jadi lakukanlah yang terbaik. Aku yakin jika terus berjuang dan berdoa, masa depanmu akan cerah",
    "ehmmm, Ganbatte nee, Rafa-kun!"
  ];
  
  let index = 0; // Indeks untuk gambar dan pesan saat ini
  
  // Fungsi untuk mengganti gambar dan pesan
  function gantiGambarDanPesan() {
    // Ganti background
    index = (index + 1) % gambar.length;
    document.body.style.backgroundImage = `url('${gambar[index]}')`;
  
    // Pesan dengan animasi mengetik
    ketikPesan(pesan[index]);
  }
  
  // Animasi mengetik
  function ketikPesan(teks) {
    const elemenPesan = document.getElementById("pesan");
    elemenPesan.textContent = ""; // Kosongkan pesan sebelumnya
    let i = 0;
  
    // Interval untuk animasi mengetik
    const interval = setInterval(() => {
      if (i < teks.length) {
        elemenPesan.textContent += teks[i];
        i++;
      } else {
        clearInterval(interval); 
      }
    }, 50); // Kecepatan mengetik (50ms per karakter)
  }
  
  // Pesan awal saat halaman dimuat
  window.onload = () => {
    ketikPesan(pesan[index]);
  };
  
