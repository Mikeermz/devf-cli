function obtenMayor (int1,int2){
    int1 = parseInt(int1)
    int2 = parseInt(int2)

    if(int1 > int2 ){
        return int1.toString()+" es mayor y "+int2.toString()+" es el menor"
    }else if(int2 > int1){
        return int2.toString()+" es mayor y "+int1.toString()+" es el menor"
    }else if(int1 == int2){
        return int1.toString()+" y "+int2.toString()+" son iguales"
    }


}

console.log(obtenMayor(process.argv[2],process.argv[3]))
