Array.prototype.myMap=function(cb){
    if(!this.length) return []
let result =[]
for(let i=0;i<this.length;i++){
    result.push(cb(this[i],i,this))
}
return result
}


const arr=[1,2,3,4,5]

console.log([].myMap((data)=>data*2))
