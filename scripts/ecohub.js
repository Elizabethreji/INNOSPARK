// Initialize the map
const map = L.map('eco-hubs-map').setView([37.7749, -122.4194], 12); // Example coordinates (San Francisco)

// Add tiles to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Add markers
const ecoHubs = [
    {
        name: 'Urban Green Collective',
        coords: [37.7749, -122.4194],
        description: 'Sustainability group in downtown.',
    },
    {
        name: 'Neighborhood Recyclers',
        coords: [37.7849, -122.4094],
        description: 'Community recycling hub.',
    }
];

ecoHubs.forEach(hub => {
    const marker = L.marker(hub.coords).addTo(map);
    marker.bindPopup(`<strong>${hub.name}</strong><br>${hub.description}`);
});

// Filter functionality
document.getElementById('filter-btn').addEventListener('click', () => {
    const activity = document.getElementById('activity-filter').value.toLowerCase();
    const location = document.getElementById('location-filter').value.toLowerCase();
    // Logic to filter eco-hub listings based on activity and location
    console.log('Filter applied:', { activity, location });
});
