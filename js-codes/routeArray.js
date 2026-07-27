let arr = [1,2,3,4,4,5,6,7,8,9];

function routeArray(arr, n) {

    n = n % arr.length;

    for (let i = 0; i < n; i++) {

        console.log("rotation:", i + 1);

        let last = arr[arr.length - 1];

        for (let j = arr.length - 1; j > 0; j--) {
            arr[j] = arr[j - 1];
        }

        arr[0] = last;
    }

    return arr;
}

console.log(routeArray(arr, 2));
