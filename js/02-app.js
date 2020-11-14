//Obtener datos de localStorage
const nombre = localStorage.getItem('Nombre');
console.log(nombre);

//Obtener un objeto
const producto = localStorage.getItem('Producto');
console.log(JSON.parse(producto));

//Obtener un arreglo
const meses = localStorage.getItem('Meses');
//Utilizando una variable
const mesesArray = JSON.parse(meses);
console.log(mesesArray);
