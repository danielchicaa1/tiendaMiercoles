import {productos} from "../helpers/baseDatos.js"
import {pintarProductos} from "../helpers/pintarProductos.js"   

//Llamando a la fila
let fila = document.getElementById("fila")

//Pintar los productos de la tienda
pintarProductos(productos)

//Escuchando  clic en la fila contenedora  de productos
fila.addEventListener("click",function(evento){
    
    
    let tarjeta=evento.target.parentElement
    let datosProductoSeleccionado={}
    datosProductoSeleccionado.foto=tarjeta.querySelector("img").src
    datosProductoSeleccionado.nombre=tarjeta.querySelector("h3").textContent
    datosProductoSeleccionado.precio=tarjeta.querySelector("h5").textContent
    datosProductoSeleccionado.descripcion=tarjeta.querySelector("descripcion").textContent
    datosProductoSeleccionado.precioOculto=tarjeta.querySelector("h1").textContent

    //usaremos la memoria del pc para guardar esta info
    localStorage.setItem("producto",JSON.stringify(datosProductoSeleccionado))
    window.location.href="./src/views/ampliarinfo.html"
})

window.addEventListener("scroll", () => {
    let menu = document.querySelector(".menu")
    if (document.documentElement.scrollTop > 30 ) {
        menu.classList.add("fixed-top")
    } else {
        menu.classList.remove("fixed-top")
    }
})