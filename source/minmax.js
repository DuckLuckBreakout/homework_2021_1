'use strict';

const minmax = (str='') => str.split(' ').map(x => parseFloat(x)).filter(x => !isNaN(x)).reduce(
    ([min = Infinity, max = -Infinity], number) => [
        min < number ? min : number,
        max > number ? max : number
    ], [undefined, undefined]
)
