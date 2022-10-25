let $container_cards = document.getElementById("contenedor_cards")

async function getData() {
    
    try {
    
        let data = await fetch("https://apipetshop.herokuapp.com/api/articulos")
        data = await data.json()
        
        let infoApi = data.response

        let articles = infoApi.filter(article=> article.tipo === "Juguete") 
        console.log(articles);

        imprimirArticulos($container_cards, articles)

    } catch (error) {
        
        console.log(error);

    }

}

function imprimirArticulos(contenedor, array) {
       
    for (const objeto of array) {
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

getData()