// function changeMainImage(src) {
//   document.getElementById("mainImage").src = src;
// }
// const scrollUpButton = document.getElementById("scrollUp");
// const scrollDownButton = document.getElementById("scrollDown");
// const sliderNav = document.getElementById("sliderNav");

// scrollUpButton.addEventListener("click", () => {
//   sliderNav.scrollBy(0, -100);
// });

// scrollDownButton.addEventListener("click", () => {
//   sliderNav.scrollBy(0, 100);
// });

const scrollUpButton = document.getElementById("scrollUp");
const scrollDownButton = document.getElementById("scrollDown");
const thumbnails = document.querySelectorAll(".thumbnail");
let startIndex = 0;
const thumbnailsPerPage = 6;

function updateThumbnailVisibility() {
  thumbnails.forEach((thumbnail, index) => {
    thumbnail.parentElement.classList.toggle(
      "hidden",
      index < startIndex || index >= startIndex + thumbnailsPerPage
    );
  });
}

scrollUpButton.addEventListener("click", () => {
  startIndex = Math.max(startIndex - thumbnailsPerPage, 0);
  updateThumbnailVisibility();
});

scrollDownButton.addEventListener("click", () => {
  startIndex = Math.min(
    startIndex + thumbnailsPerPage,
    thumbnails.length - thumbnailsPerPage
  );
  updateThumbnailVisibility();
});

updateThumbnailVisibility();
