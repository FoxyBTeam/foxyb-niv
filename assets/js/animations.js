const myVideo = document.getElementById("myVideo");
const div1 = document.querySelector(".div1");
const unlockaud = document.getElementById("unlock");
const newvideoaud = document.getElementById("newvideo");
const lock1 = document.getElementById("lock1");
const blob1 = document.getElementById("blob1");

myVideo.addEventListener("ended", () => {
  div1.scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest"
  });
  div1.classList.add("animated-box-shadow");
  newvideoaud.play();
  setTimeout(function () {
    unlockaud.play();
    lock1.classList.remove("fa-lock");
    lock1.classList.add("fa-lock-open");
    blob1.src = "../assets/img/animations/blobanimationCOLOR.svg"
    div1.classList.remove("blockedbg");
    div1.classList.add("unblockedbg");
    setTimeout(function () {
      lock1.classList.remove("fa-solid")
      lock1.classList.remove("fa-lock-open");
      lock1.classList.remove("fa-2xl")
      blob1.classList.add("hidden");
    }, 3000);
  }, 3500);
});


function animations(div, lock, blob) {
  const divElement = document.querySelector(`.${div}`);
  const lockElement = document.getElementById(`.${lock}`);
  const blobElement = document.getElementById(`.${blob}`);
  
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
      blobElement.classList.add("hidden");
    }, 3000);
  }, 3500);
}




window.onload = function () {
  setTimeout(function () {
    var video = document.getElementById("myVideo");
    video.muted = true;
    video.play();
    video.controls = true;
    setTimeout(function () {
      video.muted = false;
    }, 300);
  }, 5000);
}