const user = {
  name: ["Rahul",'tharun'],
  age: 25,
  city: "Delhi"
};


function convertObjectIntoArray(obj) {
    let arr=[]
    for(key in obj){
        let value=obj[key]
        if(Array.isArray(obj[key])){
          for(i of obj[key]){
               arr.push([key,i])
          }
        }else{
            arr.push([key,value])
        }
    }
    return arr ;
}

console.log(convertObjectIntoArray(user));