const searchButton = document.querySelector(".header__search-button");
const searchInput = document.querySelector(".header__input");
const filmsNames = document.querySelectorAll(".new__new-tabs-item-text");
const films = document.querySelector(".films");
const tabs = document.querySelector(".tabs");
const back = document.querySelector(".header__logo")
let count = 0;
let filmSearchExist = false;
let filmDoneClone;

searchButton.addEventListener("click", function (e) {
  if (filmSearchExist) {
    filmDoneClone.innerHTML = "";
  }
  searchInputValue = searchInput.value.toLowerCase().split("");
  searchInput.value = ""
  if (searchInputValue.length < 3) {
    alert("Слишком короткое слово");
  } else {
    for (let name of filmsNames) {
      let nameArray = Array.from(name.textContent.toLocaleLowerCase());
      count = 0;
      for (let i = 1; i < nameArray.length; i++) {
        if (searchInputValue[i] == nameArray[i]) {
          count++;
        }
        if (
          (count == i &&
            (nameArray[i + 1] == " " || nameArray[i + 1] == ".")) ||
          (count == i && nameArray[i + 1] == undefined)
        ) {
          filmSearchExist = true;
          let filmDone = name.parentElement;
          filmDoneClone = document.createElement("div");
          filmDoneClone.appendChild(filmDone.cloneNode(true));
          console.log(filmDoneClone.innerHTML);
          filmDoneClone.classList.add("search");
          films.classList.remove("active-films");
          films.classList.add("none");
          tabs.classList.add("none")
          tabs.insertAdjacentElement("afterend", filmDoneClone);
          count = 0;
          break;
        }
      }
    }
  }
});

back.addEventListener("click", function(e){
  filmDoneClone.innerHTML = "";
  filmDoneClone.parentNode.removeChild(filmDoneClone)
  filmSearchExist = false;
  films.classList.add("active-films");
  films.classList.remove("none");
  tabs.classList.remove("none")
})