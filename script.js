document.addEventListener("DOMContentLoaded", () => {
    ("Page Loaded");
});
const form = document.getElementById("registration-form").addEventListener('submit', function (event) {
    event.preventDefault()
} );
const feedbackDiv = document.getElementById("form-feedback").style.display = "block";
const username = document.getElementById('username').value.trim();
const email= document.getElementById('email').value.trim();
const password = document.getElementById('password').value.trim();

if (isvalid != false) {
    feedbackDiv.document.getElementById('form-feedback').textContent = "Registration successfull!";
    feedbackDiv.document.getElementById('form-feedback').style.display = "#28a745";
}

const isvalid = true;
const message = [];
if (username.length < 3) {
    isvalid == false;
    message.push('give a user name');
};
console.log(message);

if (!email.includes('@') && includes('.')) {
    isvalid == false;
    message.push('your email is required');
};
console.log(message);
if (password.length >= 8) {
    isvalid = false;
    message.push('password must be more than 8 characters');
}
console.log(message);