const users = [
  { name: "Tharun", age: 28 },
  { name: "Arun", age: 22 },
  { name: "Kumar", age: 25 }
];

function sortArrayOfObject(users,key){

  for(let i=0;i<users.length;i++){
    for(let j=0;j<users.length-i-1;j++){
      if(users[j][key]>users[j+1][key]){
       
         const temp = users[j];
        users[j] = users[j + 1];
        users[j + 1] = temp;
      }
    }
  }
    return users;
}
console.log(
sortArrayOfObject(users,"age"))
