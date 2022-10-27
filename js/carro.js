export class Carro {

    constructor() {

    }


    agregaCarro(producto) {

        let carro = JSON.parse(localStorage.getItem('carro'));
        if (carro) {
            console.log("en la funcion");
            if (carro.length === 0) {
                console.log("adding string");
                Object.assign(...producto, { "encarro": 1 });
                carro.push(...producto);
                localStorage.setItem("carro", JSON.stringify(carro));
                return;
            }
            carro.forEach((e, i) => {
                if (carro.some(element => element.nombre === producto[0].nombre)) {

                    if (carro[i].encarro >= producto[0].stock) {
                        console.log("lo enconrto al max");
                        swal("No quedan mas articulos en stock", "Por cualquier inconveniente contactese con nosotros", "error");
                      
                        return;
                    }
                    else if (e.nombre === producto[0].nombre) {
                        carro[i].encarro += 1;
                        console.log("incrasing");
                        localStorage.setItem("carro", JSON.stringify(carro));
                        return;

                    }
                }
                else {
                    console.dir(...producto);
                    console.log("agregando uno nuevo porq es diferente");
                    Object.assign(...producto, { "encarro": 1 });
                    carro.push(...producto);
                    localStorage.setItem("carro", JSON.stringify(carro));
                    return;

                }
            });


        }
        else {
            let carro = [];
            carro.push(Object.assign(...producto, { "encarro": 1 }));
            localStorage.setItem("carro", JSON.stringify(carro));
            console.dir(localStorage.getItem("carro"));
        }

    }


    eliminarCarro(producto) {
        let carro = JSON.parse(localStorage.getItem('carro'));
        if (carro.some(element => element.nombre === producto[0].nombre)) {
            carro.forEach((e, i) => {
                if (e.nombre === producto[0].nombre) {
                    if (e.encarro === 1) {
                        carro.splice(i, 1);
                        localStorage.setItem("carro", JSON.stringify(carro));
                        return;
                    }
                    else {
                        carro[i].encarro -= 1;
                        localStorage.setItem("carro", JSON.stringify(carro));
                        window.location.reload();
                        return;

                    }
                }

            });
        }
        else {
            window.location.reload();
        }
    }

    borrarProducto(producto) {
        let carro = JSON.parse(localStorage.getItem('carro'));
        if (carro.some(element => element.nombre === producto[0].nombre)) {
            carro.forEach((e, i) => {
                if (e.nombre === producto[0].nombre) {
                    carro.splice(i, 1);
                    localStorage.setItem("carro", JSON.stringify(carro));
                    window.location.reload();
                    return;

                }
            });
        }
    }

    incrementarProducto(producto) {
        let carro = JSON.parse(localStorage.getItem('carro'));
        if (carro.some(element => element.nombre === producto[0].nombre)) {
            carro.forEach((e, i) => {
                if (e.nombre === producto[0].nombre) {
                    carro[i].encarro+=1;
                    localStorage.setItem("carro", JSON.stringify(carro));
                    window.location.reload();
                    return;

                }
            });
        }
    }





eraseCarro() {
    localStorage.clear();
}


}