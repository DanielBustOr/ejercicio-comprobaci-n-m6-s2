## Ejercicio de Comprobación Módulo 6 Sesión 2

1. **Entra al sitio [https://www.npmjs.com/](https://www.npmjs.com/), busca el paquete `nodemon`, y lee la documentación.**

2. **En la barra de búsqueda de npm, ubica el término "fake data". Con éste encontrarás paquetes que generan datos de pruebas. Instala, al menos, dos paquetes que generen datos falsos, y usando la documentación, intenta hacer uso de éstos en un programa Node.js.**

3. **Crea un nuevo proyecto con el comando `npm init`, que contenga un archivo `index.js`, un archivo `utils.js`, y un archivo `config.js`.**

4. **En el archivo `utils.js`, crea una función que devuelva la concatenación de dos cadenas de texto, o el largo de caracteres resultante de la concatenación de las dos cadenas de texto, dependiendo de un valor booleano.**

5. **En el archivo `config.js`, crea una variable de tipo booleana, expórtala, y haz uso de ella en la función creada en el archivo `utils.js`, para definir si la función retornará las cadenas de texto concatenadas, o el largo de caracteres de la concatenación.**

6. **Instala en tu proyecto el paquete [Nano ID](https://www.npmjs.com/package/nanoid), y lee la documentación para generar dos IDs diferentes ([Documentación de Nano ID](https://github.com/ai/nanoid#js)). Guarda cada valor en una variable independiente.**

7. **Exporta la función de tu archivo `utils.js`, e invócala en tu archivo principal `index.js` utilizando los dos IDs generados.**

8. **Cambia el valor de la variable booleana en el archivo `config.js`, para variar el resultado de tu programa.**


## Solución.

### 1. Documentación de Nodemon

1.1 **Ingresamos al sitio web indicado en el enunciado, buscamos el Paquete Nodemon, y leemos su documentación. A través de la documentación, podemos elaborar la siguiente tabla resumiendo los aspectos generales de Nodemon:**

## Tabla de `nodemon`

| **Aspecto**                       | **Descripción**                                                                                                                                                              |
| --------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Qué es `nodemon`**              | Una herramienta que reinicia automáticamente aplicaciones basadas en Node.js cuando se detectan cambios en los archivos del directorio.                                      |
| **Instalación Global**            | `npm install -g nodemon` o `yarn global add nodemon` para instalarlo globalmente en el sistema.                                                                              |
| **Instalación Local**             | `npm install --save-dev nodemon` o `yarn add nodemon -D` para instalarlo como dependencia de desarrollo, disponible solo en el contexto de scripts npm o con `npx`.          |
| **Uso Básico**                    | Reemplaza `node` con `nodemon` en la línea de comandos para ejecutar tu aplicación. Ejemplo: `nodemon ./server.js localhost 8080`.                                           |
| **Opciones de Línea de Comando**  | Usa `-h` o `--help` para ver opciones de CLI. Ejemplo: `nodemon -h`.                                                                                                         |
| **Reinicio Automático**           | Reinicia el proceso automáticamente cuando se detectan cambios en los archivos. También soporta aplicaciones que terminan limpiamente.                                       |
| **Reinicio Manual**               | Mientras `nodemon` está en ejecución, puedes escribir `rs` y presionar Enter para reiniciar la aplicación manualmente.                                                       |
| **Archivos de Configuración**     | Soporta archivos de configuración locales (`nodemon.json`) y globales. También puede usar la propiedad `nodemonConfig` en `package.json`.                                    |
| **Monitoreo de Directorios**      | Por defecto, monitorea el directorio de trabajo actual. Puedes especificar directorios adicionales con `--watch`. Ejemplo: `nodemon --watch app --watch libs app/server.js`. |
| **Especificación de Extensiones** | Monitorea archivos con extensiones predeterminadas. Puedes especificar otras extensiones con `-e` o `--ext`. Ejemplo: `nodemon -e js,pug`.                                   |
| **Ignorar Archivos**              | Usa `--ignore` para omitir archivos o directorios específicos. Ejemplo: `nodemon --ignore lib/ --ignore tests/`.                                                             |
| **Retraso en el Reinicio**        | Usa `--delay` para agregar un retraso antes del reinicio. Ejemplo: `nodemon --delay 2.5 server.js`.                                                                          |
| **Enviar Señales**                | Puedes enviar señales específicas a tu aplicación con `--signal`. Ejemplo: `nodemon --signal SIGHUP server.js`.                                                              |
| **Ejecutar Programas No Node**    | Puedes usar `nodemon` para ejecutar y monitorear otros programas. Ejemplo: `nodemon --exec "python -v" ./app.py`.                                                            |
| **Integración con Herramientas**  | Existen plugins para integrar `nodemon` con `gulp` y `grunt`. Ver `gulp-nodemon` y `grunt-nodemon` para más detalles.                                                        |

### 2. Generación de Datos Falsos

2.1 **Instalación de Paquetes:**

Primero instalaremos el modulo  `@faker-js/faker` v9.0.0. Para ello lo realizaremos a través de npm con el siguiente comando:

```shell
npm i @faker-js/faker
```

2.2 **Código para Generar Datos Falsos:**

En este script, utilizamos `@faker-js/faker` para generar datos falsos en español. A continuación, se detalla cómo configurar y utilizar esta librería para crear usuarios aleatorios y arrays de usuarios.

**Pasos para configurar y utilizar Faker-js:**

 2.2.1 **Importación del módulo:**
 ```javascript
const { Faker, es } = require('@faker-js/faker');
 ```

 2.2.2 **Creación de una instancia de Faker:** Creamos una instancia de `Faker` configurada con el locale español para generar datos en español.
 ```javascript
const faker = new Faker({
    locale: [es],
});
 ```

 2.2.3 **Definición de funciones para generar datos:**

 - `usuarioAleatorio`: Genera un usuario aleatorio con atributos como ID, nombre de usuario, email, contraseña y fecha de nacimiento.
- `generarUsuarios`: Genera un array de usuarios aleatorios de la cantidad especificada.
```javascript
 // Se define la función para generar un usuario aleatorio.
 const usuarioAleatorio = () => {
    return {
         idUsuario: faker.string.uuid(),
         nombreUsuario: faker.internet.userName(),
         email: faker.internet.email(),
         password: faker.internet.password(),
        fechaNacimiento: faker.date.birthdate()
     };
};

// Función para generar un array de usuarios aleatorios
const generarUsuarios = (cantidad) => {
       return Array.from({ length: cantidad }, () => usuarioAleatorio());
};
 ```

2.2.4 **Uso del código:**

- Generamos un usuario aleatorio y lo imprimimos en la consola.
- Generamos un array de 5 usuarios aleatorios y lo imprimimos en la consola.
  
```javascript
// Ejemplos de usos
console.log(usuarioAleatorio());

// Imprimir el array de usuarios
const usuarios = generarUsuarios(5);
console.log(usuarios);
 ```

Este archivo te permitirá generar datos falsos en español para probar y desarrollar tu aplicación.

2.3 **Funcionamiento de las Semillas en Generadores de Números Aleatorios**

El segundo módulo que utilizamos es conocido como @ngneat/falso 7.2.0, también popular y conocido por generar datos falsos y aleatorios para pruebas y desarrollo, permitiendo la creación de datos simulados como nombres, direcciones, correos electrónicos y más, con la opción adicional de utilizar una semilla para asegurar la reproducibilidad de los datos generados.

Una semilla es un valor inicial utilizado por un generador de números aleatorios para producir una secuencia de números. La idea principal de usar una semilla es garantizar que la secuencia de números generados sea reproducible. Esto significa que si se usa la misma semilla, el generador producirá la misma secuencia de números cada vez.

2.3.1 **Ejemplo de Uso con @ngneat/falso**

El siguiente código muestra cómo funciona una semilla en la práctica:

```javascript
// Importación de @ngneat/falso ^7.2.0
const { rand, seed } = require('@ngneat/falso');

// Generador de números aleatorios con semilla
seed('some-constant-seed');

// Siempre retorna 2 para la semilla definida
console.log(rand([1, 2, 3, 4, 5]));

// Cambiar la semilla
seed('otra-semilla');
console.log(rand([1, 2, 3, 4, 5])); // Debería retornar un número diferente, porejemplo, 4

// Volver a la semilla original
seed('some-constant-seed');
console.log(rand([1, 2, 3, 4, 5])); // Debería retornar 2 nuevamente
```
**Explicación:**

1. Establecimiento de la Semilla:
 
- seed('some-constant-seed'); establece la semilla inicial para el generador de números aleatorios. Con esta semilla, el generador produce una secuencia predecible de números.

1. Generación de Números Aleatorios:
   
- console.log(rand([1, 2, 3, 4, 5])); produce un número aleatorio de la lista dada basado en la semilla establecida. Dado que la semilla es constante, el número retornado será siempre el mismo, en este caso, 2.

3. Cambio de Semilla:

- Al cambiar la semilla a 'otra-semilla' con seed('otra-semilla');, el generador de números aleatorios produce una nueva secuencia basada en esta semilla diferente. Esto debería dar un número diferente, por ejemplo, 4.

4. Restablecimiento de la Semilla Original:

- Al restablecer la semilla a 'some-constant-seed', la secuencia de números aleatorios vuelve a ser la misma que antes, asegurando que el número generado sea nuevamente 2.
Este enfoque de utilizar semillas es útil en situaciones donde se requiere reproducibilidad, como en pruebas y simulaciones. Al usar la misma semilla, se asegura que los resultados sean consistentes en ejecuciones sucesivas.

### 3. Creación de Modulos

3.1 En este punto procederemos a crear nuestro proyecto con `npm init`, ya lo habiamos creado con anterioridad para el ejercicio de fake data. Procederemos con la creación de `utils.js`,  `config.js` y nuestro archivo main `index.js`

### 4. Creación de Función en `utils.js`

4.1 En este punto se nos pedia que crearamos una funcion que concatera dos cadenas de texto o qué devolviera el largo de caracteres resultante de la concatenación de las dos cadenas texto, en función de un valor booleano. 

- Para Ello definimos la siguiente función: 
```javascript

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

```
En donde `ValorBooleano`, es nuestra variable de tipo booleano, dependiendo de su valor, obtendremos un resultado en consola. La funcion `procesarResultado` toma como argumento dos cadenas de texto. Exportamos nuestra función para ser utilizada más adelante. 

### 5. Creación d Variable `ValorBooleano`

5.1 **Procederemos a crear nuestra variable `ValorBooleano` y a la vez la exportaremos para ser utilizada en `utils.js`:**

```javascript
const valorBooleano = false;

module.exports = {valorBooleano};
```
### 6. Instalación Paquete Nano ID: 

6.1 **Procederemos a instalar nanoid a través de npm install:**

```shell
npm i nanoid
```
- Luego en su documentación encontraremos la forma de importar el modulo, en nuestro caso la importamos a través de una importación dinamica para nuestro entorno de trabajo CommonJS: 

```javascript
// Importamos nanoid usando dynamic import() para importar el módulo nanoid
(async () => {
    const { nanoid } = await import('nanoid');

    //generar ID unicos 
    const id1 = nanoid(10)
    const id2 = nanoid(15)

})();
```
- Como podemos observar guardamos el valor de cada id en una constante, la cual posteriormete la pasaremos como argumento al llamar la funcion procesarResultado. 

### 7 Uso de la Funcion procesarResultado

7.1 **Ahora hacemos uso de nuestro función procesarResultado exportandola a `Index.js`, quedando nuestro script de la siguiente manera:**
```javascript
//importamos la funcion procesarResultado 
const { procesarResultado } = require('./utils');

// Importamos nanoid usando dynamic import() para importar el módulo nanoid
(async () => {
    const { nanoid } = await import('nanoid');

    //generar ID unicos 
    const id1 = nanoid(10)
    const id2 = nanoid(15)

    //llamar a la Función procesarResultado con los IDS generados

    procesarResultado(id1, id2);

})(); 
```
- Y obteniendo finalmente en nuestr consola el siguiente resultado: 
[nodemon] starting `node index.js`
El total de caracteres es: 25


### 8. Cambiar valor Variable Booleana: 
8.1 **Finalmente se nos pedia cambiar el valor de `valorBoleano` para ello  cambiamos el valor de nuestra variable a true, obteniendo:**
 
[nodemon] starting `node index.js`
la concatenación de las palabras es: fjkcWrOXW8cV4KyGL80hQx_1U

