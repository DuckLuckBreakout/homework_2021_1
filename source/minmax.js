'use strict';
/**
 * Finds the minimum and maximum values in a string.
 * @param {String} str A string containing numbers, among which you need to find the minimum and maximum values. It is allowed to have text in the input string.
 * @return {Array} Array of length 2, with the form: [minValue, maxValue]
 *
 * @author Ivan Kovalenko <mrdivan07@gmail.com>
 *
 * @example <caption>minmax works correctly on strings without numbers: </caption>
 * // returns [ undefined, undefined ]
 * minmax('lala la la');
 *
 * @example <caption>min max correctly parses individual numbers: </caption>
 * // returns [ Infinity, Infinity ]
 * minmax('Infinity');
 *
 * @example
 * // returns [ 1.1, 1.1 ]
 * minmax('1.1');
 *
 * @example
 * // returns [ .01, .01 ]
 * minmax('.01');
 *
 * @example
 * // returns [ 1e5, 1e5 ]
 * minmax('1e5');
 *
 * @example
 * // returns [ -.1e-5, -.1e-5 ]
 * minmax('-.1e-5');
 *
 * @example <caption>minmax correctly parses multiple numbers:</caption>
 * // returns [ 1, 4 ]
 * minmax('1 2 3 4');
 *
 * @example
 * // returns [ -Infinity, Infinity ]
 * minmax('-Infinity -1 0 1 Infinity');
 *
 * @example <caption>min max ignores text: </caption>
 * // returns [ Infinity, Infinity ]
 * minmax('1, -5.8 lala 10, qwer 34 + -5.3 s 73');
 *
 * @example <caption>min max ignores invalid data types: </caption>
 * // returns [ undefined, undefined ]
 * minmax(1);
 */
const minmax = (str = '') => {
    if (typeof(str) != 'string')
        return [undefined, undefined];
    const numbers = str.split(' ').
                        map((x) => parseFloat(x)).
                        filter((x) => !isNaN(x));
    return numbers.reduce(
        ([min = Infinity, max = -Infinity], number) => [
            min < number ? min : number,
            max > number ? max : number
        ], [undefined, undefined]
    );
};
