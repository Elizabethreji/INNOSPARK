// Dynamically populate featured products
document.addEventListener('DOMContentLoaded', () => {
    const featuredProducts = [
        {
            image: '/api/placeholder/300/200',
            title: 'Recycled Denim Tote Bag',
            description: 'Handmade from upcycled jeans',
            price: '$35',
            ecoPoints: 25
        },
        {
            image: '/api/placeholder/300/200',
            title: 'Bamboo Kitchen Utensil Set',
            description: 'Eco-friendly cooking tools',
            price: '$28',
            ecoPoints: 30
        },
        {
            image: '/api/placeholder/300/200',
            title: 'Solar Powered Charger',
            description: 'Charge your devices sustainably',
            price: '$49',
            ecoPoints: 40
        }
    ];

    const productsContainer = document.getElementById('featured-products');
    featuredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'bg-white rounded-lg shadow-md overflow-hidden';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h4 class="font-bold text-xl mb-2">${product.title}</h4>
                <p class="text-gray-600 mb-4">${product.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-green-600 font-bold">${product.price}</span>
                    <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                        ${product.ecoPoints} EcoPoints
                    </span>
                </div>
            </div>
        `;
        productsContainer.appendChild(productCard);
    });

    // Similar dynamic population for Eco-Hubs and Community Highlights
    const ecoHubsData = [
        {
            name: 'Urban Green Collective',
            description: 'Local sustainability group in downtown',
            location: '2.5 miles away'
        },
        {
            name: 'Neighborhood Recyclers',
            description: 'Community recycling and upcycling hub',
            location: '4.7 miles away'
        },
        {
            name: 'Green Living Network',
            description: 'Eco-friendly lifestyle community',
            location: '3.2 miles away'
        }
    ];

    const ecoHubsContainer = document.getElementById('eco-hubs');
    ecoHubsData.forEach(hub => {
        const hubCard = document.createElement('div');
        hubCard.className = 'bg-white p-6 rounded-lg shadow-md';
        hubCard.innerHTML = `
            <h4 class="font-bold text-xl mb-2">${hub.name}</h4>
            <p class="text-gray-600 mb-4">${hub.description}</p>
            <div class="flex items-center text-green-600">
                📍 ${hub.location}
            </div>
        `;
        ecoHubsContainer.appendChild(hubCard);
    });
});
