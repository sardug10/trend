//initializing the flickity

const carouselArray = [
  ".main-carousel1",
  ".main-carousel2",
  ".main-carousel3",
  ".main-carousel4",
  ".main-carousel5",
  ".main-carousel6",
  ".main-carousel7",
  ".main-carousel8",
  ".main-carousel9",
];
carouselArray.forEach((el) => {
  var carElem = document.querySelector(el);
  var flickity = new Flickity(carElem, {
    cellAlign: "left",
    containe: true,
    autoPlay: 1500,
    pageDots: false,
    wrapAround: true,
    pauseAutoPlayOnHover: true,
    imagesLoaded: true,
    prevNextButtons: false,
  });

  carElem.addEventListener("mouseleave", () => {
    flickity.playPlayer();
  });
});

//initializing the popup
const popupDiv = document.getElementById("popup");
const popupImg = Array.from(document.querySelectorAll("#show__popup"));
const prevImg = document.querySelector(".popup__img");
const closePopup = document.querySelector(".popup__close");

console.log(popupImg[1].src);

popupImg.forEach((el) => {
  el.addEventListener("click", () => {
    prevImg.src = el.src;
    popupDiv.style.visibility = "visible";
  });
});

closePopup.addEventListener("click", () => {
  popupDiv.style.visibility = "hidden";
});
