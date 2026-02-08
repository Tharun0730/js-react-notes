const memoFunction = (fn) => {
  const caches = new Map();
  return (...args) => {
    let key = JSON.stringify(args);

    if (caches.has(key)) {
      console.log("caches");

      return caches.get(key);
    } else {
      const result = fn(...args);
      caches.set(key, result);
      return result;
    }
  };
};

const add = (a, b) => {
  return a + b;
};

const memoAdd = memoFunction(add);

console.log(memoAdd(2, 3));
console.log(memoAdd(2, 3));
console.log(memoAdd(4, 5));
