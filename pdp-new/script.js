function clickImg(smallImage) {
  const mainImage = document.getElementById("mainImg");
  mainImage.src = smallImage.src;
}

function scrollUp() {
  const smallImages = document.querySelectorAll(".small-images img");
  let firstVisibleIndex = -1;
  for (let i = 0; i < smallImages.length; i++) {
    if (smallImages[i].style.display === "block") {
      firstVisibleIndex = i;
      break;
    }
  }
  if (firstVisibleIndex > 0) {
    smallImages[firstVisibleIndex + 5].style.display = "none";
    smallImages[firstVisibleIndex - 1].style.display = "block";
  }
}

function scrollDown() {
  const smallImages = document.querySelectorAll(".small-images img");
  let lastVisibleIndex = -1;
  for (let i = smallImages.length - 1; i >= 0; i--) {
    if (smallImages[i].style.display === "block") {
      lastVisibleIndex = i;
      break;
    }
  }
  if (lastVisibleIndex < smallImages.length - 1) {
    smallImages[lastVisibleIndex - 5].style.display = "none";
    smallImages[lastVisibleIndex + 1].style.display = "block";
  }
}

// Initialize visibility for the first 6 images
window.onload = () => {
  const smallImages = document.querySelectorAll(".small-images img");
  for (let i = 0; i < 6; i++) {
    if (smallImages[i]) {
      smallImages[i].style.display = "block";
    }
  }
};
