//Guardar datos en localStorage
//Se nesecita una llave(key) y un valor(value)

localStorage.setItem('Nombre', 'Rodolfo');

//Guardar un objeto en localStorage
const producto = {
	nombre: 'PS5',
	precio: 12000,
	version: 'Digital',
};

const productoString = JSON.stringify(producto);
localStorage.setItem('Producto', productoString);

//Guardar un arreglo en localStorage
const meses = ['Enero', 'Febrero', 'Marzo'];

localStorage.setItem('Meses', JSON.stringify(meses));
