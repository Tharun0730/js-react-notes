Array.prototype.myFind = function (cb) {
  let result = null;

  for (let i = 0; i < this.length; i++) {
    if (cb(this[i], i, this)) {
      result = this[i];
      return result;
    }
  }
};

const numbers = [10, 20, 30, 40];

const result = numbers.myFind((num, index) => num > 15);

console.log(result);
