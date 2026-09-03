function checkPair(arr, diff) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(arr[i], arr[j]);

            if (arr[i] - arr[j] === diff) {
                result.push([arr[i], arr[j]]);
            }
        }
    }

    return result;
}

console.log(checkPair([1, 5, 3, 4, 2], 2));

