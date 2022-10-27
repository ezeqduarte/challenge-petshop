import { Carro } from './carro.js'
let oCarro = new Carro();
let carro = JSON.parse(localStorage.getItem('carro'));
let container_cards = document.getElementById("contenedor_cards");
let $maincarrito = document.getElementById("main_carrito")


imprimirArticulos(container_cards,carro);

let btn_carro = document.querySelectorAll(`[class^="btn eliminar"]`);







function imprimirArticulos(contenedor, array) {

    if (carro===null) {

        contenedor.innerHTML = ` <h2>Tu carrito esta vacio, en la tienda podes encontrar nuestros productos.</h2>`
        return
    }

    if (carro) {

        for (const objeto of array) {
             if (objeto.stock < 5) {
                contenedor.innerHTML += `
           
                 <div class="d-flex">
                 
                         <div class="d-flex card-carrito justify-content-evenly align-items-center flex-column flex-md-row" style="position: relative;">
                         
                             <div style="position: absolute; top: 10px; right: 10px;">
                                 <button class="py-0 btn-borrar px-2 rounded">
                                    X
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
                                 <p class="w-100 text-center">Precio total: $ ${objeto.precio*objeto.encarro}</p>
                             </div>                        
                         </div>
                     </div>
               
               `;
             } else {
                 contenedor.innerHTML += `
           
                 <div class="d-flex">
                         <div class="d-flex card-carrito justify-content-evenly align-items-center flex-column flex-md-row" style="position: relative;">
                             <div style="position: absolute; top: 10px; right: 10px;">
                                 <button class="py-0 btn-borrar px-2 rounded">
                                    X
                                 </button>
                             </div>
                             <div>
                                 <img src="${objeto.imagen}" style="width: 200px ;" alt="${objeto.nombre}">
                             </div>
                             <div class="d-flex flex-column flex-grow-1">
                                 <h2 class="w-100 text-center">${objeto.nombre}</h2>
                                 <p>Cantidad añadida al carrito: ${objeto.encarro}</p>
                                 <p>Precio total: $ ${objeto.precio*objeto.encarro}</p>
                             </div>                        
                         </div>
                     </div>
               
               `;
             }
         }        
     
         $maincarrito.innerHTML += ` 
         <div class="py-4">
             <button id="limpiarcarro" class="btn-limpiar rounded p-2 mx-5"">Limpiar carrito</button>
             <button id="comprarcarro" class="btn-comprar rounded p-2 mx-5">Realizar compra</button>
         </div> `
         return
    }

    
}


let $btnCompra = document.getElementById("comprarcarro")
let $btnLimpiar = document.getElementById("limpiarcarro")

$btnCompra.addEventListener("click", realizarCompra)
$btnLimpiar.addEventListener("click", limpiarCarro)



function realizarCompra() {      

    swal('Su compra fue realizada con exito', 'Gracias por confiar en nosotros', 'success');

}

function limpiarCarro() {      

    swal('Limpiaste el carro con exito', 'Vuelve a la seccion de compras para recargarlo', 'success');

}

