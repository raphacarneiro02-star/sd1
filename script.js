
// Inicializa o mapa
const map = L.map('map').setView([-23.561684, -46.655981], 15);

// Adiciona o tile layer do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Adiciona um marcador na localização da loja
L.marker([-23.689490096938737, -46.552940125901245])
  .addTo(map)
  .bindPopup("Faculdade Anhanguera<br>R. Atlântica - Jardim do Mar, São Bernardo do Campo - SP")
  .openPopup();
