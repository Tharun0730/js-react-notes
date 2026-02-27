const obj={name:"John",age:25}

function convertQuery(obj){
    let str=''
    for(let key in obj){
        str+=`${key}=${obj[key]}&`
    }
    
    console.log()
    return str.slice(0,-1)
    
}
convertQuery(obj)