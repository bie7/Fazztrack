/*
No 1

cara  membuat function dijavascript yaitu
- tulis keyword Function
- beri nama setelah keyword function , misal salam
- lalu setelah kata salam tambahkan tanda kurung ()
- lalu tambahkan tanda kurung kurawal {} setelah tanda kurung  ()
- maka akan jadi seperti ini

funtion salam(){
  isi kode
}


*/
function salam(nama) {
  return console.log('Hallo ' + nama + ', Selamat Pagi!');
}

salam('Habibi');


// No 2
function tambah(bilanganPertama, bilanganKedua) {
  let hasil = bilanganPertama + bilanganKedua;
  return console.log(hasil);
}

tambah(2, 4);




// no 3

penjelasanArrowFunction = () => {
  console.log('Arrow function adalah Sebuah Function di javascript yang sintaksnya lebih ringkas yaitu menggunakan tanda panah =>. ');
}

penjelasanArrowFunction();


// no 4

perkalian = (bilanganPertama, bilanganKedua) => {
  let hasil = bilanganPertama * bilanganKedua;
  return console.log(hasil);
}

perkalian(10, 5);