// Cuenta regresiva
function countdown() {
    const eventDate = new Date("August 2, 2025 19:00:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const timeLeft = eventDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `
            <span>${String(days).padStart(2, '0')}</span>
            <span>${String(hours).padStart(2, '0')}</span>
            <span>${String(minutes).padStart(2, '0')}</span>
            <span>${String(seconds).padStart(2, '0')}</span>
        `;
    }, 1000);
}

// Inicializar mapa
function initMap() {
    const location = { lat: 4.921, lng: -75.689 };  // Coordenadas del evento
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: location
    });

    new google.maps.Marker({
        position: location,
        map: map
    });
}

window.onload = function() {
    countdown();
    initMap();
};
