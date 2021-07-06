const buttonAuth = document.querySelector(".popup__input-button");
const headerButton = document.querySelector(".header__username");
const buttonQuit = document.querySelector(".header__auth-quit");
const buttonEnter = document.querySelector(".header__auth-button");
const checkboxPop = document.querySelector(".popup__input-checkbox");
const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup__content");
const body = document.querySelector("body");
const popupName = document.querySelector(".popup__name");
const validError = document.querySelector(".validError");

buttonAuth.addEventListener("click", function (e) {
  let userNew = {
    login: document.getElementById("login").value,
    password: document.getElementById("password").value,
  };

  fetch("http://localhost:3000/users")
    .then((response) => {
      return response.json();
    })
    .then((dataJson) => {
      checkUser(dataJson, userNew);
    });

  function checkUser(objJSON, objInput) {
    for (let key in objJSON) {
      if (
        objJSON[key].login == objInput.login &&
        objJSON[key].password == objInput.password
      ) {
        validError.classList.remove("block");
        validError.classList.add("none");
        popupName.style.paddingBottom = "28px";
        headerButton.innerHTML = objJSON[key].login;
        buttonQuit.style.display = "block";
        buttonEnter.style.display = "none";
        body.style.overflow = "auto";
        popup.classList.add("close");
        popup.classList.remove("open");
        break;
      } else {
        popupName.style.paddingBottom = "8px";
        validError.classList.add("block");
        validError.classList.remove("none");
      }
    }
  }
  document.getElementById("password").value = "";
});

buttonQuit.addEventListener("click", function (e) {
  popupName.style.paddingBottom = "28px";
  document.getElementById("password").value = "";
  document.getElementById("login").value = "";
  buttonQuit.style.display = "none";
  buttonEnter.style.display = "block";
  headerButton.innerHTML = "";
  validError.classList.remove("block");
  validError.classList.add("none");
});
