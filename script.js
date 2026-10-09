const URL_API = "https://pokeapi.co/api/v2/pokemon";

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
