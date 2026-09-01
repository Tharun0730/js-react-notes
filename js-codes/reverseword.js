let word = "Hi Im a react developer";

function reverseWord(word) {
    let result = '';
    let temp = '';

    for (let i = 0; i < word.length; i++) {
        if (word[i] === ' ') {
            result += temp + " ";
            temp = "";
        } else {
            temp = word[i] + temp;
        }
    }

    result += temp;

    return result;
}

console.log(reverseWord(word));
