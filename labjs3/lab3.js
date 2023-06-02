export function getDecimal(num) {
    if (Math.trunc(num) == num) return 0;
    else if (num < 0) return num - (-Math.ceil(-num));
    if (num > 1) return +(num - Math.trunc(num)).toFixed(2);
}
x

export function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
    }