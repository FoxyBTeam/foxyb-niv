const myVideo = document.getElementById("myVideo");
const div1 = document.querySelector(".div1");
const unlockaud = document.getElementById("unlock");
const newvideoaud = document.getElementById("newvideo");
const lock1 = document.getElementById("lock1");
const blob1 = document.getElementById("blob1");
const button = document.createElement('button');




function animations(div, lock, blob) {
  const divElement = document.querySelector(`.${div}`);
  const lockElement = document.getElementById(`${lock}`);
  const blobElement = document.getElementById(`${blob}`);

  divElement.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest"
  });
  divElement.classList.add("animated-box-shadow");
  newvideoaud.play();
  divElement.classList.add("animated-box-shadow");
  setTimeout(function () {
    unlockaud.play();
    lockElement.classList.remove("fa-lock");
    lockElement.classList.add("fa-lock-open");
    blobElement.src = "../assets/img/animations/blobanimationCOLOR.svg"
    divElement.classList.remove("blockedbg");
    divElement.classList.add("unblockedbg");
    setTimeout(function () {
      lockElement.classList.remove("fa-solid")
      lockElement.classList.remove("fa-lock-open");
      lockElement.classList.remove("fa-2xl")
      blobElement.classList.add("hidden");
      setTimeout(function () {
        videowatched(divElement, lockElement, blobElement)
      }, 5000);
    }, 3000);
  }, 3500);
}

function playVideoFullScreen() {
  const iframe = document.getElementById('mainVideo');
  iframe.requestFullscreen();
  iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}

function videowatched(div, lock, blob) {
  const divElement = document.querySelector(`.${div}`);
  const lockElement = document.getElementById(`${lock}`);
  const blobElement = document.getElementById(`${blob}`);
  divElement.classList.remove("unblockedbg");
  divElement.classList.add("watchedbg");
  divElement.innerHTML = "Video assistido.";
  divElement.style.display = "flex";
  divElement.style.justifyContent = "center";
  divElement.style.alignItems = "center";
  divElement.style.flexDirection = "column";
  const button = document.createElement('button');
  button.textContent = 'Assistir novamente?';
  button.classList.add('btn');
  button.addEventListener('click', () => watchagain(divElement, lockElement, blobElement));
  divElement.appendChild(button);
}

function watchagain(div, lock, blob) {
  const divElement = document.querySelector(`.${div}`);
  const iconElement = document.createElement('i');
  const newblobElement = document.createElement('img');
  
  // Reset elements
  divElement.innerHTML = "";
  divElement.classList.remove("watchedbg");
  divElement.classList.add("unblockedbg");
  
  lockElement.classList.add("fa-solid");
  lockElement.classList.add("fa-lock");
  lockElement.classList.add("fa-2xl");
  blobElement.src = "../assets/img/animations/blobanimation.svg";
  blobElement.classList.remove("hidden");
  const lockElement = document.getElementById(`${lock}`);
  const blobElement = document.getElementById(`${blob}`);
  // Play video
  // myVideo.currentTime = 0;
  // myVideo.play();
}