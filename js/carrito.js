import { Carro } from './carro.js'
let oCarro = new Carro();
let carro = JSON.parse(localStorage.getItem('carro'));
let container_cards = document.getElementById("contenedor_cards");
imprimirArticulos(container_cards,carro);



function imprimirArticulos(contenedor, array) {
    for (const objeto of array) {
        if (objeto.stock < 5) {
            contenedor.innerHTML += `
      
      <article class="card d-flex flex-column align-items-around" style="width: 18rem;">
      <p class="barraStock text-center bg-danger text-white">Queda(n) ${objeto.stock} en stock</p>
          <img class="card-img-top" src="${objeto.imagen}" alt="${objeto.nombre}">
          <div class="card-body d-flex flex-column align-items-around justify-content-center">                
                  <h5 class="card-title text-center">${objeto.nombre}</h5>
                  <h5 class="card-title text-center">$${objeto.precio}</h5>                
                  </div>
                  <div class="botones d-flex mb-3 flex-row justify-content-evenly">
                      <a href="#" class="btn btn-primary">Detalles</a>
                      <a  class="btn btn-primary" id="${objeto.nombre}" name="${objeto.precio}" >Agregar al carrito</a>
                  </div>
      </article>
      
      `;
        } else {
            contenedor.innerHTML += `
      
          <article class="card d-flex flex-column align-items-around" style="width: 18rem;">
              <img class="card-img-top" src="${objeto.imagen}" alt="${objeto.nombre}">
              <div class="card-body d-flex flex-column align-items-around justify-content-center">                
                      <h5 class="card-title text-center">${objeto.nombre}</h5>
                      <h5 class="card-title text-center">$${objeto.precio}</h5>                
                      </div>
                      <div class="botones d-flex mb-3 flex-row justify-content-evenly">
                          <a href="./detalles.html" class="btn btn-primary">Detalles</a>
                          <a    class="btn btn-primary"  id="${objeto.nombre}" username="${objeto.precio}">Agregar al carrito</a>
                      </div>
          </article>
          
          `;
        }
    }
}