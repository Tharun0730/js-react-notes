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

function deepClone(value) {
    if (value === null || typeof value !== "object") {
        return value;
    }

    const result = Array.isArray(value) ? [] : {};

    for (const key in value) {
        result[key] = deepClone(value[key]);
    }

    return result;
}

const obj = {
    name: "name",
    place: {
        address: "ayanavaram",
        pincode: "60023"
    }
};

const obj2 = deepClone(obj);

obj2.name = "tharun";

console.log("Original:", obj);
console.log("Clone:", obj2);
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
