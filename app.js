//imp! NAVBAR SCROLLING COLOR

window.onscroll = () => {
    if(scrollY > 233){
        document.querySelector('.header-section').style.backgroundColor = '#1b1514e7';
    }
    else if (scrollY === 0){
        document.querySelector('.header-section').style.backgroundColor = 'transparent';
    }
}
// Get elements
const buyNowButton = document.getElementById("buy-now");
const orderForm = document.getElementById("order-form");
const confirmOrderButton = document.getElementById("confirm-order");
const orderSuccess = document.getElementById("order-success");
const closeOrderSuccessButton = document.getElementById("close-order-success");

// Show order form when "BUY NOW" button is clicked
buyNowButton.addEventListener("click", () => {
    orderForm.style.display = "flex"; // Show the form
});

// When "Confirm Order" button is clicked
confirmOrderButton.addEventListener("click", () => {
    orderForm.style.display = "none"; // Hide the order form
    orderSuccess.style.display = "flex"; // Show order success popup
});

// When "OK" in the Order Success popup is clicked
closeOrderSuccessButton.addEventListener("click", () => {
    orderSuccess.style.display = "none"; // Hide order success popup
    // Optionally, redirect to homepage or reset form here
});
// When "Confirm Order" button is clicked
confirmOrderButton.addEventListener("click", () => {
    orderForm.style.display = "none"; // Hide the order form

    // Step 1: Show "Preparing" message
    orderSuccess.innerHTML = `
        <div style="text-align:center; padding:20px;">
            <h2>☕ Your order is being prepared...</h2>
        </div>
    `;
    orderSuccess.style.display = "flex";

    // Step 2: After 2 seconds, show "Confirmed" with OK button
    setTimeout(() => {
        orderSuccess.innerHTML = `
            <div style="text-align:center; padding:20px;">
                <h2>✅ Order Confirmed!</h2>
                <p>Thank you for your order. Please wait while we serve you.</p>
                <button id="close-order-success">OK</button>
            </div>
        `;

        // Add listener for new OK button
        document.getElementById("close-order-success").addEventListener("click", () => {
            orderSuccess.style.display = "none";
        });
    }, 2000); // show confirmation after 2 seconds
});



//imp! COUNTER UP JAVASCRIPT

let valueDisplays = document.querySelectorAll(".section-5__counter-number");
let interval = 5000;
valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(valueDisplay.getAttribute("data-val"));
  let duration = Math.floor(interval / endValue);
  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.innerHTML =`${startValue}<span class="plus-symbol">+</span>`;
    if (startValue == endValue) {
      clearInterval(counter);
    }
  }, duration);
});