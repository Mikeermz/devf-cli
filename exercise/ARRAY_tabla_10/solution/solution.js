function multiplica10(number){
    let myList = []
    for(var i = 1; i <= 10; i++){
        myList.push(number*i);
    }
    return myList;
}

console.log(multiplica10(2))
