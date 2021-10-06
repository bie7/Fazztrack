/*
no 1
Tulis keyword if dan ikuti dengan tanda kurung kurawal {} sebagai blok programnya, if digunakan untuk menjalankan kodisi true/benar sedangkan else untuk menjalankan kodisi false/salah. penulisa else sama seperti if.
seperti ini
if{

}else{


}
*/


// no 2
function cekParameter(x) {
  if (x) {
    return console.log('ini parameternya ' + x);
  } else {
    return console.log('Tidak ada Parameter yang diberikan!');
  }
}

cekParameter();


// no 3 

salam = (jam) => {
  if (jam <= 10) {
    return console.log('Selamat Pagi!');
  } else if (jam > 10 && jam <= 14) {
    return console.log('Selamat Siang!');
  } else if (jam > 14 && jam <= 15) {
    return console.log('Selamat Sore!');
  } else if (jam > 18 && jam <= 24) {
    return console.log('Selamat Malam!');
  } else {
    return console.log('jam salah / tidak ada');
  }
}

let a = prompt();
salam(a);



// no 4
/*
Perbedaan operator == dan === yaitu terletak pada type datanya, jika menggunakan == akan membandingkan nilai tanpa membandingkan tipe datanya. contoh 10 == '10'akan menghasilkan true, tetapi 10 === '10' akan menghasilkan false.

Perbedaan operator != dan !== cara kerjanya sama seperti operator == dan === , jika != membandingkan nilai yang tidak sama tanpa membandingkan tipe datanya , sedangkan !== melakukan perbandingan dengan tipe datanya juga, tetapi operator !== akan membandingkan tipe datanya terlebih dahulu. jika tipe data berbeda maka akan mengembalikan true, jika tipe data pada kedua sama berulah akan melakukan pengecekan pada kedua nilai.

Jika ingin membandingkan nilai tanpa memperdulikan tipe datanya maka gunakan == dan !=
jika ingin membandingkan nilai dan juga tipe datanya maka gunakan === dan !==

*/