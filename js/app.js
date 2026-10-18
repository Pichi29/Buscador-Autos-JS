// Selectores
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Contenedor para los resultados
const resultado = document.querySelector('#resultado');

// Crear los años
const max = new Date().getFullYear();
const min = max - 17;

// Objeto para los datos de la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    precio: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: '',
}

// Cargar autos y selesct de years
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos(autos);

    llenarSelect();
});

// EventListener para los select
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value
    console.log(datosBusqueda);

    filtrarAuto();
})

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value)
    console.log(datosBusqueda);

    filtrarAuto();
})

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value
    console.log(datosBusqueda);

    filtrarAuto();
})

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value
    console.log(datosBusqueda);

    filtrarAuto();
})

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = parseInt(e.target.value)
    console.log(datosBusqueda);

    filtrarAuto();
})

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value
    console.log(datosBusqueda);

    filtrarAuto();
})

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value
    console.log(datosBusqueda);

    filtrarAuto();
})

// Funcion mostrar autos
function mostrarAutos(autos) {

    limpiarHTML();

    autos.forEach(auto => {
        const { marca, modelo, year, puertas, transmision, precio, color } = auto
        const autoHTML = document.createElement('p');
        autoHTML.innerHTML = `
                <p>${marca} ${modelo} - ${year} - ${puertas} Puertas - Transmisión: ${transmision} - Precio: ${precio} - Color: ${color}</p>
        `;
        
        resultado.appendChild(autoHTML);
    });

}

// limpiar HTML
function limpiarHTML() {
    while(resultado.firstChild) {
        resultado.removeChild(resultado.firstChild);
    }
}

// Llenar select de los years
function llenarSelect() {
    for(let i = max; i >  min; i--) {
        const option =  document.createElement('option');
        option.value = i;
        option.innerText = i;
        document.querySelector('#year').appendChild(option);
    }
}

// Funcion para filtar
function filtrarAuto() {
    const resultado = autos.filter(filtrarMarca).filter(filtrarYear).filter(filtrarMinimo).filter(filtrarMaximo).filter(filtrarPuertas).filter(filtrarTransmision).filter(filtrarColor)
    
    if(resultado.length) {
        mostrarAutos(resultado);
    } else {
        noResultado();
    }
}

// Funcion para mostrar mensaje de no resultado
function noResultado() {
    limpiarHTML();
    const noResultado = document.createElement('DIV');
    noResultado.classList.add('alerta', 'error');
    noResultado.textContent = 'No hay resultados, intenta con otros terminos de busqueda';
    resultado.appendChild(noResultado);
}

// Funciones de filtrado de cada campo
function filtrarMarca(auto) {
    const { marca } = datosBusqueda;
    if(marca) {
        return auto.marca === marca
    }
    return auto;
}
function filtrarYear(auto) {
    const { year } = datosBusqueda;
    if(year) {
        return auto.year === year
    }
    return auto;
}
function filtrarMinimo(auto) {
    const { minimo } = datosBusqueda;
    if(minimo) {
        return auto.precio >= minimo
    }
    return auto;
}
function filtrarMaximo(auto) {
    const { maximo } = datosBusqueda;
    if(maximo) {
        return auto.precio <= maximo
    }
    return auto;
}
function filtrarPuertas(auto) {
    const { puertas } = datosBusqueda;
    if(puertas) {
        return auto.puertas === puertas
    }
    return auto;
}
function filtrarTransmision(auto) {
    const { transmision } = datosBusqueda;
    if(transmision) {
        return auto.transmision === transmision
    }
    return auto;
}
function filtrarColor(auto) {
    const { color } = datosBusqueda;
    if(color) {
        return auto.color === color
    }
    return auto;
}