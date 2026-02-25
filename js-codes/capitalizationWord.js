// 2.  Capitalize first letter of each word 

// Input: "hello world" 

// Output: "Hello World" 

const str ="hello world"

function capitalTheWord(str){
    let whiteSpace=false
    let result;
    for(let char in str){
      if(char==='0'){
          console.log(str[char])
          result=str[char].toUpperCase()
      }else if(str[char]===' '){
          whiteSpace=true
          result+=str[char]
      }else if(whiteSpace){
            result+=str[char].toUpperCase()
            whiteSpace=false
      }else{
           result+=str[char]
      }
    }
    
    console.log(result)
}
capitalTheWord(str)