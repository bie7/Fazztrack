let nama = "Habibi",
   umur = 28,
   alamat = "Ciracas Lama RT 02/RW 20 - Serang Banten",
   hobi = "game dan ngoding",
   asalSekolah = "Universitas Siber Asia",
   jurusan = " Teknik Informatika",
   alasanSukaProgramming = "Karena awalnya saya suka Teknologi sejak masih SD, lalu saya menemukan tutorial - tutorial tentang pemograman dan saya merasa tertarik untuk mempelajarinya.";


console.log(
   "Nama saya adalah " + nama + "\n" + "Asal sekolah / Universitas " + asalSekolah + "\n" + "jurusan " + jurusan + "\n" + "Alasan saya tertarik dengan programming adalah " + alasanSukaProgramming + '\n\n'
);

console.log(
   `Perbedaan Var , Let dan Const adalah yaitu terletak pada Reassign, Hoisting dan Scope. Karena jika menggunakan var Reassign atau memasukan nilai dengan variabel yang sama tidak akan terjadi error maka akan cukup riskan, Hoisting artinya mengangkat jika kita mendeklarasikan sebuah variabel tanpa didahului var , dan penulisan var belakangan maka akan tetap jalan tanpa error, ini akan membingungkan bagi seorang programer, dan Scope, jika menggunakan var lalu ada dua var yang satu di luar scope dan satunya lagi didalam scope ditandai dengan {}. contoh di scope if, for, switch, while. maka variabel yang didalam scope masih bisa diakses nilainya. maka untuk menanganinya gunakan let. Const cara kerjanya sama dengan let hanya saja variabel menggunakan const tidak bisa diubah nilainya jika sudah di assign.`
)