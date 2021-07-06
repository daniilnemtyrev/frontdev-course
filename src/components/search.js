const searchButton = document.querySelector(".header__search-button");
const searchInput = document.querySelector(".header__input");
const filmsNames = document.querySelectorAll(".new__new-tabs-item-text")

searchButton.addEventListener("click", function (e) {
  searchInputValue = searchInput.value.split("");
  console.log(searchInputValue)
  for(let name of filmsNames) {
      for(let char = 0; char < name.textContent.length; char++){
          console.log(name.textContent[char])
      }
  }
  
});
