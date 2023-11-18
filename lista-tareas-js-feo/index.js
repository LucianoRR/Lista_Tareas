const barraDeTexto = document.getElementById("barra-texto");
const botonCrear = document.getElementById("boton-crear");
const contenedorTareas = document.getElementsByClassName("contenedor-tareas")[0];

const crearTarea = () => {
    let textoTarea = barraDeTexto.value;
    if(textoTarea !== ""){
        let contenido = 
        `<div class="card-tarea pendiente">
            <p class="texto-tarea">${textoTarea}</p>
            <div class="contenedor-botones">
                <button class="boton-tarea-marcar">Marcar</button>
                <button class="boton-tarea-eliminar">Eliminar</button>
            </div>
        </div>`;

        contenedorTareas.innerHTML += contenido;
        barraDeTexto.value="";

        const botones = document.getElementsByClassName("boton-tarea-marcar");
        
        for (const botonMarcar of botones) {  
            botonMarcar.addEventListener("click", (event) => {
                let tareaActual = event.target.parentNode.parentNode;
                tareaActual.className = `card-tarea completada`;
            });
        }

        const botonesEliminar = document.getElementsByClassName("boton-tarea-eliminar");
        
        for (const botonEliminar of botonesEliminar) {  
            botonEliminar.addEventListener("click", (event) => {
                event.target.parentNode.parentNode.remove();
            });
        }
    }
}

botonCrear.addEventListener("click", crearTarea);