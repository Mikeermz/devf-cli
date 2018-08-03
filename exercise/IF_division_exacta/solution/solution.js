function divisionExacta (int1,int2){
    int1 = parseInt(int1)
    int2 = parseInt(int2)

    if(int1%int2 == 0 ){
        return "division exacta"
    }else{
        return "no es division exacta"

    }


}

console.log(divisionExacta(process.argv[2],process.argv[3]))
