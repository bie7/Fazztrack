/*
no 1

Loop atau Perulangan adalah Intruksi atau perintah yang digunakan untuk mengeksekusi kode secara berulang sampai kondisi tertentu


syntax For
let i,
for (i =  0; i < 5; i++){
  console.log(i);
}



syntax for in
let angka, i;
  angka = [1,2,3,4]
for (i in angka){
  console.log(i);
}



syntax for of
let angka, i;
  angka = [1,2,3,4]
  for (i of angka){
  console.log(i);
  }



syntax while
let a = 1;
while (a <= 10){
  a++;
  console.log(a)
}



syntax do while
let a = 1;
do {
console.log(a)
a++
}while(a <= 10);

*/


// no 2

printNumber = (num) => {
  for (let i = 0; i <= num; i++) {
    console.log(i);
  }
}

printNumber(3)


// no 3

cekGanjilGenap = (num) => {
  if (num % 2 == 0) {
    console.log('Genap');
  } else {
    console.log('Ganjil');
  }
}

cekGanjilGenap(4)


// no  4

deretGanjilGenap = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 2 == 0) {
      console.log(i + ' Adalah Genap');
    } else {
      console.log(i + ' Adalah Ganjil');
    }
  }
}

deretGanjilGenap(4)


// no 5

let kegiatan = [
  ['bangun', 4],
  ['mandi', 5],
  ['sarapan', 6],
  ['berangkat kerja', 7],
  ['pulang kerja', 20],
  ['tidur', 22]
]

let i;
for (i in kegiatan) {
  let j = 1,
    k = 0;
  console.log('Pada pukul ' + kegiatan[i][j] + ' saya ' + kegiatan[i][k]);
  j++, k++;
}