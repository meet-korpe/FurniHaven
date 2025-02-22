let slideIndex = 0;
showSlide(slideIndex);

function moveSlide(n) {
  slideIndex += n;
  showSlide(slideIndex);
}

function showSlide(n) {
  let slides = document.querySelectorAll('.slide');
  
  if (n >= slides.length) {
    slideIndex = 0;
  } else if (n < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide, index) => {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  });
}

let cart = JSON.parse(localStorage.getItem('cart')) || [];

        function addToCart(productId, productName, productPrice) {
            const existingProduct = cart.find(item => item.id === productId);

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                cart.push({
                    id: productId,
                    name: productName,
                    price: productPrice,
                    quantity: 1
                });
            }

            localStorage.setItem('cart', JSON.stringify(cart));
            alert(`${productName} has been added to your cart!`);
        }

        document.querySelectorAll('.add-to-cart').forEach(button => {
            button.addEventListener('click', function() {
                const productId = this.getAttribute('data-id');
                const productName = this.getAttribute('data-name');
                const productPrice = this.getAttribute('data-price');
                addToCart(productId, productName, productPrice);
            });
        });