Array.prototype.myReduce = function (callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i], i, this);
    }

    return accumulator;
};

const result = [1, 2].myReduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
);

console.log(result);
