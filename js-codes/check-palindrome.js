
const str = "madam";

function palindrome(str) {
    let lastIndex = str.length - 1;

    for (let i = 0; i < str.length - 1; i++) {
        console.log(str[i], str[lastIndex]);

        if (str[i] !== str[lastIndex]) return false;

        lastIndex--;
    }

    return true;
}

console.log(palindrome(str));

