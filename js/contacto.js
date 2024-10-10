
let nombreUsuario
let apellidoUsuario
let mailUsuario
let passwordUsuario
let checkPassword




// funcion para crear ingresar contraseñas
function validarPassword(){

    // funcion generar usuario

    function generarUsuario(){
    let crearUsuario =  prompt("ingrese su nombre").toLowerCase()
    return crearUsuario
}

    function crearPassword(){
        let creaPassword = parseInt(prompt("ingrese una contraseña"))
        return creaPassword
    }

    function confirmarPassword(){
        let confirmaPassword = parseInt(prompt("confirma una contraseña"))
        return confirmaPassword
    }
        nombreUsuario = generarUsuario()
        passwordUsuario = crearPassword()
        checkPassword = confirmarPassword()

        console.log(nombreUsuario)
        console.log(passwordUsuario)
        console.log(checkPassword)
}
validarPassword()


// se repite el pedido de contraseñas mientras no sean iguales
while(passwordUsuario != checkPassword ){
    alert("Algunos datos no son válidos. Por favor, verificalos y volvé a enviar el formulario para generar tu usuario." );
    //Volvemos a solicitar un dato. En la próxima iteración se evalúa si no es ESC.
    validarPassword()
}
// si son iguales confirma registro
alert("Se guardo su contraseña con exito")





// inicio de sesion con bloqueo de usuario

function inicioSesion(){
    
    let usuario = prompt(" Para iniciar sesión ingrese su usuario registrado").toLowerCase()
    let password = parseInt(prompt("ingrese contraseña:"))
    let contadorUsuario = 1

    while ((usuario !== nombreUsuario)||(password!==passwordUsuario)){
        if(contadorUsuario===3){
            alert("Acceso bloqueado.")
            break
        } 

        }

        alert("Alguno de los datos no son validos. Por favor, verificalos y volve a enviar el formulario")
        usuario = prompt("ingrese su usuario").toLowerCase()
        password = parseInt(prompt("ingrese contraseña:"))

        contadorUsuario++

    }
   

inicioSesion()