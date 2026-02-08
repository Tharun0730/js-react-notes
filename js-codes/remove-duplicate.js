let arr = [1, 2, 3, 3, 4, 4, 5, 5, 5, 5, 4, 4, 4, 343, 34, 34, 2, 3];

const removeDuplicate = (arr) => {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let found = false;

    for (let j = 0; j < result.length; j++) {
        console.log(i,arr[j])
      if (result[j] === arr[i]) {
        found = true;
        break;
      }
    }

    if (!found) {
       
      result[result.length] = arr[i];
      found=false
    }
  }
  return result;
};

console.log(removeDuplicate(arr));
