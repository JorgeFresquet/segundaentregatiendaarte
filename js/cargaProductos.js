
    // Array de productos
    const stockProductos = [
        { id: 1, nombreObra: "Obra 1", nombreAutor: "Autor 1", desc: "pintura", precio: 1000, img: "../image/obra_1.jpg" },
        { id: 2, nombreObra: "Obra 2", nombreAutor: "Autor 2", desc: "pintura", precio: 1000, img: "../image/obra_2.jpg" },
        { id: 3, nombreObra: "Obra 3", nombreAutor: "Autor 3", desc: "pintura", precio: 1000, img: "../image/obra_3.jpg" },
        { id: 4, nombreObra: "Obra 4", nombreAutor: "Autor 4", desc: "pintura", precio: 1000, img: "../image/obra_4.jpg" },
        { id: 5, nombreObra: "Obra 5", nombreAutor: "Autor 5", desc: "pintura", precio: 1000, img: "../image/obra_5.jpg" },
        { id: 6, nombreObra: "Obra 6", nombreAutor: "Autor 6", desc: "pintura", precio: 1000, img: "../image/obra_6.jpg" },
        { id: 7, nombreObra: "Obra 7", nombreAutor: "Autor 7", desc: "pintura", precio: 1000, img: "../image/obra_6.jpg" },
        { id: 8, nombreObra: "Obra 8", nombreAutor: "Autor 8", desc: "pintura", precio: 1000, img: "../image/obra_7.jpg" },
    ];

    // Variables para el carrito y total
    let carrito = [];
    let total = 0;

    // Contenedor de productos
    const contenedorProductos = document.getElementById("contenedor-productos");
    const carritoDiv = document.getElementById("carrito");
    const totalElement = document.getElementById("total");

    // Función para renderizar el catálogo
    function mostrarProductos() {
        stockProductos.forEach((producto) => {
            const div = document.createElement("div");
            div.classList.add("producto");
            
            div.innerHTML = `
                <img src="${producto.img}" alt="${producto.nombreObra}">
                <h3>${producto.nombreObra}</h3>
                <p>${producto.nombreAutor}</p>
                <p>Precio: $${producto.precio}</p>
                <button class="btn-comprar" data-id="${producto.id}">Comprar</button>
            `;
            contenedorProductos.appendChild(div);
        });
    }

    // Función para agregar producto al carrito
    function agregarAlCarrito(idProducto) {
        const productoSeleccionado = stockProductos.find(producto => producto.id === idProducto);
        if (productoSeleccionado) {
            carrito.push(productoSeleccionado);
            total += productoSeleccionado.precio;
            actualizarCarrito();
        }
    }

    // Función para actualizar el carrito y el total
    function actualizarCarrito() {
        carritoDiv.innerHTML = ""; // Limpia el contenido anterior del carrito
        carrito.forEach((producto, index) => {
            const div = document.createElement("div");
            div.textContent = `${index + 1}. ${producto.nombreObra} - $${producto.precio}`;
            carritoDiv.appendChild(div);
        });

        totalElement.textContent = total; // Actualiza el total
    }

    // Evento de escucha para los botones "Comprar"
    contenedorProductos.addEventListener("click", (event) => {
        if (event.target.classList.contains("btn-comprar")) {
            const idProducto = parseInt(event.target.dataset.id);
            agregarAlCarrito(idProducto);
        }
    });

    // Inicializar el catálogo
    mostrarProductos();    

 




///////// apertura y cierre del  formualrio



const modalContainer = document.getElementById("modal-container")
const modalAbrir = document.getElementById("btn")
const cerrarModal = document.getElementById("cerrar-modal")


modalAbrir.addEventListener("click", ()=>{
    modalContainer.classList.toggle("modal-active")
})

cerrarModal.addEventListener("click", ()=>{
    modalContainer.classList.toggle("modal-active")
})


///////// apertura y cierre del carrito 



const modalContainer2 = document.getElementById("modal-container2")
const modalAbrir2 = document.getElementById("btn2")
const cerrarModal2 = document.getElementById("cerrar-modal2")


modalAbrir2.addEventListener("click", ()=>{
    modalContainer2.classList.toggle("modal-active2")
})

cerrarModal2.addEventListener("click", ()=>{
    modalContainer2.classList.toggle("modal-active2")
})


//////// formulario usuario

const inputNombre = document.getElementById("nombre")
const inputApellido = document.getElementById("apellido")

inputNombre.addEventListener("change", ()=>{
    const valor = inputNombre.value
    if(valor.length <3){
        inputNombre.classList.add("invalido")
    }else{
        inputNombre.classList.remove("invalido")

    }

})

const form = document.getElementById("formulario")
const usuarios = []

form.addEventListener("submit", (e)=>{
    e.preventDefault()
    const nombre = inputNombre.value
    const apellido = inputApellido.value

    const usuario ={
        nombre: nombre,
        apellido: apellido
    }

    usuarios.push(usuario)
    console.log(usuarios);
})