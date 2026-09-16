Function.prototype.myApply = function (context, args) {
  context = context 
  let id=Symbol()
  context[id]=this
  let result=context[id](...args)
  delete context[id]
  return result
}


let obj={
  name:"thaarun"
}

function greet(p){
  console.log(this.name,p)
}

console.log(greet.myApply(obj,["chennai"]))
