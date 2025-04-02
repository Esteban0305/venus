const targetDate = new Date('2025-08-07T00:00:00').getTime();  // Fecha objetivo
const departureDate = new Date('2025-03-15T05:30:00').getTime();  // Fecha de partida

const phrases = [
    "Cada segundo es menos tiempo sin ti",
    "Mi Venus, cuento los días para verte",
    "La distancia no apaga este amor infinito",
    "Nuestro reencuentro será el mejor día del año",
    "Mi mundo es más brillante contigo",
    "Cada estrella me recuerda a ti",
    "Eres mi constelación favorita",
    "La espera duele, pero vales cada instante",
    "Te extraño en cada latido",
    "Nuestro amor trasciende el tiempo y la distancia"
]

function setPhrase () {
    const phrase = phrases[Math.floor(Math.random() * phrases.length)];
    document.getElementById('phrase').innerText = phrase;
}

function updateCountdown() {
    const now = new Date().getTime();
    const timeDiff = targetDate - now;
    const seconds = timeDiff / 1000;
    
    document.getElementById('countdown').innerText = `${new Intl.NumberFormat().format(seconds * 29.8)} km`;
    document.getElementById('countdown_timer').innerText = timeDiff > 0 ? `${Math.floor(seconds / 60 / 60 / 24)} días` : '¡Ya llegué!';
    // ${Math.floor(seconds / 60 / 60) % 24}:${Math.floor(seconds / 60) % 60}  ${Math.floor(seconds) % 60}
}

function startBirdie() {
    document.getElementById('birdie').style.display = 'flex';
    const song = document.getElementById('audioBirdie');
    song.play();
}

function setStars() {
    const stars = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.floor(Math.random() * 100)}%`;
        star.style.top = `${Math.floor(Math.random() * 100)}%`;
        star.style.animationDuration = `${Math.floor(Math.random() * 10)}s`;
        stars.appendChild(star);
    }

    const venus = document.createElement('div');
    venus.className = 'star';
    venus.classList.add('venus');
    venus.style.left = `${Math.floor(Math.random() * 100)}%`;
    console.log(venus.style);
    if (parseInt(venus.style.left) > 80) {
        venus.classList.add('venusBefore');
    }
    venus.style.top = `${Math.floor(Math.random() * 10) + 5}%`;
    venus.style.animationDuration = `0s`;
    venus.style.width = '10px';
    venus.style.height = '10px';
    venus.onclick = startBirdie;
    stars.appendChild(venus);
}

updateCountdown();
setStars();
setPhrase();
const timer = setInterval(updateCountdown, 50);