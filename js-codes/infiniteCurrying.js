// function addCurr(a){
//     return function curried(b){
//         if(b) return addCurr(a+b);
//         return a;
//     }


// }
// console.log(addCurr(5)(3))

function addCurr(a) {
  function curried(b) {
    if (b !== undefined) {
      return addCurr(a + b);
    }
    return a;
  }

  curried[Symbol.toPrimitive] = () => a;
  return curried;
}

console.log(addCurr(5)(3));      // 8
console.log(addCurr(1)(2)(3));   // 6
console.log(addCurr(5)(0)(2));   



