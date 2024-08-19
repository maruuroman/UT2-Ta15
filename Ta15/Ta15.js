const boton = document.getElementById("añadirElemento");
const input = document.getElementById("texto");
const lista = document.getElementById("lista");
const botonEliminar = document.getElementById("eliminarÚltimoElemento");


boton.addEventListener("click", function() {
    const texto = input.value;

    if (texto !== "") {
        
        const nuevoElemento = document.createElement("li");

        nuevoElemento.textContent = texto; 

        lista.appendChild(nuevoElemento);

        input.value ="";


    }
});

botonEliminar.addEventListener("click", function(){
    if (lista.lastChild) {
        lista.removeChild(lista.lastChild);
    }
});