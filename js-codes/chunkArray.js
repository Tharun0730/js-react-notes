let arr = [1, 2, 3, 4, 5];
let n = 2;

function chunkArray(arr, n) {
    let result = [];
    let current = [];

    for (let i = 0; i < arr.length; i++) {

        current.push(arr[i]);

        if (current.length === n) {
            result.push(current);
            current = [];
        }
    }


    if (current.length > 0) {
        result.push(current);
    }

    return result;
}

console.log(chunkArray(arr, n));
