const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};


function flatObject(obj,result={},parentKey=''){
    
    for(key in obj){
        let newKey=parentKey?parentKey+'.'+key:key
        if(typeof obj[key]==='object'&&obj[key]!==null){
            flatObject(obj[key],result,newKey)
        }else{
            result[newKey]=obj[key]
        }
    }
    
    return result
    
}

console.log(flatObject(obj,{},'')
)