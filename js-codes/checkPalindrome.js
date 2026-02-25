let str ="mdadam" 

function checkPalindrome(str){
    let lastIndex=str.length-1
    
    for(let char of str){
        if(char===str[lastIndex]){
            lastIndex--
        }else{
            console.log(char,str[lastIndex])
            return false
        }
    }
    return true
    
}
console.log(checkPalindrome(str))