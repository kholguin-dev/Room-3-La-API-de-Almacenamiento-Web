const URL_API = "https://pokeapi.co/api/v2/pokemon";

// se obtiene todos los pokemones
export async function buscarPokemon() {
  try {
    const response = await fetch(URL_API);

    if (!response.ok) {
      throw new Error("Error al conectar con la API");
    }

    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

// Funcion para buscar un unico personaje por su nombre
export async function buscarPorNombre(nombre) {
  try {
    // encodeURIComponent limpia espacios o caracteres especiales en la URL
    const nombreLimpio = encodeURIComponent(nombre.toLowerCase().trim());
    const response = await fetch(`${URL_API}/${nombreLimpio}`);

    if (!response.ok) {
      throw new Error(`Pokemon "${nombre}" no encontrado`);
    }
    const pokemon = await response.json();
    return pokemon;
  } catch (error) {
    console.log("Error al buscar el Pokemon: ", error.message);
    return null;
  }
}
