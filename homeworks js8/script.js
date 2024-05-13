window.onload = function () {

let fullNameInput = document.getElementById('full-name-input');
let buttonSignUp = document.getElementById('sign-up');
let buttonLink = document.getElementById('link');
let emailInput = document.getElementById('mail-input');
let passwordInput = document.getElementById('password-input');
let repeatPasswordInput = document.getElementById('repeat-password-input');
let usernameInput = document.getElementById('username-input');
let agreement = document.getElementById('agree');

    fullNameInput.onkeydown = (e) => {
        let number = parseInt(e.key);
        if (!isNaN(number)) {
            e.preventDefault();

        }
    }

    usernameInput.onkeydown = (e) => {
        if (e.key === '.' || e.key === ',') {
            e.preventDefault();
        }

    }

    agreement.onchange = function (event) {
        if (event.target.checked) {
            console.log('Согласен')
        } else {
            console.log('Не согласен')
        }
    };

    function verificationSignUp() {
        buttonSignUp.addEventListener('click', signUp);

    }

    function signUp() {

        if (fullNameInput.value === '') {
            alert('Заполните поле FullName');
            return;
        }
        if (usernameInput.value === '') {
            alert('Заполните поле username');
            return;
        }
        if (emailInput.value === '') {
            alert("Заполните поле E-mail");
            return;
        }

        if (passwordInput.value.length < 8) {
            alert('Пароль должен содержать не менее 8 символов');
            return;
        }

        if (passwordInput.value !== repeatPasswordInput.value) {
            alert('Пароли не совпадают');
            return;
        }


        if (!agreement.checked) {
            alert('Выберите согласие с условиями');
            return;
        }
        showPopup();
    }

    function changeWeb() {

        let formElement = document.getElementById('actions-form');
        if (formElement) {

            formElement.querySelectorAll('.action-input').forEach(function (input) {
                input.value = '';


            });
            document.getElementById('info-title').textContent = 'Log in to the system';
            document.getElementById('text-full-name').remove();
            document.getElementById('text-email').remove();
            document.getElementById('repeat-password-input-text').remove();
            document.getElementById('agree-condition').remove();
            document.getElementById('sign-up').innerText = 'Sign In';
            document.getElementById('link').remove();
            console.log('web');


        }

        buttonSignUp.removeEventListener('click', signUp)

        buttonSignUp.addEventListener('click', (event) => {

            if (usernameInput.value === '') {
                alert('Заполните поле username');
                return;
            }
            if (passwordInput.value === '') {
                alert('Заполните поле password');
                return;
            } else {
                alert("Добро пожаловать, " + usernameInput.value + " !");
                usernameInput.value = '';
                passwordInput.value = '';
            }


        });

    }

    function showPopup() {
        document.getElementById('popupContainer').style.display = 'block';
        hidePopup()
    }

    function hidePopup() {
        let okButton = document.getElementById('ok')
        okButton.addEventListener('click', function () {
            document.getElementById('popupContainer').style.display = 'none';
            changeWeb();

        });
    }

    verificationSignUp();

    buttonLink.addEventListener('click', changeWeb);

};