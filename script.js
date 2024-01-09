// Catch Dom Element 
const button = document.getElementById('addToCart');
const total = document.getElementById('total');
const price = document.getElementById("price");


//State or Data
const productPrice = 5000;
let totalPrice = 0;

button.addEventListener("click", ()=>{
    totalPrice += productPrice;
    total.innerHTML = `Total: ৳ ${totalPrice}`;
});

// Display ui 
total.innerHTML = `Total: ৳ ${totalPrice}`;
price.innerHTML = `৳ ${productPrice}`;

