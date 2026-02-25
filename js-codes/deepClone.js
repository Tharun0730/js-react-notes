const obj={a:1,b:{c:2}}



function deepClone(obj){
    if(typeof obj!=='object'){
        return obj
    }
    const value =Array.isArray(obj)?[]:{};
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            value[key]=deepClone(obj)
        }
    }

    return value
}
// function deepClone(obj){
//     if(typeof obj!=='object') return obj
//     let copy=Array.isArray(obj)?[]:{}
//     for(let key in obj){
//         if(obj.hasOwnProperty(key)){
//             copy[key]=deepClone(obj[key])
//         }
//     }
//     return copy
// }
