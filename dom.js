export function crearTarjetaPokemon(pokemon) {
    const tarjeta = document.createElement('div');
    tarjeta.classList.add('pokemon-tarjeta');
    const imagen = document.createElement('img');
    const urlImagen = pokemon.sprites?.front_default || 'https://placeholder.com';
    imagen.setAttribute('src', urlImagen);
    imagen.setAttribute('alt', `Imagen de ${pokemon.name}`);
    imagen.classList.add('pokemon-imagen');

    const nombre = document.createElement('p');
    nombre.classList.add('nombre');
    nombre.textContent = pokemon.name.toUpperCase(); 

    const statAtaque = pokemon.stats.find(s => s.stat.name === 'attack')?.base_stat || 0;
    const statDefensa = pokemon.stats.find(s => s.stat.name === 'defense')?.base_stat || 0;

    const ataque = document.createElement('p');
    ataque.classList.add('ataque');
    ataque.textContent = `Ataque: ${statAtaque}`;

    const defensa = document.createElement('p');
    defensa.classList.add('defensa');
    defensa.textContent = `Defensa: ${statDefensa}`;

    const botonFavorito = document.createElement('button');
    botonFavorito.classList.add('btn-favorito');
    botonFavorito.textContent = 'Agregar a favoritos';
    botonFavorito.dataset.pokemon = JSON.stringify(pokemon); 

    const botonEliminar = document.createElement('button');
    botonEliminar.classList.add('btn-eliminar');
    botonEliminar.textContent = 'Eliminar';
    tarjeta.append(imagen, nombre, ataque, defensa, botonFavorito, botonEliminar);
    return tarjeta;
}