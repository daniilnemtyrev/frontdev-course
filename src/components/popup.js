const authButton = document.querySelector(".header__auth-button");
const main = document.querySelector(".main");
const popup = document.querySelector(".popup");
const container = document.querySelector(".container");
const body = document.querySelector("body");
const popupBody = document.querySelector(".popup__body");
const popupContent = document.querySelector(".popup__content");
const validError = document.querySelector(".validError");
const popupName = document.querySelector(".popup__name");

authButton.addEventListener("click", function (e) {
  main.style.position = "relative";
  popup.style.position = "absolute";
  body.style.overflow = "hidden";
  popup.classList.add("open");
  popup.classList.remove("close");
});

popupBody.addEventListener("click", function (e) {
  if (e.target.matches(".popup__content, .popup__content *")) {
    return;
  }
  validError.classList.remove("block");
  validError.classList.add("none");
  popupName.style.paddingBottom = "28px";
  body.style.overflow = "auto";
  popup.classList.add("close");
  popup.classList.remove("open");
});
