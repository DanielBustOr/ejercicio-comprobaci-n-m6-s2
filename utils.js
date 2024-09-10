//importamos valorBooleano
const {valorBooleano} = require('./config');

//función que utiliza el valor booleano para decidir que devolver

function procesarResultado (texto1, texto2){
    if (!valorBooleano){
        //Devuelve el largo de la concatenación de las dos cadenas
        resultado =  (texto1 + texto2).length;
        //Muestra el resultado en consola 
        console.log(`El total de caracteres es: ${resultado}`);
    }else{
        //devuelve la concatenación de las dos cadenas
        resultado = texto1 + texto2;
        //Muestra el resultado en consola
        console.log(`la concatenación de las palabras es: ${resultado}`);
    };
    return resultado
};

//Exporta la función
module.exports = {
    procesarResultado
};

