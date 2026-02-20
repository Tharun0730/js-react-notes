// 1.Move zeros to end (in-place)
let num=[0,0,0,0,1] 

function moveZeroToEnd(num){
    let lastIndex=num.length-1
   
    for(let i=num.length-1;i>=0;i--){
       if(num[i]==0){
           
           let lastValue=num[lastIndex]
           console.log(lastValue,"lastvalue")
           num[lastIndex]=num[i]
             console.log(num[i])
           num[i]=lastValue
           lastIndex--
           
           
       }
    }
    return num
}

console.log(moveZeroToEnd(num))

// Output: [1,3,12,0,0]