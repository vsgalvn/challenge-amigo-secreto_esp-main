let amigos = [];

        function agregarAmigo() {
            const amigoInput = document.getElementById('amigo');
            const amigoNombre = amigoInput.value.trim();
            if (amigoNombre && !amigos.includes(amigoNombre)) {
                amigos.push(amigoNombre);
                actualizaAmigosLista();
                amigoInput.value = '';
                amigoInput.focus();
            } else {
                alert('Nombre inválido o ya añadido');
            }
        }

        function actualizaAmigosLista() {
            const amigosLista = document.getElementById('amigosLista');
            amigosLista.innerHTML = '';
            amigos.forEach(amigo => {
                const li = document.createElement('li');
                li.textContent = amigo;
                amigosLista.appendChild(li);
            });
        }

        function sortearAmigo() {
            if (amigos.length < 2) {
                alert('Se necesitan al menos 2 nombres para el sorteo!');
                return;
            }

            const indiceAleatorio = Math.floor(Math.random() * amigos.length);
            const amigoSorteado = amigos[indiceAleatorio];
            
            const resultadoUl = document.getElementById("resultado");

            resultadoUl.innerHTML = `El ganador del Amigo Secreto es: ${amigoSorteado}`;

        
        }


        document.addEventListener(`DOMContentloaded`, () =>{
            document.getElementById("button-add").addEventListener("click", agregarAmigo);
            document.getElementById("button-draw").addEventListener("click", sortearAmigo);

        })

