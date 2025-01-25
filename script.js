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

const isValid = true;
const messages = [];
if (username.length < 3) {
    isValid == false;
    messages.push('give a user name');
};
console.log(messages);

if (!email.includes('@') && includes('.')) {
    isValid == false;
    messages.push('your email is required');
};
console.log(message);
if (password.length >= 8) {
    isValid = false;
    messages.push('password must be more than 8 characters');
}
console.log(message);
if (isValid) {
    feedbackDiv.textContent = "Registration-succesfull!";
    feedbackDiv.style.color = "#28a745";

} else {
    feedbackDiv.innerHtml = messages.join("<br>");
    feedbackDiv.style.color = "#dc3545";
}