export const map = response => {
    const node = document.querySelector('.map');
    const nodeDelete = document.querySelector('.no-map');

    const myMap = document.createElement('div');
    myMap.id='map';
    myMap.classList.add('map__node');
    node.replaceChild(myMap, nodeDelete); 

    const map = L.map('map').setView([response.location.lat, response.location.lng], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([response.location.lat, response.location.lng]).addTo(map)
}