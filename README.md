# LocalStorage

## Cuarto proyecto del curso

Proyecto del curso de Javascript de Juan Pablo de la torre Valdez en Udemy

### Curso:

[JavaScript Moderno Guía Definitiva](https://www.udemy.com/course/javascript-moderno-guia-definitiva-construye-10-proyectos/)

---

### Guardar en localStorage

```
localStorage.setItem('Nombre', 'Rodolfo');
```

---

### Guardar un objeto

```
const producto = {
	nombre: 'PS5',
	precio: 12000,
	version: 'Digital',
};

//Se puede utilizar una variable para convertir a string
const productoString = JSON.stringify(producto);
localStorage.setItem('Producto', productoString);
```

---

### Guardar un arreglo

```
const meses = ['Enero', 'Febrero', 'Marzo'];

//Se puede convertir directamente sin necesidad de una variable
localStorage.setItem('Meses', JSON.stringify(meses));
```

---

### Obtener datos

```
const nombre = localStorage.getItem('Nombre');
console.log(nombre);
```

---

### Obtener un objeto

```
const producto = localStorage.getItem('Producto');
console.log(JSON.parse(producto));
```

---

### Obtener un arreglo

```
const meses = localStorage.getItem('Meses');

//Utilizando una variable
const mesesArray = JSON.parse(meses);
console.log(mesesArray);
```

---

### Eliminar un elemento

```
localStorage.removeItem('Nombre');
```

---

### Actualizar datos

```
//Obtener los datos
const meses = JSON.parse(localStorage.getItem('Meses'));
console.log(meses);

//Actualizar el registro
meses.push('Nuevo mes');
console.log(meses);

//Guardar el registro
localStorage.setItem('Nombre', meses);
```

---

### Limpiar localStorage

```
localStorage.clear();
```
