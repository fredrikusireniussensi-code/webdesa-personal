setInterval(function() {
    const waktu = new Date().toLocaleTimeString();
    document.getElementById("jam").innerText = "Jam sekarang: " + waktu;
}, 1000);