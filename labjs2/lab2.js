function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= n;
  }

  return result;
}

//let x = prompt("x?", '');
//let n = prompt("n?", '');

if (n%1!==0) {
  alert(`Степень ${n} не поддерживается, используйте целое число`);
} else {
  alert( pow(x, n) );
}
    