// Sample product data (normally, this would come from an API or database)
const products = [
    { id: 1, name: 'Eco-Friendly Chair', category: 'Furniture', price: 40, ecoPoints: 20, image: 'chair.jpeg', description: 'A comfortable chair made from eco-friendly materials.' },
    { id: 2, name: 'Sustainable Jacket', category: 'Clothing', price: 75, ecoPoints: 30, image: 'jacket.jpeg', description: 'A stylish jacket made from recycled materials.' },
    { id: 3, name: 'Solar Powered Charger', category: 'Electronics', price: 120, ecoPoints: 50, image: 'solar.jpeg', description: 'A portable charger powered by solar energy.' },
    { id: 4, name: 'Recycled Wood Table', category: 'Furniture', price: 90, ecoPoints: 25, image: 'table.jpeg', description: 'A sturdy table made from 100% recycled wood.' },
    { id: 5, name: 'Organic Cotton Shirt', category: 'Clothing', price: 30, ecoPoints: 15, image: 'shirt.jpeg', description: 'A soft shirt made from organic cotton.' },
    { id: 6, name: 'Energy Efficient Lamp', category: 'Electronics', price: 60, ecoPoints: 40, image: 'lamp.jpeg', description: 'An energy-efficient LED lamp to save electricity.' },
    { id: 7, name: 'Bamboo Toothbrush', category: 'Furniture', price: 10, ecoPoints: 5, image: 'product7.jpg', description: 'A bamboo toothbrush to reduce plastic waste.' },
    { id: 8, name: 'Eco-Friendly Bag', category: 'Clothing', price: 20, ecoPoints: 10, image: 'product8.jpg', description: 'A reusable bag made from sustainable materials.' }
];

// Pagination state
let currentPage = 1;
const itemsPerPage = 4;

// Function to render the product grid based on filters and pagination
function renderProductGrid() {
    const filteredProducts = getFilteredProducts();
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageProducts = filteredProducts.slice(startIndex, endIndex);

    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    pageProducts.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('border', 'rounded', 'shadow-lg', 'p-4', 'bg-white', 'cursor-pointer');
        productCard.onclick = () => window.location.href = `product-details.html?id=${product.id}`;

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover mb-4">
            <h3 class="text-xl font-bold">${product.name}</h3>
            <p class="text-gray-600">Category: ${product.category}</p>
            <p class="text-gray-600">Price: $${product.price}</p>
            <p class="text-gray-600">Eco Points: ${product.ecoPoints}</p>
        `;

        productGrid.appendChild(productCard);
    });

    updatePagination(filteredProducts.length);
}

// Function to filter products based on the selected criteria
function getFilteredProducts() {
    const categoryFilter = document.getElementById('category-filter').value;
    const priceFilter = document.getElementById('price-filter').value;
    const ecoPointsFilter = document.getElementById('eco-points-filter').value;

    return products.filter(product => {
        let match = true;

        if (categoryFilter !== 'Category' && product.category !== categoryFilter) {
            match = false;
        }

        if (priceFilter !== 'Price Range') {
            const [minPrice, maxPrice] = priceFilter.split(' - ').map(p => parseInt(p.replace('$', '').replace('+', ''))); 
            if (product.price < minPrice || (maxPrice && product.price > maxPrice)) {
                match = false;
            }
        }

        if (ecoPointsFilter !== 'Eco-Points') {
            const [minPoints, maxPoints] = ecoPointsFilter.split(' - ').map(p => parseInt(p.replace('Points', '').trim()));
            if (product.ecoPoints < minPoints || (maxPoints && product.ecoPoints > maxPoints)) {
                match = false;
            }
        }

        return match;
    });
}

// Function to update pagination controls
function updatePagination(filteredProductsCount) {
    const totalPages = Math.ceil(filteredProductsCount / itemsPerPage);
    const pageInfo = document.getElementById('page-info');
    pageInfo.textContent = `Page ${currentPage} of ${totalPages}`;

    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');

    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === totalPages;

    prevBtn.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            renderProductGrid();
        }
    };

    nextBtn.onclick = () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderProductGrid();
        }
    };
}

// Initialize the page by rendering the product grid
renderProductGrid();

// Listen for filter changes to update the product grid
document.getElementById('category-filter').addEventListener('change', renderProductGrid);
document.getElementById('price-filter').addEventListener('change', renderProductGrid);
document.getElementById('eco-points-filter').addEventListener('change', renderProductGrid);
