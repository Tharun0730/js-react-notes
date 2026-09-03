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



const obj = [
    { id: 1, name: "John" },
    { id: 2, name: "Jane" },
    { id: 1, name: "John" },
    { id: 3, name: "Mike" },
    { id: 2, name: "Jane" }
];

function removeDuplicateObject(obj) {
    let result = [];
    let duplicate = {};

    for (let arr of obj) {
        if (!duplicate[arr.id]) {
            result.push(arr);
            duplicate[arr.id] = true;
        }
    }

    return result;
}

console.log(removeDuplicateObject(obj));

