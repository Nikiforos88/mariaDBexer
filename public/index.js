document.addEventListener('DOMContentLoaded', function() {
    const createProductForm = document.getElementById('createProductForm');
    const productTableBody = document.getElementById('productTableBody');

    // Event listener for form submission to create a new product
    createProductForm.addEventListener('submit', async function(event) {
        event.preventDefault();
        
        const productName = document.getElementById('productName').value;
        const productCost = document.getElementById('productCost').value;
        const productDescription = document.getElementById('productDescription').value;
        const productQuantity = document.getElementById('productQuantity').value;

        try {
            const response = await fetch('/api/products', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    product_name: productName,
                    cost: productCost,
                    description: productDescription,
                    quantity: productQuantity
                })
            });

            const responseData = await response.json();
            console.log('New product created:', responseData);

            // Clear form fields after successful creation
            createProductForm.reset();

            // Fetch all products and update the table
            await fetchAllProducts();
        } catch (error) {
            console.error('Error creating product:', error);
        }
    });

    // Function to fetch all products and update the table
    async function fetchAllProducts() {
        try {
            const response = await fetch('/api/products');
            const products = await response.json();

            // Clear existing table rows
            productTableBody.innerHTML = '';

            // Populate table with products
            products.data.forEach(product => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${product.id}</td>
                    <td>${product.title}</td>
                    <td>${product.cost}</td>
                    <td>${product.description}</td>
                    <td>${product.quantity}</td>
                    <td>
                        <button onclick="editProduct(${product.id})">Edit</button>
                        <button onclick="deleteProduct(${product.id})">Delete</button>
                    </td>
                `;
                productTableBody.appendChild(row);
            });
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    }

    // Fetch all products when the page loads
    fetchAllProducts();
});
