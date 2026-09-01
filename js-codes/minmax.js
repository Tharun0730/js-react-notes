let number = [1, 2, 3, 4, 5, 1000, -1];

function findMinAndMax(number) {
    let min = number[0];
    let max = number[0];

    for (let num of number) {
        if (num <= min) {
            min = num;
        }

        if (num >= max) {
            max = num;
        }
    }

    return { min, max };
}

console.log(findMinAndMax(number));
