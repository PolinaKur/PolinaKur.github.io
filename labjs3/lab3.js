import {
    fib
} from './lab2.js';

export function getDecimal(num) {
    if (Math.trunc(num) == num) return 0;
    else if (num < 0) return num - (-Math.ceil(-num));
    if (num > 1) return +(num - Math.trunc(num)).toFixed(2);
}
export function ucFirst(str) {
    if (!str) return str;
    else {
        let NewStr = str[0].toUpperCase() + str.slice(1);
        return NewStr;
    }
}