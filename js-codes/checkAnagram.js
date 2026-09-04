let word1 = "listen";
let word2 = "silent";


function CheckAnagram(word1,word2){
    if(word1.length!==word2.length) return false
  let obj1={}
  let obj2={}
  
  for(let char of word1){
      obj1[char]=(obj1[char]||0)+1
  }
  for(let char of word2){
      obj2[char]=(obj2[char]||0)+1
  }
  for(let check in obj1){
      console.log(obj1[check],obj2[check])
      if(obj1[check]!==obj2[check]){
          return false
      }
  }
    return true
}    
console.log(CheckAnagram(word1,word2))



// method 2 with true and false check 
function checkAnagrams(str1, str2) {
  const obj = {};

  for (const char1 of str1) {
    obj[char1] = true;
  }

  for (const char2 of str2) {
    if (!obj[char2]) {
      return false;
    }
  }

  return true;
}

console.log(checkAnagrams(str1, str2));
