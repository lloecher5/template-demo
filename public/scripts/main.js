const images = document.querySelectorAll("img");

images.forEach((image) => {
  image.addEventListener("click", () => {
    alert(`This player is ${image.alt}.`);
  });
});
