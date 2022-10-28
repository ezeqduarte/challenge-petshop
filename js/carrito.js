import { Carro } from './carro.js'
let oCarro = new Carro();
let carro = JSON.parse(localStorage.getItem('carro'));
let container_cards = document.getElementById("contenedor_cards");
let $maincarrito = document.getElementById("main_carrito")


imprimirArticulos(container_cards, carro);

let btn_carro = document.querySelectorAll(`[class^="material-icons delet"]`);







function imprimirArticulos(contenedor, array) {

    if (carro === null) {

        contenedor.innerHTML = ` <h2>Tu carrito esta vacio, en la tienda podes encontrar nuestros productos.</h2>`
        return
    }

    if (carro) {

        for (const objeto of array) {
            if (objeto.stock < 5) {
                contenedor.innerHTML += `
           
                 
                 
                         <div class="d-flex card-carrito justify-content-evenly align-items-center flex-column flex-md-row" style="position: relative;">
                         
                             <div style="position: absolute; top: 10px; right: 10px;">
                                 <button class="btn-borrar px-0 d-flex justify-content-center align-items-center rounded-circle">
                                 <i class="material-icons delet" id ="${objeto.nombre}">clear</i>
                                 <button class="eliminar-carro btn-borrar rounded-circle d-flex justify-content-center align-items-center" id ="${objeto.nombre}"> <i class="material-icons" id ="${objeto.nombre}">remove</i></button>
                                 </button>
                                 </div>
                                 <p style="position: absolute; top: 10px; left: 30px;" class="py-0 bg-secondary text-white btn-borrar px-2 rounded">Ultimas en stock</p>
                             <div>
                                 <img src="${objeto.imagen}" style="width: 200px ;" alt="${objeto.nombre}">
                             </div>
                             <div class="d-flex flex-column gap-3 flex-grow-1">
                                 <h2 class="w-100 text-center">${objeto.nombre}</h2>
                                 <p class="w-100 text-center">Cantidad añadida al carrito: ${objeto.encarro}</p>
                                 <p class="w-100 text-center">Precio unitario: $ ${objeto.precio} </p>
                                 <p class="w-100 text-center">Precio total: $ ${objeto.precio * objeto.encarro}</p>
                             </div>                        
                         </div>
                     
               
               `;
            } else {
                contenedor.innerHTML += `
           
                
                 
                 <div class="d-flex card-carrito justify-content-evenly align-items-center flex-column flex-md-row" style="position: relative;">
                 
                 <div style="position: absolute; top: 10px; right: 10px;">
                 <button class="btn-borrar px-0 d-flex justify-content-center align-items-center rounded-circle">
                 <i class="material-icons delet" id ="${objeto.nombre}">clear</i>
                 <button class="eliminar-carro btn-borrar rounded-circle d-flex justify-content-center align-items-center" id ="${objeto.nombre}"> <i class="material-icons" id ="${objeto.nombre}">remove</i></button>
                 </button>
                 </div>                       
                     <div>
                         <img src="${objeto.imagen}" style="width: 200px ;" alt="${objeto.nombre}">
                     </div>
                     <div class="d-flex flex-column gap-3 flex-grow-1">
                         <h2 class="w-100 text-center">${objeto.nombre}</h2>
                         <p class="w-100 text-center">Cantidad añadida al carrito: ${objeto.encarro}</p>
                         <p class="w-100 text-center">Precio unitario: $ ${objeto.precio} </p>
                         <p class="w-100 text-center">Precio total: $ ${objeto.precio * objeto.encarro}</p>
                     </div>                        
                 </div>
           
               
               `;
            }
        }

        $maincarrito.innerHTML += ` 
         <div class="py-4">
             <button id="limpiarcarro" class="btn-limpiar rounded p-2 my-5 mx-5"">Limpiar carrito</button>
             <button id="comprarcarro" class="btn-comprar rounded p-2 my-5 mx-5">Realizar compra</button>
         </div> `
        return
    }


}


let $btnCompra = document.getElementById("comprarcarro")
let $btnLimpiar = document.getElementById("limpiarcarro")

$btnCompra.addEventListener("click", realizarCompra)
$btnLimpiar.addEventListener("click", limpiarCarro)



function realizarCompra() {

    $maincarrito.innerHTML = ""
    $maincarrito.innerHTML += `
    <div class="dflex justify-content-start w-100">
        <h2 class="my-5 mx-5 "><span class="primario" >| </span>Estas a punto de finalizar tu compra</h2>
    </div>
    <div class="d-flex justify-content-start align-items-center flex-grow-1">
        <h2>Tu carrito esta vacio, en la tienda podes encontrar nuestros productos.</h2>
    </div>`
    localStorage.removeItem("carro")
    swal(`Su compra fue realizada con exito`, 'Gracias por confiar en nosotros', 'success');

}





function limpiarCarro() {



    $maincarrito.innerHTML = ""
    $maincarrito.innerHTML += `
    <div class="dflex justify-content-start w-100">
        <h2 class="my-5 mx-5 "><span class="primario" >| </span>Estas a punto de finalizar tu compra</h2>
    </div>
    <div class="d-flex justify-content-start align-items-center flex-grow-1">
        <h2>Tu carrito esta vacio, en la tienda podes encontrar nuestros productos.</h2>
    </div>`

    localStorage.removeItem("carro")
    swal('Limpiaste el carro con exito', 'Vuelve a la seccion de compras para recargarlo', 'success');

}



function FilterByname(data, string) {
    return data.filter(data => data.nombre.toLowerCase().trim().includes(string.toLowerCase().trim()));
}

btn_carro.forEach(e => e.addEventListener("click", () => {
    console.dir(e.id);
    oCarro.borrarProducto(FilterByname(carro, e.id));

}));
let btn_eliminar = document.querySelectorAll(`[class^="eliminar-carro"]`);
console.dir(btn_eliminar);

btn_eliminar.forEach(e => e.addEventListener("click", () => {
    
    console.dir(e.id);
    oCarro.eliminarCarro(FilterByname(carro, e.id));

}));