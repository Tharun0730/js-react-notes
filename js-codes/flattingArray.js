const arr= [1, [2, [3, 4], 5], 6]

function flatArray(arr,result){
    for(data of arr){
        if(Array.isArray(data)){
            flatArray(data,result)
        }else{
            result[result.length]=data
        }
    }
    return result
}


console.log(flatArray(arr,[]))
// const arr = [1, 2, 3, [3, [4], 4, 3], 3];

// function flatten(arr, result = []) {
//   for (const data of arr) {
//     if (Array.isArray(data)) {
//       flatten(data, result);
//     } else {
//       result.push(data);
//     }
//   }

//   return result;
// }

// console.log(flatten(arr));
