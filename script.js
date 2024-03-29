var now = new Date();
var hour = now.getHours();
var welcomeMessage = document.getElementById('welcome-message');
if (hour < 12) {
    welcomeMessage.textContent = "Bom dia!";
} else if (hour < 18) {
    welcomeMessage.textContent = "Boa tarde!";
} else {
    welcomeMessage.textContent = "Boa noite!";
}
