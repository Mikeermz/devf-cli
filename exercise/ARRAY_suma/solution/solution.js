function sumaArrays(){
    let mySuma = 0
    let listOne = [4,76,3,12,65,3] 
    let listTow = [234,222,523,65]
    for(var i = 1; i < listOne.length; i++){
        mySuma += listOne[i]
    }
    for(var i = 1; i < listTow.length; i++){
        mySuma += listTow[i]
    }
    
    return mySuma;
}

console.log(sumaArrays())
