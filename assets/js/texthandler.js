const items = document.querySelectorAll('.item');
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalText = document.getElementById('modal-text');
const closeBtn = document.querySelector('.close');
const speakButton = document.getElementById("speak-button");

items.forEach(item => {
    item.addEventListener('click', () => {
        modalTitle.textContent = item.querySelector('h2').textContent;
        modalText.textContent = item.querySelector('p').textContent;
        modal.classList.remove("hide");
        modal.classList.add("show");

    });
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove("show");
    modal.classList.add("hide");
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.classList.remove("show");
        modal.classList.add("hide");
    }
});

// Add a click event listener to the speak button
speakButton.addEventListener("click", () => {
    // Create a new SpeechSynthesisUtterance object and set its text to the modal text
    const utterance = new SpeechSynthesisUtterance(modalText.innerHTML);
    utterance.lang = 'pt-BR';
    utterance.rate = 2; // Adjust the rate here
    window.speechSynthesis.speak(utterance);
});