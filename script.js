(function() {
    const endTime = new Date('2024-12-31T23:59:59-05:00').getTime(); // Hora de Perú (UTC-5)
    //const endTime = new Date('2024-12-31T12:03:59-05:00').getTime(); // Hora de Perú (UTC-5)

    function updateCountdown() {
        const now = new Date().getTime();
        const timeLeft = endTime - now;

        if (timeLeft <= 0) {
            // Crear la bomba y añadirla al body
            const bomb = document.createElement('div');
            bomb.classList.add('bomb');
            document.body.appendChild(bomb);

            // Iniciar la animación de la bomba
            bomb.classList.add('grow-explode');

            const explosion = document.createElement('div');
            explosion.classList.add('explosion');
            document.body.appendChild(explosion);

            // Iniciar la animación de la explosión gigante
            setTimeout(function() {
                explosion.classList.add('explosion-effect');
            }, 1000);

            // Redirigir después de la animación
            setTimeout(function() {
                window.location.href = 'felizanionuevo.html';
            }, 5000); // Esperar 5 segundos para que la animación de la bomba termine

            clearInterval(interval);
            return;
        }

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById('days').textContent = String(days).padStart(2, '0');
        document.getElementById('hours').textContent = String(hours).padStart(2, '0');
        document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
        document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    }

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();
})();

document.addEventListener("DOMContentLoaded", function() {
    const confettiContainer = document.getElementById('confetti-container');
    const colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3']; // Colores del arcoiris
    const confettiCount = 2; // Cantidad de confetis generados en cada intervalo

    function createConfetti() {
        for (let i = 0; i < confettiCount; i++) {
            let confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.width = Math.random() * 10 + 5 + 'px';
            confetti.style.height = confetti.style.width;
            confetti.style.left = Math.random() * window.innerWidth + 'px';
            confetti.style.top = Math.random() * -100 + 'px'; // Empezar fuera de la vista, en la parte superior
            confettiContainer.appendChild(confetti);

            // Animación
            const keyframes = [
                { transform: `translate3d(0, 0, 0) rotate3d(1, 1, 1, ${Math.random() * 360}deg)` },
                { transform: `translate3d(${Math.random() * 300 - 150}px, ${window.innerHeight + 100}px, ${Math.random() * 200 - 100}px) rotate3d(1, 1, 1, ${Math.random() * 360}deg)` }
            ];

            confetti.animate(keyframes, {
                duration: 3000, // Duración de cada ciclo (3 segundos)
                iterations: 6,  // Número de repeticiones para completar 18 segundos
                easing: 'ease-out'
            });
        }
    }

    // Crear confetis iniciales
    createConfetti();

    // Generar nuevos confetis constantemente
    const interval = setInterval(createConfetti, 300); // Crear nuevos confetis cada 300 milisegundos
});

const audio = document.getElementById('audio-fast');
    audio.volume = 0.4;