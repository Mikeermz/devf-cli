Escriba un programa que tenga el año actual y reciba como parametro un año cualquiera. Escriba cuántos años han pasado desde ese año o cuántos años faltan para llegar a ese año.

----------------------------------------------------------------------
## PISTAS

Para escribir un programa en Node.js, crea un archivo con extensión `.js` y dentro escribe JavaScript! Para ejecutarlo usa el comando 'node', por ejemplo:
```sh
$ node program.js
```

Para recibir parametros  del sistema ocupa  la siguiente forma

```js
    function(process.argv[2],process.argv[3]){}
```
 `'process.argv'`  es una forma  de recibir parametros como array desde el sistema

**Nota:** Los argumentos empiezan desde la pocision 2 
 `process.argv[2]` 


Recuerda que los argumentos vienen en forma de string para convertirlos a enteros utiliza
```js
parseInt("12")
```



Recuerda que  para comparar valores pudes utilizar  `IF` 
```js
if(valor1 == valor2){
    //Haz algo
}
else{
    //Haz otra cosa
}

```

Cuando termines debes ejecutar:

```sh
$ {appname} verify program.js
```

para continuar con el siguiente ejercicio. Tu programa será probado, se generará un reporte y si todo funciona correctamente se etiquetará el ejercicio como 'completado'.