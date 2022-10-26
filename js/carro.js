export class Carro {

    constructor() {

    }


    agregaCarro(producto) {
        let carro =  JSON.parse(localStorage.getItem('carro'));
        if (carro) {
        console.dir(carro);
          /*   console.log("en la funcion");
            if (carro.length === 0) {
                console.log("adding string");
                Object.assign(...producto, { "encarro": 1 });
                carro.push(...producto);
                localStorage.setItem("carro", JSON.stringify(carro));
                return;
            } */
            
            console.dir(carro);
            carro.forEach((e, i) => {
                console.log("carro problem")
                if (carro.some(element=> element.nombre === producto[0].nombre )) {
                   
                    if (carro[i].encarro >= producto[0].stock) {
                        console.log("lo enconrto al max");
                        alert("ha superado el stock maximo :C");
                        return;
                    }
                    else if(e.nombre === producto[0].nombre  ) {
                        carro[i].encarro += 1;
                        console.log("incrasing");
                        localStorage.setItem("carro", JSON.stringify(carro));
                        return;

                    }
                }
                else {
                    console.log("agregando uno nuevo porq es diferente");
                    Object.assign(...producto, { "encarro": 1 });
                    carro.push(...producto);
                    localStorage.setItem("carro", JSON.stringify(carro));
                    return;

                }
            });


        }
        else {
            let carro =[];
            carro.push(Object.assign(...producto, { "encarro": 1 }));
            localStorage.setItem("carro", JSON.stringify(carro));
            console.dir(localStorage.getItem("carro"));
        }

    }


    eliminarCarro(producto) {
        let carro = localStorage.getItem('carro')
        if (carro) {
            carro.forEach((e, i) => {
                if (e.nombre === producto[0].nombre ) {
                    if (e.encarro === 1) {
                        carro[i].splice(i, 1);
                        localStorage.setItem("carro", JSON.stringify(carro));
                        return;
                    }
                    else {
                        carro[i].encarro--;
                        localStorage.setItem("carro", JSON.stringify(carro));
                    }
                }
                else {
                    alert("Producto no esta en carro");
                }
            });
        }


    }

    eraseCarro() {
        localStorage.clear();
    }
}