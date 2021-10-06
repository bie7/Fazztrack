// no 1

fazzrack = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i / 3 === 1) {
      console.log('fazz');
    } else if (i / 5 === 1) {
      console.log('track');
    } else {
      console.log(i);
    }
  }
}

fazzrack(6);


// no 2
ganjil = (num) => {
  if (num % 2 !== 0) {
    return true;
  } else if (num % 2 === 0) {
    return false;
  }
}

genap = (num) => {
  if (num % 2 === 0) {
    return true;
  } else if (num % 2 !== 0) {
    return false;
  }
}

a = ganjil(5)
b = genap(5)
console.log('ganjil ' + a);
console.log('genap ' + b);


// no 3

cekParameter = (param) => {
  if (typeof param == 'string') {
    console.log("Parameter  " + param + " adalah String!");
  } else if (typeof param == 'number') {
    console.log("Parameter  " + param + " adalah Number!");
  } else if (typeof param == 'boolean') {
    console.log("Parameter  " + param + " adalah Boolean!");
  } else if (Array.isArray(param)) {
    console.log("Parameter  " + param + " adalah Array!");
  } else if (typeof param == 'object') {
    console.log("Parameter  " + param + " adalah Object!");
  }
}

cekParameter([2, 4])