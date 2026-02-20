// 2.First non-repeating character
let str="siewiiss" 
const findNonRepeatingChar=(str)=>{
       let obj={}
for(char of str){
 
    
    obj[char]=(obj[char]||0)+1
   
}
    for(nonRepeat in obj){
        if(obj[nonRepeat]===1){
            return  nonRepeat;
        }
    }
}

console.log(findNonRepeatingChar(str))