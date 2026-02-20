const obj= [
{id:1,name:"A"},
{id:2,name:"B"},
{id:1,name:"A"},
]

const removeDuplicateById=(obj)=>{
    let duplicateObj={}
    let index=0
    for(i of obj){
        if(!duplicateObj[i.id]){
            duplicateObj[i.id]=true
        }else{
            obj.splice(index)
            console.log(index)
  

        }
        index++
    }
    console.log(obj)
}
removeDuplicateById(obj)