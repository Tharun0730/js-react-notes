const obj= [{role:"admin"},{role:"user"},{role:"admin"}] 


function groupByObjKey(obj){
    let groupedObj={}
   for(let value of obj){
       
       if(groupedObj[value.role]){
           groupedObj[value.role]=[...groupedObj[value.role],value]
       }else{
           groupedObj[value.role]=[value]
       }
       
   }
   console.log(groupedObj)
}
 groupByObjKey(obj)

// Output: {admin:[{role:"admin"},{role:"admin"}],user:[{role:"user"}]}