const welcomeText = document.getElementById("welcome-text");
const enterBtn = document.getElementById("enter-btn");

const message = "Welcome to our little universe 💜";
let i = 0;

// Typewriter effect
function typeWriter() {
  if (i < message.length) {
    welcomeText.innerHTML += message.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}

typeWriter();

// Button click goes to first page (we’ll make it next)
enterBtn.addEventListener("click", () => {
  window.location.href = "page1.html";
});
