let num=123
function reverseNumber(num){
  let result=0
  while(num>0){
    let temp=num%10
    result=result*10+temp
    num=(num-temp)/10
  }
  return result
}

console.log(reverseNumber(num))
