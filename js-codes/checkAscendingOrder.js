const arrSort = [1, 2, 3, 4, 4];

function checkSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }

    return true;
}

console.log(checkSort(arrSort));
