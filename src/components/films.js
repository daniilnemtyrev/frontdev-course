

let currentElem = null
const filmsCards = document.querySelectorAll('.new');
var couner = 0
filmsCards.forEach(el => {
  el.onmouseover = function(event){

    if (currentElem) return
    let target = event.target.closest('.new__new-tabs-item-img')
    if (!target) return
    if (!el.contains(target)) return
    currentElem = target
    target.parentNode.style.position = 'relative'
    let filmHoverActive = target.nextElementSibling
    filmHoverActive.classList.add('new-open')
    filmHoverActive.classList.remove('new-close')
    filmHoverActive.style.position = 'absolute'

  

}

  el.onmouseout = function(event){

    if (!currentElem) return
    let relatedTarget = event.relatedTarget

    while (relatedTarget) {

      if (relatedTarget == currentElem) return
      if (relatedTarget == currentElem.nextElementSibling) return
      relatedTarget = relatedTarget.parentNode

    }
    let filmHoverActive = currentElem.nextElementSibling
    filmHoverActive.classList.remove('new-open')
    filmHoverActive.classList.add('new-close')
    filmHoverActive.style.position = 'absolute'
    currentElem = null
    
  

}
})