document.addEventListener('DOMContentLoaded', () => {
    // Hardcoded featured products (without images)
    const featuredProducts = [
        {
            title: 'Eco-Friendly Reusable Water Bottle',
            description: 'Made from stainless steel, perfect for on-the-go hydration.',
            price: '19.99',
            ecoPoints: 15
        },
        {
            title: 'Bamboo Toothbrush Set',
            description: 'Sustainable and eco-friendly toothbrush set made from bamboo.',
            price: '10.99',
            ecoPoints: 10
        },
        {
            title: 'Organic Cotton Tote Bag',
            description: 'A stylish and durable tote bag made from organic cotton.',
            price: '14.99',
            ecoPoints: 12
        },
        {
            title: 'Solar Powered Garden Lights',
            description: 'Eco-friendly garden lights powered by solar energy.',
            price: '25.99',
            ecoPoints: 20
        }
    ];

    const productsContainer = document.getElementById('featured-products');

    // If there are no products, show a message
    if (featuredProducts.length === 0) {
        productsContainer.innerHTML = '<p>No featured products available at the moment.</p>';
        return;
    }

    // Loop through the hardcoded products and create product cards
    featuredProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'featured-product bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105';

        // Card structure without images
        productCard.innerHTML = `
            <div class="p-5">
                <h4 class="text-xl font-semibold text-gray-800 mb-2">${product.title}</h4>
                <p class="text-gray-600 text-sm mb-4">${product.description}</p>
                <div class="flex justify-between items-center">
                    <span class="text-green-600 text-lg font-bold">$${product.price}</span>
                    <span class="text-sm text-gray-500">${product.ecoPoints} EcoPoints</span>
                </div>
            </div>
        `;

        // Append the product card to the container
        productsContainer.appendChild(productCard);
    });

    // Optional: Handle Eco-Hubs if needed
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
