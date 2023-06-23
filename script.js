const buttonSubmit = document.querySelector('#buttonSubmit');
const errorMessages = document.querySelectorAll('.error-message');
const errorIcons = document.querySelectorAll('.error-icon');
let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
let firstName;
let lastName;
let email;
let password;

buttonSubmit.addEventListener('click',e=>{
    e.preventDefault();
    firstName = document.getElementById('firstNameInput').value;
    lastName = document.getElementById('lastNameInput').value;
    email = document.getElementById('emailInput').value;
    password = document.getElementById('passwordInput').value;
    if (firstName === '') {  
        errorMessages[0].style.display = 'block';
        errorIcons[0].style.display = 'block';
    } else {
        errorMessages[0].style.display = 'none';
        errorIcons[0].style.display = 'none';
    }
    if (lastName === '') {  
        errorMessages[1].style.display = 'block';
        errorIcons[1].style.display = 'block';
    } else {
        errorMessages[1].style.display = 'none';
        errorIcons[1].style.display = 'none';
    }
    if (emailPattern.test(email)) {  
        errorMessages[2].style.display = 'none';
        errorIcons[2].style.display = 'none';
    } else {
        errorMessages[2].style.display = 'block';
        errorIcons[2].style.display = 'block';
    }
    if (password === '') {  
        errorMessages[3].style.display = 'block';
        errorIcons[3].style.display = 'block';
    } else {
        errorMessages[3].style.display = 'none';
        errorIcons[3].style.display = 'none';
    }

})