export function configurarEventos(
    botonBuscar,
    inputBusqueda,
    listaPersonajes,
    limpiarResultadosBusqueda,
    renderizarPersonajes,
    botonlimpiar, //kevin
    contenedorresultados,
    contenedorfavoritos,
    guardarenfavoritos,
    eliminardefavoritos
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
        });

        renderizarPersonajes(personajesEncontrados);
        if (botonlimpiar) {
            botonlimpiar.addEventListener('click', () => {
                inputBusqueda.value = '';
                limpiarResultadosBusqueda();
            });
        }
        if (contenedorresultados) {
            contenedorresultados.addEventListener('click', (event) => {
                const elementoClickeado = event.target;
                
                
        if (elementoClickeado.classList.contains('btn-favorito')) {
            if (guardarenfavoritos) {
                guardarenfavoritos(elementoClickeado.dataset.id);
            }
        }
    });
  }

  if (contenedorfavoritos) {
    contenedorfavoritos.addEventListener('click', (event) => {
      const elementoClickeado = event.target;

      if (elementoClickeado.classList.contains('btn-eliminar')) {
        if (eliminardefavoritos) {
          eliminardefavoritos(elementoClickeado.dataset.id);
        }
      }
    });
  }
}