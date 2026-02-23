const arr =[0,null,1,false,2,""]

function removeFalsyValue(arr){
    if(!arr.length) return ["ss"]
    let result=[]
    let index=0
   
    for(let num of arr){
        if(num){
            result[index]=num
            index++
        }
    }
    
    return result
    
}
console.log(
removeFalsyValue(arr))