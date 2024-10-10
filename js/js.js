// catalogo de productos

const productos = [  
    { id: 1, nombreObra: "Obra 1", nombreAutor: "Autor 1", precio: 1000},
    { id: 2, nombreObra: "Obra 2", nombreAutor: "Autor 2", precio: 1000},
    { id: 3, nombreObra: "Obra 3", nombreAutor: "Autor 3", precio: 1000},
    { id: 4, nombreObra: "Obra 4", nombreAutor: "Autor 4", precio: 1000},
    { id: 5, nombreObra: "Obra 5", nombreAutor: "Autor 5", precio: 1000},
    { id: 6, nombreObra: "Obra 6", nombreAutor: "Autor 6", precio: 1000},
    { id: 7, nombreObra: "Obra 7", nombreAutor: "Autor 7", precio: 1000},
    { id: 8, nombreObra: "Obra 8", nombreAutor: "Autor 8", precio: 1000},
]; 
// funcion para ver el catalogo
function mostrarCatalogo (){
    let catalogo = "catalogo de productos";
    productos.forEach(function(producto) {  
        catalogo += `${producto.id}. ${producto.nombreObra} - ${producto.nombreAutor} - ${producto.precio}`;  
    });
    return catalogo;  
}  

// funcion comprar
function comprar(){
    let total = 0;
    let productosComprados = []
    let seguirComprando = true

    while (seguirComprando){
        //muestra el catalogo
        const productoLista = mostrarCatalogo();
        const listado = prompt("selecciona un producto por su numero o escribi 'fin' para salir" + productoLista )

        if (listado === "fin"){
            seguirComprando = false;
        } else {
        const productoId = parseInt(listado);
        const seleccionProducto = productos.find(producto => producto.id === productoId);
        
        if (seleccionProducto ){
            total += seleccionProducto.precio;  //suma el precio
            productosComprados.push(seleccionProducto.nombreObra); //suma nombre al carrito
            alert("sumaste a la compta " + seleccionProducto.nombreObra + "precio: " + seleccionProducto.precio);
            } else {
                alert("producto no valido. volve a intentar")
            }
    }

    //compra final

    if (productosComprados.length > 0){ // el length hace que recorra la totalidad del array productos comprados
        const resumen = "productos comprados " + productosComprados + "total $" + total;
        alert(resumen)
    } else {
        alert("No compraste nada")
    }

}
}

comprar()