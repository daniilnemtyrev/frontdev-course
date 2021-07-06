const tabs = document.querySelector('.tabs')
const films = document.querySelector('.films')
const tv = document.querySelector('.tv')
const buttonFilms = document.querySelector('.tabs__button-films')
const buttonFilmsBorder = document.querySelector('.tabs__button-films-border')
const buttonTvBorder = document.querySelector('.tabs__button-tv-border')
const buttonTv = document.querySelector('.tabs__button-tv')

tabs.addEventListener('click', function(e) {
    target = e.target;
    if(target.classList.contains('tabs__button-films')){
        films.classList.remove('none')
        films.classList.add('active-films')
        tv.classList.remove('active-tv')
        tv.classList.add('none')
        buttonFilms.classList.add('active-color-text')
        buttonFilmsBorder.classList.add('active-tab')
        buttonTv.classList.remove('active-color-text')
        buttonTvBorder.classList.remove('active-tab')
    }

    if(target.classList.contains('tabs__button-tv')){
        tv.classList.remove('none')
        tv.classList.add('active-tv')
        films.classList.remove('active-films')
        films.classList.add('none')
        buttonFilms.classList.remove('active-color-text')
        buttonTv.classList.add('active-color-text')
        buttonFilmsBorder.classList.remove('active-tab')
        buttonTvBorder.classList.add('active-tab')
    }
})



