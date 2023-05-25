function pow(x, n) {
  return x**n;
}
function sumTo(n) {
  return n * (n+1)/2;
}
function factorial(n) {
  if  (n<1) return 1n;
  else {
  result= BigInt(n)*BigInt(factorial(n-1))
  return result;
}}