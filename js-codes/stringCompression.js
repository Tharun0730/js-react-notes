let str="aabbccdc"

function stringCompression(str){
  let result=""
  let obj={};
  for(let char of str){
    if(obj[char]){
      obj[char]++
    }else{
      obj[char]=1
    }
  }
for(let key in obj){
  result+=`${key}${obj[key]}`
}
  console.log(obj,result)
}

 stringCompression(str)
