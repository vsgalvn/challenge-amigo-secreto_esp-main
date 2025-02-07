let participants = [];

        function addParticipant() {
            const participantInput = document.getElementById('participant');
            const participantName = participantInput.value.trim();
            if (participantName && !participants.includes(participantName)) {
                participants.push(participantName);
                updateParticipantsList();
                participantInput.value = '';
            } else {
                alert('Nombre inválido o ya añadido');
            }
        }

        function updateParticipantsList() {
            const participantsList = document.getElementById('participantsList');
            participantsList.innerHTML = '';
            participants.forEach(participant => {
                const li = document.createElement('li');
                li.textContent = participant;
                participantsList.appendChild(li);
            });
        }

        function amigoSecreto() {
            if (participants.length < 2) {
                alert('Se necesitan al menos 2 participantes para el sorteo');
                return;
            }

            const winnerIndex = Math.floor(Math.random() * participants.length);
            const winner = participants[winnerIndex];
            displayWinner(winner);
        }

        function displayWinner(winner) {
            const winnerElement = document.getElementById('winner');
            winnerElement.textContent = `El ganador del Amigo Secreto es: ${winner}`;
        }


