// Llamo a la memoria para acceder a los datos guardados
import {EjecutarApiTasa} from "../helpers/ampliarinfo.js";
import {formateador} from "../helpers/pintarProductos.js";

//Pintar el producto
let infoProducto=JSON.parse(localStorage.getItem("producto"))

let foto=document.getElementById("foto")
foto.src=infoProducto.foto

let titulo=document.getElementById("titulo")
titulo.textContent=infoProducto.nombre

let precio=document.getElementById("precio")
precio.innerHTML=infoProducto.precio

let descripcion=document.getElementById("descripcion")
descripcion.textContent=infoProducto.descripcion



let infocarrito=JSON.parse(localStorage.getItem("carrito"))
let carrito
let pildora=document.getElementById("pildora")
if(infocarrito!=null){
    carrito=infocarrito
    pildora.textContent=carrito.length
}else{
     carrito=[]
}

let botonAgregarProducto=document.getElementById("btnagregarcarrito")


botonAgregarProducto.addEventListener("click",function(){
    carrito.push(infoProducto);
    pildora.textContent=carrito.length
    localStorage.setItem("carrito",JSON.stringify(carrito))
    
})



// convertiendo las monedas
let botonConvertir = document.getElementById("conversor")
botonConvertir.addEventListener("click", async () => await EjecutarApiTasa())

// evitando problemas con el input de cantidad
let cantidad = document.getElementById("cantidad")
cantidad.addEventListener("keydown", (tecla) => {
    let teclasProhibidas = ["e", "-", "+", "*", "/"]
    if (teclasProhibidas.includes(tecla.key)) {
        tecla.preventDefault()
    }
})

//Subtotal
 let Subtotal = document.getElementById("SpanSubtotal")
 cantidad.addEventListener("input", function (){
    let CalcularSubtotal= cantidad.value * infoProducto.precioOculto
    Subtotal.textContent=CalcularSubtotal
    
 })

 let botonEliminarProducto=document.getElementById("btnLimpiarcarrito")
  botonEliminarProducto.addEventListener("click",function(){
    carrito.splice(infoProducto)
    pildora.textContent =carrito.length 
    localStorage.setItem("carrito",JSON.stringify(carrito))
  })
 
 
 





