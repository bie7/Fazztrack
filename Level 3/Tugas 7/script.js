//no 1
printTriangle = (num) => {
  let a = '';
  for (let i = 0; i < num; i++) {
    for (let j = 0; j <= i; j++) {
      a += '*';
    }
    a += '\n';
  }
  console.log(a);
}

printTriangle(5);


// no 2
printSquare = (num) => {
  let a = '';
  for (let i = 0; i < num; i++) {
    for (let j = 1; j <= num; j++) {
      // if (i == 0 || i == num || j == 0 || j == 3) {
      //   a += '*';
      //   console.log(a);
      // } else {
      //   a += ' ';
      //   console.log(a);
      // }
      a += '*';
      console.log(a);
    }
    console.log('\n');
  }
}

printSquare(2);


// no3
gradeCheck = (nilai) => {
  if (nilai >= 100) {
    console.log('Lulus');
  } else if (nilai >= 90) {
    console.log('Lulus');
  } else if (nilai >= 80) {
    console.log('Lulus');
  } else if (nilai >= 70) {
    console.log('Lulus');
  } else if (nilai >= 65) {
    console.log('Lulus');
  } else {
    console.log('Tidak Lulus');
  }
}


gradeCheck(90);


// no 4
let nilai = [50, 70, 90],
  arr = [50, 30]

for (i of arr) {
  nilai.push(i);
}

for (j of nilai) {
  console.log(j);
}