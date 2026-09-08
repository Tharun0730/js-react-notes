Array.prototype.every = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (!cb(this[i], i, this)) {
      return false;
    }
  }

  return true;
};

const numbers = [1, 2, 3, 4];

const result = numbers.every((num) => num > 0);

console.log(result);
