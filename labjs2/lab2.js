function pow(x, n) {
  return x ** n; //возводим число x в степень n
}
function sumTo(n) {
  return n * (n + 1) / 2;
}
function factorial(n) {
  if (n < 1) return 1n;
  else {
    result = BigInt(n) * BigInt(factorial(n - 1))
    return result;
  }
}
function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}