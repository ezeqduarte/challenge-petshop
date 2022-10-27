import { Carro } from './carro.js'
let oCarro = new Carro();
let valueRangeMin;
let valueRangeMax;
let arrayFiltroPorRango;
let btn_carro
let articles
let arrayFiltroPorPalabra;
let $container_cards = document.getElementById("contenedor_cards");

async function getData() {
  try {
    let data = await fetch("https://apipetshop.herokuapp.com/api/articulos");
    data = await data.json();

    let infoApi = data.response;

    articles = [...infoApi].filter((article) => article.tipo === "Juguete").sort((a, b) => a.stock - b.stock);
    let carro = localStorage.getItem('carro')
    console.log(articles);
    console.log(infoApi);

    console.dir(carro);
    imprimirArticulos($container_cards, articles);

    filtrosCruzados($container_cards, articles)

    btn_carro = document.querySelectorAll(`[class^="btn btn-primary"]`);
    console.dir(btn_carro);
  } catch (error) {
    console.log(error);
  }
}

const inputSearch = document.getElementById("js-search");
inputSearch.addEventListener("input", getData);

function filterByText(juguetes) {
  let filterJuguetes = juguetes.filter((juguete) =>
    juguete.nombre.toLowerCase().includes(inputSearch.value.toLowerCase())
  );
  if (inputSearch.value === 0) {
    filterJuguetes = juguetes;
  }
  return filterJuguetes;
}

const inputRangeMin = document.getElementById("customRangeMin")
const inputRangeMax = document.getElementById("customRangeMax")
inputRangeMin.addEventListener("input", getData)
inputRangeMax.addEventListener("input", getData)



function filterByRange(juguetes) {
  let filterJuguetes = juguetes.filter((juguete) =>
    (juguete.precio >= Number(inputRangeMin.value) && juguete.precio <= Number(inputRangeMax.value)));
  return filterJuguetes;
}


function filtrosCruzados(contenedor, articles) {
  arrayFiltroPorRango = filterByRange(articles)
  arrayFiltroPorPalabra = filterByText(arrayFiltroPorRango)

  if (arrayFiltroPorPalabra.length === 0) {
    contenedor.innerHTML = `<h2 class="text-black">No se encontro ningun juguete</h2>`;
  } else {
    contenedor.innerHTML = ``;
    imprimirArticulos(contenedor, arrayFiltroPorPalabra);
  }
  actulizarValueRange()
}
valueRangeMin = document.getElementById("valueRangeMin")
valueRangeMax = document.getElementById("valueRangeMax")

function actulizarValueRange() {
  valueRangeMin.innerHTML = `$ ${Number(inputRangeMin.value)}`
  valueRangeMax.innerHTML = `$ ${Number(inputRangeMax.value)}`

}

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
                    <a    class="btn btn-primary"  id="${objeto.nombre}" username="${objeto.precio}"><i class="large material-icons">add_shopping_cart</i></a>
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
                        <a    class="btn btn-primary"  id="${objeto.nombre}" username="${objeto.precio}"><i class="large material-icons">add_shopping_cart</i></a>
                       
                    </div>
        </article>
        
        `;
    }
  }
}

getData();


function FilterByname(data, string) {
  return data.filter(data => data.nombre.toLowerCase().trim().includes(string.toLowerCase().trim()));
}


setTimeout(() => {
  btn_carro.forEach(e => e.addEventListener("click", () => {
    console.dir(e.id);
    oCarro.agregaCarro(FilterByname(articles, e.id));

  }));

}, 1000);


