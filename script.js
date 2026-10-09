const URL_API = 'https://thesimpsonsapi.com/api/characters';

export async function buscarPersonaje() {
    try {
        const response = await fetch(URL_API);

        if (!response.ok) {
            throw new Error('Error al conectar con la API');
        }

        const data = await response.json();

        console.log(data);

        return data;

    } catch (error) {
        console.log(error);
        return null;
    }
}

