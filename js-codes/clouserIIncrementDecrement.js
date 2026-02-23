/**
 * @param {number} init
 * @return {{increment: Function, decrement: Function, reset: Function}}
 */
var createCounter = function(init) {

    let currentValue = init;

    return {
        increment() {
            currentValue++;
            return currentValue;
        },

        decrement() {
            currentValue--;
            return currentValue;
        },

        reset() {
            currentValue = init;
            return currentValue;
        }
    };
};