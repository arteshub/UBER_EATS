// Modal windows
const openSignin = document.getElementById("openSignin");
const signin = document.getElementById("signin");
const signinForm = signin.querySelector(".main-header__modal-form");
const signinButton = signin.querySelector(".main-header__modal-button");
const signinInputs = signin.querySelectorAll(".main-header__modal-input");
const signinError = signin.querySelector(".main-header__modal-error");

openSignin.addEventListener("click", toggleSignin);
signin.addEventListener("click", function (event) {
    if(event.target === event.currentTarget){
        toggleSignin();
    }
});
signinForm.addEventListener("submit", function (event) {
    event.preventDefault();
    for(let i = 0; i < signinInputs.length; i++){
        if(signinInputs[i].value.trim().length === 0){
            signinError.innerHTML = signinInputs[i].placeholder + "!";
            return;
        }
    }
    toggleSignin();
    signinError.innerHTML = "";
    for(let i = 0; i < signinInputs.length; i++){
        signinInputs[i].value = "";
    }
});

function toggleSignin() {
    signin.classList.toggle("toggle-modal");
    document.body.classList.toggle("body-overflow");
}

const openRegister = document.getElementById("openRegister");
const register = document.getElementById("register");
const registerForm = register.querySelector(".main-header__modal-form");
const registerButton = register.querySelector(".main-header__modal-button");
const registerInputs = register.querySelectorAll(".main-header__modal-input");
const registerError = register.querySelector(".main-header__modal-error");

openRegister.addEventListener("click", toggleRegister);
register.addEventListener("click", function (event) {
    if(event.target === event.currentTarget){
        toggleRegister();
    }
});
registerForm.addEventListener("submit", function (event) {
    event.preventDefault();
    for(let i = 0; i < registerInputs.length; i++){
        if(registerInputs[i].value.trim().length === 0){
            registerError.innerHTML = registerInputs[i].placeholder + "!";
            return;
        }
    }
    let password = document.getElementById("password");
    let checkPassword = document.getElementById("checkPassword");
    if(password.value !== checkPassword.value){
        registerError.innerHTML = "???????????? ???? ??????????????????!";
        return;
    }
    toggleRegister();
    registerError.innerHTML = "";
    for(let i = 0; i < registerInputs.length; i++){
        registerInputs[i].value = "";
    }
});

function toggleRegister() {
    register.classList.toggle("toggle-modal");
    document.body.classList.toggle("body-overflow");
}

// Select language
const selectButton = document.querySelector(".main-footer__button");
selectButton.addEventListener("click", function() {
    selectButton.classList.toggle("button-overflow");
    let selectedLanguage = document.querySelector(".main-footer__button>button>span");
    let selectOptions = document.querySelectorAll(".main-footer__button-item");
    for(let i = 0; i < selectOptions.length; i++){
        selectOptions[i].addEventListener("click", function () {
            for(let j = 0; j < selectOptions.length; j++){
                selectOptions[j].classList.remove("main-footer__button-item_selected");
            }
            selectedLanguage.innerHTML = selectOptions[i].textContent;
            selectOptions[i].classList.add("main-footer__button-item_selected");
        });
    }
});

// Select dish
const menuLinks = document.querySelectorAll(".menu__link");
const menuTitle = document.querySelector(".food__title");
for(let i = 0; i < menuLinks.length; i++){
    menuLinks[i].addEventListener("click", function(){
        for(let j = 0; j < menuLinks.length; j++){
            menuLinks[j].classList.remove("menu__link_active");
        }
        menuLinks[i].classList.add("menu__link_active");
        menuTitle.innerHTML = menuLinks[i].textContent;
    });
}