const word= "aabbc" 

function characterFrequency(word) {
    let obj={}
    for(let char of word){
        
        obj[char]=(obj[char]||0)+1
        
    }
    return obj
    
}

console.log( characterFrequency(word))