const arr1 =[1,2,3,34,43]
const arr2=[2,3,4,34]


function checkIntersection(arr1,arr2){
    let arr=[]
    for(i of arr1){
        for(j of arr2){
            if(i===j){
                arr.push(i)
            }
        }
    }
    
    console.log(arr)
}
checkIntersection(arr1,arr2)




function intersectionArray(arr1,arr2){
    let result=[];
    let obj={};
   for(let item1 of arr1){
    if(obj[item1]){
      obj[item1]=obj[item1]+1
       }else{
         obj[item1]=1
      }
  }

   for(let item2 of arr2){
    if(obj[item2]){
      result.push(item2)
        obj[item2]--;

   }
}

return result

}


console.log(intersectionArray(arr1,arr2))
