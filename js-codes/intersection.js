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