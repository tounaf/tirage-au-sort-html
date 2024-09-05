const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
const resultDiv = document.getElementById('result');
const spinner = document.getElementById('spinner');
const startButton = document.getElementById('startButton');
const spinSound = document.getElementById('spinSound');
const winSound = document.getElementById('winSound');
const fireworksContainer = document.getElementById('fireworks-container');

let fireworks;

function getRandomName() {
    return names[Math.floor(Math.random() * names.length)];
}

function startSpin() {
    spinner.style.display = 'block';
    spinSound.play();
    setTimeout(() => {
        spinner.style.display = 'none';
        const winner = getRandomName();
        resultDiv.textContent = `Le gagnant est ${winner}!`;
        winSound.play();

        // Initialiser et afficher les feux d'artifice
        if (fireworks) fireworks.stop();
        fireworks = new Fireworks(fireworksContainer, {
            rocketsPoint: { min: 0, max: 100 },
            hue: { min: 0, max: 360 },
            delay: { min: 50, max: 100 },
            brightness: { min: 50, max: 80 },
            acceleration: { x: 0.05, y: 1.2 },
            friction: { x: 0.95, y: 0.9 },
            gravity: 1.5,
            particles: 50,
            trace: 3,
            explosion: 5,
        });
        fireworks.start();
    }, 2000); // 2 seconds to match the spinner animation duration
}

startButton.addEventListener('click', startSpin);
