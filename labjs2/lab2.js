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
  if (n <= 1) return 1n;
  else {
    result = BigInt(fib(n - 1)) * BigInt(fib(n - 2))
    return result;
  }
}