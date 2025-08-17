/* ---- SLIDER ---- */
let slideIndex = 0;
showSlide(slideIndex);

function showSlide(n) {
  let slides = document.querySelectorAll(".slides img");
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === n) slide.classList.add("active");
  });
}

function nextSlide() {
  let slides = document.querySelectorAll(".slides img");
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  let slides = document.querySelectorAll(".slides img");
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

/* ---- CARRELLO ---- */
let cart = [];

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert(productName + " aggiunto al carrello!");
}
