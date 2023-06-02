//import {
  //  fib
//} from './lab2.js';

/**
 * Возвращает дробную часть числа num.
 *
 * @param {number} num число, от которого нужно найти дробную часть.
 * @return {number} дробная часть числа.
 */
export function getDecimal(num) {
    if (Math.trunc(num) == num) return 0;
    else if (num < 0) return num - (-Math.ceil(-num));
    if (num > 1) return +(num - Math.trunc(num)).toFixed(2);
}


/**
 * Возвращает строку str с заглавным первым символом.
 *
 * @param {string} str строка, которую нужно преобразовать.
 * @return {string} str с заглавным первым символом.
 */
export function ucFirst(str) {
    if (!str) return str;
    else {
        let NewStr = str[0].toUpperCase() + str.slice(1);
        return NewStr;
    }
}