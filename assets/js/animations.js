const mainVideo = document.getElementById("mainVideo");
const div1 = document.querySelector(".div1");
const unlockaud = document.getElementById("unlock");
const newvideoaud = document.getElementById("newvideo");
const lock1 = document.getElementById("lock1");
const blob1 = document.getElementById("blob1");
const button = document.createElement("button");

function animations(div, lock, blob) {
  const divElement = document.querySelector(`.${div}`);
  const lockElement = document.getElementById(`${lock}`);
  const blobElement = document.getElementById(`${blob}`);
  const overlayElement = document.querySelector(`.${div} .overlay`);
  const videoElement = document.querySelector(`.${div} .videoframe`);
  console.log(`div: ${div}` + `lock: ${lock}` + `blob: ${blob}`);
  divElement.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
  divElement.classList.add("animated-box-shadow");
  newvideoaud.play();
  setTimeout(function () {
    unlockaud.play();
    lockElement.classList.remove("fa-lock");
    lockElement.classList.add("fa-lock-open");
    blobElement.src = "../assets/img/animations/blobanimationCOLOR.svg";
    divElement.classList.remove("blockedbg");
    divElement.classList.add("unblockedbg");
    setTimeout(function () {
      lockElement.classList.remove("fa-solid");
      lockElement.classList.remove("fa-lock-open");
      lockElement.classList.remove("fa-2xl");
      divElement.classList.remove("animated-box-shadow");
      blobElement.classList.add("hidden");
      videoElement.classList.remove("hidden");
      overlayElement.style.display = "none";
    }, 3000);
  }, 3500);
}

function playVideoFullScreen() {
  const iframe = document.getElementById("mainVideo");
  iframe.requestFullscreen();
  iframe.contentWindow.postMessage(
    '{"event":"command","func":"playVideo","args":""}',
    "*"
  );

  // Add event listener to detect when full screen mode changes
  document.addEventListener("fullscreenchange", function () {
    if (!document.fullscreenElement) {
      // If the user exits full screen mode, exit full screen on behalf of the user
      document.exitFullscreen();
    }
  });
}

function videowatched(div) {
  const divElement = document.querySelector(`.${div}`);
  divElement.classList.remove("unblockedbg");
  divElement.classList.add("watchedbg");

  if (document.querySelector(`.${div} .watchagainoverlay`) === null) {
    const watchAgainOverlay = document.createElement("div");
    watchAgainOverlay.classList.add("watchagainoverlay");
    watchAgainOverlay.innerHTML = "Video assistido.";
    watchAgainOverlay.style.display = "flex";
    watchAgainOverlay.style.justifyContent = "center";
    watchAgainOverlay.style.alignItems = "center";
    watchAgainOverlay.style.flexDirection = "column";
    watchAgainOverlay.style.width = "100%";
    watchAgainOverlay.style.height = "100%";
    watchAgainOverlay.style.backgroundColor = "#000000";
    watchAgainOverlay.style.zIndex = "1";
    const button = document.createElement("button");
    button.textContent = "Assistir novamente?";
    button.classList.add("btn");
    button.addEventListener("click", () => watchagain(div));
    watchAgainOverlay.appendChild(button);

    divElement.appendChild(watchAgainOverlay);
  }
}

function watchagain(div) {
  const watchAgainOverlay = document.querySelector(
    `.${div} .watchagainoverlay`
  );
  watchAgainOverlay.remove();
}

mainVideo.addEventListener("ended", function () {
  console.log("Main Video assistido");
  setTimeout(function () {
    if (document.fullscreenElement) {
      document.exitFullscreen();
    }
    animations2(div1, lock1, blob1);
  }, 5000);
});
