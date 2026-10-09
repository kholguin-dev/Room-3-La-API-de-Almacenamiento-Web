import { buscarPersonaje } from './script.js';
import { configurarEventos } from './events.js';

const containerTarjeta = document.querySelector('.container-tarjetas');
const containerResultadosBusqueda = document.getElementById('container-tarjetas-busqueda');

const inputBusqueda = document.getElementById('nombre-personaje');
const botonBuscar = document.getElementById('boton-buscar');

function crearHTMLTarjeta(personaje) {
    const frase = personaje.phrases && personaje.phrases.length !== 0
        ? personaje.phrases[0]
        : 'Sin frases!';

    return `
        <div class="simpson-tarjeta">
            <img 
                src="https://cdn.thesimpsonsapi.com/200${personaje.portrait_path}" 
                alt="Imagen de ${personaje.name}" 
                class="simpson-imagen">

            <p class="nombre">${personaje.name}</p>
            <p class="ocupacion">${personaje.occupation || 'Sin ocupación'}</p>
            <p class="frase">${frase}</p>
        </div>
    `;
}

export function renderizarTodosLosPersonajes(listaPersonajes) {
    for (let personaje of listaPersonajes) {
        const tarjeta = document.createElement('div');

        tarjeta.innerHTML = crearHTMLTarjeta(personaje);

        containerTarjeta.append(tarjeta);
    }
}

export function renderizarPersonajes(listaPersonajes) {
    for (let personaje of listaPersonajes) {
        const tarjeta = document.createElement('div');

        tarjeta.innerHTML = crearHTMLTarjeta(personaje).replace(
            'simpson-tarjeta',
            'simpson-tarjeta-busqueda'
        );

        containerResultadosBusqueda.append(tarjeta);
    }
}

export function limpiarResultadosBusqueda() {
    const listaTarjetasDeBusqueda = document.querySelectorAll(
        '.simpson-tarjeta-busqueda'
    );

    listaTarjetasDeBusqueda.forEach(tarjeta => {
        tarjeta.remove();
    });
}


// Get all characters
const data = await buscarPersonaje();

const listaPersonajes = data.results;

// Show all characters
renderizarTodosLosPersonajes(listaPersonajes);

configurarEventos(
    botonBuscar,
    inputBusqueda,
    listaPersonajes,
    limpiarResultadosBusqueda,
    renderizarPersonajes
);