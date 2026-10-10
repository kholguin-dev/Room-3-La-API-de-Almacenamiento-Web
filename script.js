const URL_API = 'https://pokeapi.co/api/v2/pokemon'; /// Creamos variable con url de la APi
// en este caso se consulta a la url /pokemon que contiene todos


///funcion que busca la url de cada pokemon dandole parametro nombre
export async function obtenerPokemon(nombre) { // funcion asincrona para llamar api con fetch y await
    //bloque try para manejo de errores
    try {
        const response = await fetch(`${URL_API}/${nombre}`);  //contenemos la varianle nombre que fue dada a al funcion como parametro
        // y devolvemos un URL con el nombre 
        //comprobamos con response.ok si la respuesta esta  entre 200 y 299
        if (!response.ok) { // si no esta en ese rango 
            throw new Error('Pokémon no encontrado'); // creamos un objeto error con ese mensaje
        }

        ///respuesta
        const data = await response.json(); //se crea variable data que tiene la respuesta y la convierte de JSON  a calores de Js ("" , '' )

        // mediante find buscamos ataque y defensa y accedemos  a su valor que esta en base_stat
        return {  //retornamos un objeto, propiedades que saldran en la tarjeta
            nombre: data.name,
            imagen: data.sprites.front_default,
            ataque: data.stats.find(elementoBuscar => elementoBuscar.stat.name === 'attack').base_stat, //ataque
            defensa: data.stats.find(elementoBuscar => elementoBuscar.stat.name === 'defense').base_stat // defensa
        };
        // se captura el error
    } catch (error) {
        console.log(error);
        return null;
    }
}

export async function obtenerListaPokemon() {
    try {

        //taermos la url, esta configurada por defecto seun la documentacion
        //para traer solo 20 elementos
        const response = await fetch(URL_API);


        if (!response.ok) {
            throw new Error('Error al conectar con la API');
        }

        const data = await response.json();
        const pokemones = [];  //creamos array para gaurdar los pokemones

        for (const pokemon of data.results) { //recorremos el array results es como la APi entrega 
            const nombreBuscado = await obtenerPokemon(pokemon.name); 
            pokemones.push(nombreBuscado);
        }

        return pokemones;

    } catch (error) {
        console.log(error);
        return [];
    }
}