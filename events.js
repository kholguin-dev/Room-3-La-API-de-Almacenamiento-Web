export function configurarEventos(
    botonBuscar,
    inputBusqueda,
    listaPersonajes,
    limpiarResultadosBusqueda,
    renderizarPersonajes
) {

    botonBuscar.addEventListener('click', () => {

        const textoBuscado = inputBusqueda.value;

        console.log("1. Botón funciona");
        console.log("2. Texto:", textoBuscado);
        console.log("3. Lista:", listaPersonajes);

        const personajesEncontrados = listaPersonajes.filter(personaje =>
            personaje.name.toLowerCase().includes(textoBuscado.toLowerCase())
        );
            
        console.log("4. Encontrados:", personajesEncontrados);

        limpiarResultadosBusqueda();

        renderizarPersonajes(personajesEncontrados);
    });
}   