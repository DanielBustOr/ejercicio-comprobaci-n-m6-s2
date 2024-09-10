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






