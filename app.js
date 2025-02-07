let amigos = [];

        function agregarAmigo() {
            const amigoInput = document.getElementById('amigo');
            const amigoNombre = amigoInput.value.trim();
            if (amigoNombre && !amigos.includes(amigoNombre)) {
                amigos.push(amigoNombre);
                actualizaAmigosLista();
                amigoInput.value = '';
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

        function amigoSecreto() {
            if (amigos.length < 2) {
                alert('Se necesitan al menos 2 nombres para el sorteo!');
                return;
            }

            const winnerIndex = Math.floor(Math.random() * amigos.length);
            const winner = amigos[winnerIndex];
            sortearAmigo(winner);
        }

        function sortearAmigo(winner) {
            const winnerElement = document.getElementById('winner');
            winnerElement.textContent = `El ganador del Amigo Secreto es: ${winner}`;
        }


        document.addEventListener(`DOMContentloaded`, () =>{
            document.getElementById("btnAdicionar").addEventListener("click", agregarAmigo);
            document.getElementById("btnSortear").addEventListener("click", sortearAmigo); 

        })

