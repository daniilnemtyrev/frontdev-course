
const buttonAuth = document.querySelector('.popup__input-button')
const headerButton = document.querySelector('.header__username')
const buttonQuit = document.querySelector('.header__auth-quit')
const buttonEnter = document.querySelector('.header__auth-button')
const checkboxPop = document.querySelector('.popup__input-checkbox')
const popup = document.querySelector('.popup')
const body = document.querySelector('body')




buttonAuth.addEventListener('click', function(e){
    body.style.overflow = 'auto'
    popup.classList.add('close')
    popup.classList.remove('open')
    let userNew = {
        login: document.getElementById('login').value,
        password: document.getElementById('password').value
    }
    var requestURL = 'https://raw.githubusercontent.com/daniilnemtyrev/json/main/users.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    function checkUser(objJSON, objInput){
        for(let key in objJSON){
            if(objJSON[key].login == objInput.login && objJSON[key].password == objInput.password ){

                headerButton.innerHTML = (objJSON[key].login)
                buttonQuit.style.display = 'block'
                buttonEnter.style.display = 'none'
            }
        }
    }

    function addUser(objJSON, objInput){

    }


    request.onload = function() {
    var usersExists = request.response;
    console.log(usersExists)
    checkUser(usersExists.users, userNew);

  }

})



