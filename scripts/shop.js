document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('product-grid');
    
    const products = [
        {
            id: 1,
            name: "Upcycled Wooden Desk",
            category: "Furniture",
            price: 150,
            ecoPoints: 50,
            image: "/api/placeholder/300/200",
            seller: "Green Workshop"
        },
        {
            id: 2,
            name: "Organic Cotton Tote Bag",
            category: "Accessories",
            price: 25,
            ecoPoints: 20,
            image: "/api/placeholder/300/200",
            seller: "Sustainable Threads"
        },
        {
            id: 3,
            name: "Recycled Plastic Outdoor Chair",
            category: "Furniture",
            price: 85,
            ecoPoints: 35,
            image: "/api/placeholder/300/200",
            seller: "EcoDesign Co."
        },
        {
            id: 4,
            name: "Solar Powered Charger",
            category: "Electronics",
            price: 49,
            ecoPoints: 40,
            image: "/api/placeholder/300/200",
            seller: "Green Tech Solutions"
        }
    ];

    function renderProducts(productsToRender) {
        productGrid.innerHTML = '';
        productsToRender.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'bg-white rounded-lg shadow-md overflow-hidden';
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="font-bold text-xl mb-2">${product.name}</h3>
                    <div class="flex justify-between items-center">
                        <span class="text-green-600 font-bold">$${product.price}</span>
                        <span class="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            ${product.ecoPoints} EcoPoints
                        </span>
                    </div>
                    <div class="mt-2 text-sm text-gray-600">
                        Seller: ${product.seller}
                    </div>
                    <button class="mt-4 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
                        Add to Cart
                    </button>
                </div>
            `;
            productGrid.appendChild(productCard);
        });
    }

    // Initial product render
    renderProducts(products);

    // Basic filtering (you'd expand this with more complex logic)
    const categoryFilter = document.querySelector('select:nth-child(1)');
    categoryFilter.addEventListener('change', (e) => {
        const selectedCategory = e.target.value;
        const filteredProducts = selectedCategory === 'Category' 
            ? products 
            : products.filter(p => p.category === selectedCategory);
        renderProducts(filteredProducts);
    });
});