import { Carro } from './carro.js'
let oCarro = new Carro();
let carro = JSON.parse(localStorage.getItem('carro'));
let container_cards = document.getElementById("contenedor_cards");
imprimirArticulos(container_cards,carro);
let btn_carro = document.querySelectorAll(`[class^="btn eliminar"]`);


function imprimirArticulos(contenedor, array) {
    for (const objeto of array) {
        if (objeto.stock < 5) {
            contenedor.innerHTML += `
            <div class="tarjeta">
            <div class="contenido">
                <div class="ladoIzq d-flex justify-content-center align-items-center flex-column">
                <h2 class="titulo text-center">"${objeto.nombre}"</h2>
                <div class="cuerpo">
                <p class="text-center">Este es un texto que pretende describir o presentar el artículo, la información o los datos que queramos presentar.</p>
                <div class="d-flex justify-content-evenly">
                      <button class="btn eliminar" id="${objeto.nombre}">Eliminar del carrito</button>
                      <a class="btn" href="index.html">Volver al inicio</a>
                
                      </div>
                      <div class="d-flex justify-content-center text-center">
      <p class="barraStock barrastockCarrito text-white mt-5 text-center">Queda(n) ${objeto.stock} en stock</p>
</div>
            </div>
             </div>
              <div class="ladoDer">
                 <img src="${objeto.imagen}" alt="${objeto.nombre}"/></div>
              </div>

          </div>
          
      
      `;
        } else {
            contenedor.innerHTML += `
      
            <div class="tarjeta">
            <div class="contenido">
                <div class="ladoIzq d-flex justify-content-center align-items-center flex-column">
                <h2 class="titulo text-center">"${objeto.nombre}"</h2>
                <div class="cuerpo">
                <p class="text-center">Este es un texto que pretende describir o presentar el artículo, la información o los datos que queramos presentar.</p>
                <div class="d-flex justify-content-evenly">
                      <button class="btn eliminar" id="${objeto.nombre}">Eliminar del carrito</button>
                      <a class="btn" href="index.html">Volver al inicio</a>
                </div>
            </div>
             </div>
              <div class="ladoDer">
                 <img src="${objeto.imagen}" alt="${objeto.nombre}"/></div>
              </div>
          </div>
          
          `;
        }
    }
}


function FilterByname(data, string) {
    return data.filter(data => data.nombre.toLowerCase().trim().includes(string.toLowerCase().trim()));
  }

  btn_carro.forEach(e => e.addEventListener("click", () => {
    console.dir(e.id);
    oCarro.eliminarCarro(FilterByname(carro, e.id));

  }));

