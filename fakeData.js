//Importamos @faker-js/faker ^9.0.0
const { Faker, es } = require('@faker-js/faker')

//Crear una instancia con el locale español
const faker = new Faker ({
    locale: [es],
}); 

//Se define la funcion para generar un usuario aleatorio.
const usuarioAleatorio = () => {
    return {
        idUsuario: faker.string.uuid(),
        nombreUsuario: faker.internet.userName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        fechaNacimiento: faker.date.birthdate()
    };
};

//Función para generar un array  de usuarios aleatorios

const generarUsuarios = (cantidad) => {
    return Array.from({ length: cantidad }, () => usuarioAleatorio());
};

//ejemplos de usos, Generamos un unuario aleatorio, también podemos generar un array de usuarios
console.log(usuarioAleatorio());

//Imprimir el array de usuarios
const usuarios = generarUsuarios(5);
console.log(usuarios);




// Importación de @ngneat/falso ^7.2.0

// Generador de números aleatorios con semilla

const { rand, seed } = require('@ngneat/falso');

seed('some-constant-seed');

// Siempre retorna 2 para la semilla definida
console.log(rand([1, 2, 3, 4, 5]))


// Cambiar la semilla
seed('otra-semilla');
console.log(rand([1, 2, 3, 4, 5])); // Debería retornar un número diferente, por ejemplo, 4

// Volver a la semilla original
seed('some-constant-seed');
console.log(rand([1, 2, 3, 4, 5])); // Debería retornar 2 nuevamente