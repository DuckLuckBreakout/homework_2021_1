'use strict';
/**
 * Finds the minimum and maximum values in a string.
 * @param {String} str A string containing numbers, among which you need to find the minimum and maximum values. It is allowed to have text in the input string.
 * @return {Array} Array of length 2, with the form: [minValue, maxValue]
 *
 * @author Ivan Kovalenko <mrdivan07@gmail.com>
 *
 * @example <caption>minmax correctly parses multiple numbers:</caption>
 * // returns [ 1, 4 ]
 * minmax('1 2 3 4');
 *
 * @example <caption>minmax ignores text: </caption>
 * // returns [ -5.8, 73 ]
 * minmax('1, -5.8 lala 10, qwer 34 + -5.3 s 73');
 */
const minmax = (str = '') => {
    if (typeof str !== 'string')
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
