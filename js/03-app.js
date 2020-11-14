//Eliminar un elemento de localStorage
localStorage.removeItem('Nombre');

//Actualizar un registro
//Obtener los datos
const meses = JSON.parse(localStorage.getItem('Meses'));
console.log(meses);
//Actualizar el registro
meses.push('Nuevo mes');
console.log(meses);
//Guardar el registro
localStorage.setItem('Nombre', meses);

//Limpiar localStorage
localStorage.clear();
