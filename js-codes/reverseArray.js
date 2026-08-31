function reverseArray(revArr){
    let result=[]
    for(i=revArr.length-1;i>=0;i--){
        result.push(revArr[i])
    }
    return result
}
