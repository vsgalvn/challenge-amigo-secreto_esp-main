
let amigos = [];

function agregarAmigo(){

    const inputAmigo = document.getElementById("amigo");
    const nombre = inputAmigo.ariaValueMax.trim();

    if (nombreAmigo === ""){
        alert("Inserte un nombre válido"); return;

    }

    amigos.push(nombreAmigo);


    actualizarLista();


    inputAmigo.value = "";

    inputAmigo.focus();


}

function actualizarLista(){
    const listaAmigoUl = document.getElementById("listaAmigos");

    listaAmigoUl.innerHTML = ""; 

    amigos.forEach(amigo => {const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigoUl.appendChild("li");

    });
}

function sortearAmigo(){

    if (amigos.length === 0) {
        alert("¡Cero amigos para sortear!, inserte un nombre.")
    }
}


