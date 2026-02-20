// array to object 

const arr = [
  ["name", "Rahul"],
  ["age", 25],
  ["name", "Amit"],
  ["city", "Delhi"],
  ["city", "Mumbai"]
];


function convertArrayIntoObject(arr) {
 let obj={}
 for(let [key,value] of arr){
     if(obj[key]){
         if(Array.isArray(obj[key])){
             obj[key].push(value)
         }else{
             obj[key]=[obj[key],value]
         }
     }else{
         obj[key]=value
     }
 }
 return obj
}