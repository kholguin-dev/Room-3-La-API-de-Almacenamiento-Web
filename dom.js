
import { obtenerPokemon, obtenerListaPokemon } from './script.js';

const input = document.getElementById('inputPokemon');
const btnBuscar = document.getElementById('btnBuscar');
const btnLimpiar = document.getElementById('btnLimpiar');

const resultado = document.getElementById('resultadoBusqueda');
const lista = document.getElementById('listaPokemones');
const mensaje = document.getElementById('mensajeError');

// Crear una tarjeta
function crearTarjeta(pokemon) {
    return `
        <div class="pokemon-tarjeta">
            <img src="${pokemon.imagen}" alt="${pokemon.nombre}">
            <h3>${pokemon.nombre.toUpperCase()}</h3>
            <p>Ataque: ${pokemon.ataque}</p>
            <p>Defensa: ${pokemon.defensa}</p>
        </div>
    `;
}

// Mostrar los 20 primeros al cargar la pagina
async function iniciar() {
    const pokemones = await obtenerListaPokemon();

    for (const pokemon of pokemones) {
        lista.innerHTML = lista.innerHTML + crearTarjeta(pokemon);
    }
}

// Buscar un Pokémon por nombre
btnBuscar.addEventListener('click', async () => {
    const nombre = input.value.toLowerCase(); // para q busque sin improtat MAYUS

    resultado.innerHTML = '';
    mensaje.textContent = '';
    const pokemon = await obtenerPokemon(nombre);
    if (pokemon === null) {
        mensaje.textContent = 'Pokémon no encontrado';
        return;
    }
    resultado.innerHTML = crearTarjeta(pokemon);
});

// Limpiar la búsqueda
btnLimpiar.addEventListener('click', () => {
    input.value = '';
    resultado.innerHTML = '';
    mensaje.textContent = '';
});

iniciar();
