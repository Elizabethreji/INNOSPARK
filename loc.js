// Dataset of places in Kerala
const places = [
    { name: "Lulu Mall Kochi", latitude: 9.9984, longitude: 76.3188 },
    { name: "Marine Drive", latitude: 9.9794, longitude: 76.2802 },
    { name: "Athirappilly Waterfalls", latitude: 10.2843, longitude: 76.5697 },
    { name: "Wayanad Wildlife Sanctuary", latitude: 11.6422, longitude: 76.2564 },
    { name: "Alappuzha Beach", latitude: 9.4900, longitude: 76.3264 },
];

// Calculate distance using the Haversine formula
function calculateDistance(lat1, lon1, lat2, lon2) {
    const toRad = (value) => (value * Math.PI) / 180;
    const R = 6371; // Radius of Earth in km
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(toRad(lat1)) *
            Math.cos(toRad(lat2)) *
            Math.sin(dLon / 2) *
            Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c; // Distance in km
}

// Function to get user's current location using Geolocation API
function getUserLocation() {
    return new Promise((resolve, reject) => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                resolve([latitude, longitude]);
            }, reject);
        } else {
            reject("Geolocation not supported by this browser.");
        }
    });
}

// Event listener for the "Find Nearby Locations" button
document.getElementById("find-locations-btn").addEventListener("click", () => {
    const placeSelect = document.getElementById("place-select");
    const selectedValue = placeSelect.value;

    let userLat, userLon;

    if (selectedValue) {
        // Parse selected location (latitude and longitude)
        [userLat, userLon] = selectedValue.split(",").map(Number);
    } else {
        // If no location selected, use geolocation
        getUserLocation()
            .then(([latitude, longitude]) => {
                userLat = latitude;
                userLon = longitude;
                findNearbyLocations(userLat, userLon);
            })
            .catch((error) => {
                alert("Error getting geolocation: " + error);
            });
        return; // Prevent further code execution until geolocation is obtained
    }

    // If a location is selected, proceed with calculating distances
    findNearbyLocations(userLat, userLon);
});

// Function to calculate and display nearby locations
function findNearbyLocations(userLat, userLon) {
    // Find distances to all places
    const distances = places.map((place) => {
        const distance = calculateDistance(
            userLat,
            userLon,
            place.latitude,
            place.longitude
        );
        return { ...place, distance: distance.toFixed(2) };
    });

    // Sort by distance and display results
    distances.sort((a, b) => a.distance - b.distance);
    const locationList = document.getElementById("location-list");
    locationList.innerHTML = "";
    distances.forEach((place) => {
        const li = document.createElement("li");
        li.textContent = `${place.name} - ${place.distance} km away`;
        locationList.appendChild(li);
    });
}
