const mainVideo = document.getElementById("mainVideo");
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
  console.log(`div: ${div}` + `lock: ${lock}` + `blob: ${blob}`);
  divElement.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest"
  });
  divElement.classList.add("animated-box-shadow");
  newvideoaud.play();
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
      divElement.classList.remove("animated-box-shadow");
      blobElement.classList.add("hidden");
      setTimeout(function () {
        videowatched(`${div}`, `${lock}`, `${blob}`);
      }, 5000);
    }, 3000);
  }, 3500);
}

function playVideoFullScreen() {
  const iframe = document.getElementById('mainVideo');
  iframe.requestFullscreen();
  iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');

  // Add event listener to detect when full screen mode changes
  document.addEventListener("fullscreenchange", function () {
    if (!document.fullscreenElement) {
      // If the user exits full screen mode, exit full screen on behalf of the user
      document.exitFullscreen();
    }
  });
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
  // mainVideo.currentTime = 0;
  // mainVideo.play();
}

mainVideo.addEventListener('ended', function() {
  console.log("Main Video assistido");
  setTimeout(function() {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    animations(div1, lock1, blob1);
  }, 5000);
});