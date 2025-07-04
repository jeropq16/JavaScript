//lectura de datos GET. Todos los productos almacenados.

fetch('http://localhost:3000/productos')
    .then(response => response.json())
    .then(data => console.log("Avaliable Products:", data))
    .catch(error => console.error("Failed to get products", error));



//creacion de nuevos datos POST. añade nuevo producto a la coleccion.

const newproduct = {id: "7", nombre: "Screen", precio: 85000};

fetch('http://localhost:3000/productos', {
   method: 'POST',
   headers: {'Content-Type': 'application/json'},
   body: JSON.stringify(newproduct) 
})

   .then(response => response.json())
   .then(data => console.log("product added:", data)) 
   .catch(error =>  console.error("Failed to add the product:", error));


//actualizacion de datos PUT. modifica las propiedades de un producto.

const updatedproduct = {nombre: "laptop", precio: 850000};

fetch('http://localhost:3000/productos/1', {
   method: 'PUT',
   headers: {'Content-Type': 'application/json' },
   body: JSON.stringify(updatedproduct)
})
   .then(response => response.json ())
   .then(data => console.log("product uptaded correctly:", data))
   .catch(error => console.error("error al actualizar el producto", error));

//eliminacion de datos DELETE. elimina un producto del servidor.

fetch('http://localhost:3000/productos/3', {method: 'DELETE'})
   .then(()=> console.log("Deleted product"))
   .catch(error => console.error("Failed to delete the product:", error));


//vañidacion y manejo de errores


function validateProduct(producto) {
   if(!producto.nombre || typeof producto.precio !== "number") {
      console.error("invalid product data.");
      return false;
   }
   return true;
}

