/* eslint-disable eqeqeq */
/* eslint-disable no-use-before-define */
/* eslint-disable prettier/prettier */

'use strict';

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
    const numbers = [];

    for (let i = startIndex; i <= stopIndex; i++) { numbers.push(i); }

    numbers.forEach(number => {
        // eslint-disable-next-line no-func-assign
        sayThree = threeCallback(number);
        // eslint-disable-next-line no-func-assign
        sayFive = fiveCallback(number);

    });

}

function sayThree(number) {
    // eslint-disable-next-line eqeqeq
    if (number % 3 == 0) {
        console.log('Say three!');
    }
}

function sayFive(number) {
    if (number % 5 == 0) {
        console.log('Say five!');
    }
}

threeFive(10, 15, sayThree, sayFive);

// Do not change or remove anything below this line
module.exports = threeFive;