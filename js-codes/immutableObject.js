const obj = { user: { name: "A", age: 20 } };
const updatedObj = {...obj,
    
     user:{
         ...obj.user,
         age:25
     }
};

console.log(obj);
// Output: {user:{name:"A",age:25}}