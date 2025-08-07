### Deskripsi

Movie App adalah aplikasi berbasis React.js yang menampilkan daftar film dari API The Movie Database (TMDb). Aplikasi ini memiliki fitur pencarian film, menampilkan rating, dan efek interaktif seperti hover untuk melihat deskripsi film.

### Teknologi Yang Digunakan

## Teknologi Frontend

React.js
Library utama untuk membangun antarmuka pengguna.
Pendekatan komponen untuk modularisasi UI.

Vite
Build tool modern yang cepat untuk proyek React.
Pengganti Create React App dengan startup dan hot reload lebih cepat.

Tailwind CSS
Utility-first CSS framework untuk styling responsif dan konsisten.
Kelas seperti flex, gap-4, text-center, rounded, dll.

React Infinite Scroll
Untuk implementasi infinite scroll saat mengambil data film dari API.
Bisa pakai react-infinite-scroll-component atau bikin sendiri dengan event onScroll.

Code Splitting
Kamu sudah mulai memisahkan file seperti App.js dan api.js untuk menjaga struktur tetap rapi.

## API / Data Handling

Axios
Library HTTP client untuk melakukan fetch data film dari API.
Digunakan dalam file api.js untuk pengelolaan API call.
Aset & UI Interaktif
Gambar/Logo
Menampilkan logo dan gambar film.
Dihandle lewat komponen <img> dengan pengaturan styling Tailwind.

Hover Interactions
Logo sosial media muncul saat hover <h1>, menggunakan kombinasi Tailwind group-hover, transition, dan opacity.

Konsep UX / UI
Responsive Design: Menggunakan Tailwind untuk mendukung tampilan di berbagai layar.
Hover Animation: Transisi animasi ringan saat user berinteraksi.
Footer Interaktif: Tetap terlihat meskipun infinite scroll berjalan.
