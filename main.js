let mode = 1;
let imageAmout = 351;

let setImages = () => {
  let r = Math.floor(
    Math.random() * (mode == 1 ? imageAmout - 3 : imageAmout - 11)
  );
  let imgs = document.querySelectorAll("img");

  imgs.forEach((img, index) => {
    // let r = Math.floor(
    //   Math.random() * (mode == 1 ? imageAmout - 3 : imageAmout - 11)
    // );
    img.src = "./img/_" + (r + index) + ".jpg";
  });
};

let changeMode = () => {
  let imgs = document.querySelectorAll("img");

  imgs.forEach((img, index) => {
    if (mode === 1) {
      img.classList.add("big");
      if (index >= 3) {
        img.style.display = "none";
      }
    } else {
      img.style.display = "block";
      img.classList.remove("big");
    }
  });
};

const modusSelector = document.querySelector("#modus-selector");
const shuffleButton = document.querySelector("#shuffle-button");

modusSelector.addEventListener("change", (e) => {
  if (e.target.value == "1") {
    mode = 1;
  } else {
    mode = 2;
  }
  changeMode();
});

shuffleButton.addEventListener("click", setImages);
window.addEventListener("load", setImages);

setInterval(setImages, 3000);
