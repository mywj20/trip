const map = L.map('map').setView([35, 105], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
}).addTo(map);

fetch("data/posts.json")
.then(res => res.json())
.then(data => {
    data.forEach(post => {
        if(post.location){
            L.marker([post.location.lat, post.location.lng])
            .addTo(map)
            .bindPopup(`
                <b>${post.title}</b><br>
                <a href="${post.url}">查看攻略</a>
            `);
        }
    });
});
