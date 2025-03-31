const targetDate = new Date('2025-08-07T00:00:00').getTime();  // Fecha objetivo
const departureDate = new Date('2025-03-15T05:30:00').getTime();  // Fecha de partida

function updateCountdown() {
    const now = new Date().getTime();
    const timeDiff = targetDate - now;
    const seconds = timeDiff / 1000;
    
    document.getElementById('countdown').innerText = `${new Intl.NumberFormat().format(seconds * 29.8)} km`;
}

// function updateProgressBar() {
//     const now = new Date().getTime();
//     const timeDiff = now - departureDate;
//     const totalTime = targetDate - departureDate;
//     const progress = (timeDiff / totalTime) * 100;
    
//     document.getElementById('progress').value = progress;
// }

// Actualiza cada 250 ms (cuarto de segundo)
const timer = setInterval(updateCountdown, 50);
// updateProgressBar();
updateCountdown();

function setVenus() {
    console.log(screen.availWidth)
    const x = Math.floor(Math.random() * screen.availWidth) - 20
    const y = Math.floor(Math.random() * 80) + 20

    console.log(x, y)

    document.getElementById('venus').style.left = `${x}px`
    document.getElementById('venus').style.top = `${y}px`
}

setVenus()