const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const form = document.getElementById('signin_Form')
const signin_email = document.getElementById('email')
const signin_password = document.getElementById('password')



registerLink.addEventListener('click', () => {
    logregBox.classList.add('active');
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
});

//validation 
form.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = signin_email.value.trim();
    const password = signin_password.value.trim();

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        emailInput.focus();
        return;
    }

    if (password.length < 8) {
        alert('Password must be at least 8 characters long.');
        passwordInput.focus();
        return;
    }
})
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}














