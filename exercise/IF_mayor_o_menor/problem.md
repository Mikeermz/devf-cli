Escriba un programa que reciba como parametros dos números y que conteste cuál es el menor y cuál el mayor o que escriba que son iguales.

Debes imprimir cual es el mayor de la siguiente manera:
```js
console.log(x" es mayor y "+y+" es el menor")
```
donde `x` y `y` son cualquier numero

en caso que sean iguales debes imprimir

```js
console.log(x+"y"+y+"son iguales")
```
Escribe tres casos en donde uno de ellos el resualtado sea igual

----------------------------------------------------------------------
## PISTAS

Para escribir un programa en Node.js, crea un archivo con extensión `.js` y dentro escribe JavaScript! Para ejecutarlo usa el comando 'node', por ejemplo:
```sh
$ node program.js
```

Recuerda que los argumentos vienen en forma de string para convertirlos a enteros utiliza
```js
parseInt("12")
```


Para recibir parametros ocupa del sistema ocupa  la sguiente forma

```js
    function(process.argv[2],process.argv[3]){}
```

Recuerda que  para comparar valores pudes utilizar  `IF` para comparar valores

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