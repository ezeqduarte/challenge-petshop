let $container_cards = document.getElementById("contenedor_cards")

async function getData() {
    
    try {
    
        let data = await fetch("https://apipetshop.herokuapp.com/api/articulos")
        data = await data.json()
        
        let infoApi = data.response

        let articles = infoApi.filter(article=> article.tipo === "Medicamento") 
        let articlesOrdernados = [...articles].sort((a,b)=> a.stock - b.stock)
        console.log(articlesOrdernados);

        imprimirArticulos($container_cards, articles)
        let filtroMedicamento = filterByText($container_cards, articles);
        imprimirArticulos($container_cards, filtroMedicamento);

        let filtroJugueteRango = filterByRange($container_cards,articles)
        imprimirArticulos($container_cards, filtroJugueteRango);
    } catch (error) {
        
        console.log(error);

    }

}


const inputSearch = document.getElementById("js-search");
inputSearch.addEventListener("input", getData);

function filterByText(contenedor,medicamento) {
  let filterMedicamento = medicamento.filter((medicamento) =>
    medicamento.nombre.toLowerCase().includes(inputSearch.value.toLowerCase())
  );
  console.log(inputSearch.value);
  if (inputSearch.value === 0) {
    return medicamento;
  } else {
    contenedor.innerHTML = ` `;
    return filterMedicamento;
  }
}

const inputRangeMin = document.getElementById("customRangeMin")
const inputRangeMax = document.getElementById("customRangeMax")
inputRangeMin.addEventListener("input",getData)
inputRangeMax.addEventListener("input",getData)


function filterByRange(contenedor,medicamentos) {
    let filterMedicamentos = medicamentos.filter((medicamento) =>
    (medicamento.precio>= Number(inputRangeMin.value) &&  medicamento.precio <=Number(inputRangeMax.value)));
    if (inputSearch.value === 0) {
      return medicamentos;
    } else {
      contenedor.innerHTML = ` `;
      return filterMedicamentos;
    }
  }


function imprimirArticulos(contenedor, array) {
       
    for (const objeto of array) {
        if (objeto.stock<5) {
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
                        <a href="#" class="btn btn-primary">Agregar al carrito</a>
                    </div>
        </article>
        
        `
        } else {
            contenedor.innerHTML += `
        
            <article class="card d-flex flex-column align-items-around" style="width: 18rem;">
                <img class="card-img-top" src="${objeto.imagen}" alt="${objeto.nombre}">
                <div class="card-body d-flex flex-column align-items-around justify-content-center">                
                        <h5 class="card-title text-center">${objeto.nombre}</h5>
                        <h5 class="card-title text-center">$${objeto.precio}</h5>                
                        </div>
                        <div class="botones d-flex mb-3 flex-row justify-content-evenly">
                            <a href="#" class="btn btn-primary">Detalles</a>
                            <a href="#" class="btn btn-primary">Agregar al carrito</a>
                        </div>
            </article>
            
            `

        }
    }

}

getData()