// Ini Comment Satu Baris

/* Tipe data di Javascript adalah 
1. String
  tipe data sring yaitu untuk menuliskan kata atau kalimat yang ditandai dengan kutip dua("") atau kutip satu ('')

2. Number
  yaitu tipe data yang digunakan untuk menuliskan angka, baik dengan desimal ataupun tanpa desimal

3. Boolean
  yaitu tipe data untuk menyatakan kondisi dan memiliki nilai true dan false

4. Array
  yaitu tipe data yang dapat menampung banyak nilai baik berupa string, Number, dan Boolean.
  tipe data ini ditandai dengan menuliskan kurung siku []

5. Object 
  yaitu tipe data yang dapat menampung banyak nilai seperti Array, tetapi penulisan object ditulis menggunakan kurung kurawal {}, dan ditulis berpasangan yaitu key:value.

6. Undefined
  yaitu tipe data didalam sebuah variabel yang tidak memiliki nilai atau variabel yang tidak di assign oleh nilai apapun maka akan menghasilkan Undefined.

7. Null
  yaiut tipe data didalam sebuah variabel yang di assign dengan nilai kosong
*/



// Tipe data String di Javascript
const nama = "Habibi";
const jenisKelamin = "Laki - Laki";
const tglLahir = "25 juni 1993";
let alamat = "Ciracas Lama RT 02 / RW 20 Serang - Banten";
let pendidikan = "Universitas Siber Asia";


//  Tipe data Number di Javascript
let noHP = 088214572234;
let umur = 28;
let tinggiBadan = 163;
let beratBadan = 49;

// Tipe data Boolean di Javascript
const lulusSmk = true;
let lulusKuliah = false;
let belumMenikah = true;

// Tipe data Array di Javascript
let hobi = ['Game', 'Ngoding'];
let ygDipelajari = ['Javascript', 'PHP', 'Mysql']


// Tipe data Object di Javascript
const biodata = {
   nama: "Habibi",
   umur: 28,
   alamat: "Ciracas Lama RT 02 / RW 20. Serang - Banten",
   pendidikan: "Universitas Siber Asia jurusan Teknik Informatika",
   noHP: 088214572234
}

const angkaPertama = 2021,
   angkaKedua = 10;
let hasil;

// Penjumlahan
hasil = angkaPertama + angkaKedua;
console.log("2021 + 10 = " + hasil);

// Pengurangan
hasil = angkaPertama - angkaKedua;
console.log("2021 - 10 = " + hasil);

// Pembagian
hasil = angkaPertama / angkaKedua;
console.log("2021 / 10 = " + hasil);

// Perkalian
hasil = angkaPertama * angkaKedua;
console.log("2021 x 10 = " + hasil);