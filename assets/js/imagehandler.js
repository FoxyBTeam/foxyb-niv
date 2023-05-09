// Shuffle the order of the fanart items
const fanartSection = document.querySelector('.fanart-section');
for (let i = fanartSection.children.length; i >= 0; i--) {
  fanartSection.appendChild(fanartSection.children[Math.random() * i | 0]);
}

// Open modal on click of fanart item
const fanartItems = document.querySelectorAll('.fanart-item');
fanartItems.forEach(item => {
  const modalId = item.querySelector('img').getAttribute('data-modal');
  const modal = document.getElementById(modalId);
  const modalContent = modal.querySelector('.modal-content');

  item.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalContent.scrollTop = 0;
    document.body.style.overflow = 'hidden';

    // Resize the modal content based on the size of the image
    const img = modalContent.querySelector('img');
    const imgWidth = img.width;
    const imgHeight = img.height;
    const modalPadding = parseInt(window.getComputedStyle(modalContent).padding) * 2;
    modalContent.style.width = imgWidth + modalPadding + 'px';
    modalContent.style.height = imgHeight + modalPadding + 'px';
  });
});

// Close modal on click of close button
const modalCloseButtons = document.querySelectorAll('.modal-close');
modalCloseButtons.forEach(button => {
  const modal = button.parentNode;
  button.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  });
});

// Close modal on click outside of modal content
const modals = document.querySelectorAll('.modal');
modals.forEach(modal => {
  const modalContent = modal.querySelector('.modal-content');
  modal.addEventListener('click', event => {
    if (event.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = 'auto';
    }
  });
  modalContent.addEventListener('click', event => {
    event.stopPropagation();
  });
});
