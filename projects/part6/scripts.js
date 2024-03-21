const getProducts = async () => {
    const url = "products.json";

    try {
        const response = await fetch(url);
        return await response.json();
    } catch (error) {
        console.log(error);
    }
};

const showProducts = async () => {
    let products = await getProducts();
    let productContainer = document.getElementById("product-container");

    products.forEach(product => {
        let productDiv = createProductElement(product);
        productContainer.appendChild(productDiv);
    });
};

const createProductElement = (product) => {
    let productDiv = document.createElement("div");
    productDiv.classList.add("product");

    let productImage = document.createElement("img");
    productImage.src = `images/${product.img_name}`;
    productImage.alt = "Product Image";

    let productInfo = document.createElement("div");
    productInfo.classList.add("product-info");

    let productName = document.createElement("h1");
    productName.textContent = `${product.name}`;

    let productDescription = document.createElement("p");
    productDescription.innerHTML = product.description;
    productDescription.textContent = `Product Description: ${product.description}`;

    let productColor = document.createElement("h2");
    productColor.textContent = `Color: ${product.color}`;

    let productSize = document.createElement("h2");
    productSize.textContent = `Size: ${product.size || 'One Size'}`;
    let productPrice = document.createElement("h2");
    productPrice.textContent = `Price: $${product.price}`;

    let checkoutButton = document.createElement("a");
    checkoutButton.href = "checkout.html";
    checkoutButton.classList.add("checkout-button");
    checkoutButton.textContent = "CHECKOUT";

    productInfo.append(productName, productDescription, productColor, productSize, productPrice, checkoutButton);
    productDiv.append(productImage, productInfo);

    return productDiv;
};

// get product ID from the URL query parameters
const getProductIdFromUrl = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
};

// display a specific product based on the product ID
const showProductDetails = async () => {
    const productId = getProductIdFromUrl();
    if (productId) {
        const products = await getProducts();
        const product = products.find(product => product._id.toString() === productId.toString());
        if (product) {
            const productContainer = document.getElementById("product-container");
            const productDiv = createProductElement(product);
            productContainer.appendChild(productDiv);
        } else {
            console.log("Product not found");
        }
    } else {
        console.log("");
    }
};

window.onload = () => {
    const currentUrl = window.location.href;
    if (currentUrl.includes("product.html")) {
        showProductDetails();
    } else {
        showProducts();
    }
};

