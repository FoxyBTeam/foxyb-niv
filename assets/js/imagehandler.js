const IMGmodal = document.querySelector('.imgmodal');
const IMGmodalImage = IMGmodal.querySelector('.modal-image');
const imageContainers = document.querySelectorAll('.image-container');


imageContainers.forEach(container => {
  container.addEventListener('click', () => {
    const image = container.querySelector('img');
    const name = container.querySelector('.image-name').textContent;
    IMGmodalImage.src = image.src;
    IMGmodalImage.alt = name;
    IMGmodal.style.display = 'block';
  });
});
IMGmodal.addEventListener('click', () => {
  IMGmodal.style.display = 'none';
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') {
    IMGmodal.style.display = 'none';
  }
});
