const arr= [1, [2, [3, 4], 5], 6]

function flatArray(arr,result){
    for(data of arr){
        if(Array.isArray(data)){
            flatArray(data,result)
        }else{
            result[result.length]=data
        }
    }
    return result
}


console.log(flatArray(arr,[]))
 