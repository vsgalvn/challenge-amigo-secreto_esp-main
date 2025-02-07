// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
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


