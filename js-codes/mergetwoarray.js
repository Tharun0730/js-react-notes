let arr1 = [1, 2, 3, 4, 4, 5, 6, 7, 7];
let arr2 = [1, 2, 3, 4, 5, 6, 9, 10];

function mergeTwoArrayWithoutDuplicate(arr1, arr2) {
    let obj = {};
    let result = [];

    for (let item1 of arr1) {
        if (!obj[item1]) {
            result.push(item1);
        }

        obj[item1] = true;
    }

    for (let item2 of arr2) {
        if (!obj[item2]) {
            result.push(item2);
        }
    }

    return result;
}

console.log(mergeTwoArrayWithoutDuplicate(arr1, arr2));
