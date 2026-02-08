function Calculate() {
    let totalAmt=0
  this.lacs = (amt) => {
   totalAmt+=amt*100000
   
   return this
  }
  this.crore=(amt)=>{
      totalAmt+=amt*1000000
      return this
  }
  this.getTotal = () => totalAmt
}

const obj = new Calculate()
console.log(obj.lacs(5).crore(16).getTotal())
