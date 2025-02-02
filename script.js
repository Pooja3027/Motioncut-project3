let productImages = [
    ["product1-1.jpg", "product1-2.jpg", "product1-3.jpg"],
    ["product2-1.jpg", "product2-2.jpg", "product2-3.jpg"],
    ["product3-1.jpg", "product3-2.jpg", "product3-3.jpg"]
];

let currentIndex = [0, 0, 0]; // Track the current image for each product

// Function to change product image
function nextSlide(index) {
    currentIndex[index] = (currentIndex[index] + 1) % productImages[index].length;
    document.getElementById(`image${index}`).src = productImages[index][currentIndex[index]];
}

function prevSlide(index) {
    currentIndex[index] = (currentIndex[index] - 1 + productImages[index].length) % productImages[index].length;
    document.getElementById(`image${index}`).src = productImages[index][currentIndex[index]];
}
