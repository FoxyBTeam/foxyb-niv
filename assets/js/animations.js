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
        button.addEventListener('click', () => video(div));
        divElement.appendChild(button);
      }, 5000);
    }, 3000);
  }, 3500);
}

function playVideoFullScreen() {
  const iframe = document.getElementById('mainVideo');
  iframe.requestFullscreen();
  iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
}
