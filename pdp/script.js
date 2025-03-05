function increaseQuantity(button) {
  const input = button.previousElementSibling;
  input.value = parseInt(input.value) + 1;
}

function decreaseQuantity(button) {
  const input = button.nextElementSibling;
  if (parseInt(input.value) > 1) {
    input.value = parseInt(input.value) - 1;
  }
}

//forside image scroll
document.addEventListener("DOMContentLoaded", function () {
  const imageCount = 6; // Total number of images
  let currentImageIndex = 0;

  const carouselInner = document.querySelector(".carousel-inner");
  const thumbnails = document.querySelectorAll(".nav-button img");

  // Initialize carousel on page load
  function initCarousel() {
    const activeItem = carouselInner.querySelector(".carousel-item.active");
    currentImageIndex = Array.from(carouselInner.children).indexOf(activeItem);
    updateCarousel();
  }

  document.getElementById("scrollUp").addEventListener("click", function () {
    currentImageIndex = (currentImageIndex - 1 + imageCount) % imageCount;
    updateCarousel();
    $("#imageCarousel").carousel(currentImageIndex);
  });

  document.getElementById("scrollDown").addEventListener("click", function () {
    currentImageIndex = (currentImageIndex + 1) % imageCount;
    updateCarousel();
    $("#imageCarousel").carousel(currentImageIndex);
  });

  document
    .querySelectorAll(".carousel-control-prev, .carousel-control-next")
    .forEach((button) => {
      button.addEventListener("click", function () {
        const activeItem = carouselInner.querySelector(".carousel-item.active");
        currentImageIndex = Array.from(carouselInner.children).indexOf(
          activeItem
        );
        if (button.classList.contains("carousel-control-prev")) {
          currentImageIndex = (currentImageIndex - 1 + imageCount) % imageCount;
        } else if (button.classList.contains("carousel-control-next")) {
          currentImageIndex = (currentImageIndex + 1) % imageCount;
        }
        updateCarousel();
        $("#imageCarousel").carousel(currentImageIndex);
      });
    });

  function updateCarousel() {
    const items = carouselInner.querySelectorAll(".carousel-item");
    items.forEach((item, index) => {
      item.classList.remove("active");
      thumbnails[index].parentElement.classList.remove("active-thumbnail");
      if (index === currentImageIndex) {
        item.classList.add("active");
        thumbnails[index].parentElement.classList.add("active-thumbnail");
      }
    });
  }

  initCarousel(); // Initialize carousel on page load
});
