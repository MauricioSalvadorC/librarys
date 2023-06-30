/////////////funciones varias//////////////////////


///////////////para addStyless a las hijas de una etiqueta///////////////////

        //EJEMPLO-USO
// var estilosPersonalizados = {
//     backgroundColor: "yellow",
//     color: "green",
//     fontWeight: "bold"
// };

// agregarEstilosId("content-mujeres", estilosPersonalizados);
// agregarEstilosClase(".content-mujeres", estilosPersonalizados);
function addStylesId(id, estilos, clase) {
    let divElement = document.getElementById(id);

    if (!divElement) {
        console.error("Elemento con ID '" + id + "' no encontrado.");
        return;
    }
    if (clase) divElement.classList.add(clase);
    if (estilos) {
        for (let propiedad in estilos) {
            if (estilos.hasOwnProperty(propiedad)) {
                divElement.style[propiedad] = estilos[propiedad];
            }else{
                console.log("propiedad: "+propiedad+" No existe");
            }
        }
    }
}
function addStylesClass(id, estilos, clase) {
    let divElements = [...document.querySelectorAll(id)];

    if (!divElements) {
        console.error("Elemento con ID '" + id + "' no encontrado.");
        return;
    }
    if (clase) divElements.forEach(divElement=>{
        divElement.classList.add(clase);
    });
    divElements.forEach(divElement=>{
        if (estilos) {
            for (let propiedad in estilos) {
                if (estilos.hasOwnProperty(propiedad)) {
                    divElement.style[propiedad] = estilos[propiedad];
                }else{
                    console.log("propiedad: "+propiedad+" No existe");
                }
            }
        }
    })
}
function addStylesChildrenId(id, estilos, clase) {
    let divElement = document.getElementById(id);

    if (!divElement) {
        console.error("Elemento con ID '" + id + "' no encontrado.");
        return;
    }

    let elementosHijos = divElement.children;

    for (let i = 0; i < elementosHijos.length; i++) {
        let elemento = elementosHijos[i];

        if (clase) elemento.classList.add(clase);

        if (estilos) {
            for (let propiedad in estilos) {
                if (estilos.hasOwnProperty(propiedad)) {
                    elemento.style[propiedad] = estilos[propiedad];
                }else{
                    console.log("propiedad: "+propiedad+" No existe");
                }
            }
        }
    }
}
function addStylesChildrenClass(id, estilos, clase) {
    let divElements = [...document.querySelectorAll(id)];
    if (!divElements) {
        console.error("Elemento con ID '" + id + "' no encontrado.");
        return;
    }
    for (let i = 0; i < divElements.length; i++) {
        let elementosHijos = divElements[i].children;

        for (let i = 0; i < elementosHijos.length; i++) {
            let elemento = elementosHijos[i];

            if (clase) elemento.classList.add(clase);

            if (estilos) {
                for (let propiedad in estilos) {
                    if (estilos.hasOwnProperty(propiedad)) {
                        elemento.style[propiedad] = estilos[propiedad];
                    }else{
                        console.log("propiedad: "+propiedad+" No existe");
                    }
                }
            }
        }
    }
}