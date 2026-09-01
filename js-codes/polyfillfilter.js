Array.prototype.myFilter = function (cb) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        if (cb(this[i], i, this)) {
            result.push(this[i]);
        }
    }

    return result;
};

let arr = [1, 2, 3, 4, 5, 6, 6, 7];

console.log(arr.myFilter((data) => data % 2 === 0));
