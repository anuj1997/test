// 1. Tell JavaScript to find our button and paragraph on the webpage
const button = document.getElementById('magicBtn');
const textParagraph = document.querySelector('p');

// 2. Create a list (array) of fun messages
const messages = [
    "You are coding on Ubuntu like an absolute pro! 🚀",
    "JavaScript is officially running under your command! 🧠",
    "Errors are just proof that you are trying. Keep building! ✨",
    "Your Git time machine is safely backing up this magic! 💾",
    "Boom! The frontend stack (HTML, CSS, JS) is complete! 🌐"
];

// 3. Tell the button what to do when someone clicks it
button.addEventListener('click', () => {
    // Pick a random message from our list
    const randomIndex = Math.floor(Math.random() * messages.length);
    const newMessage = messages[randomIndex];
    
    // Change the webpage text to our new message
    textParagraph.textContent = newMessage;
});
