const belowcontent = document.getElementById("belowcontent");
const urlParams = new URLSearchParams(window.location.search);
const videoID = urlParams.get("video");
const urlid = urlParams.get("id");
const hasW = urlParams.get("finished");
const errorContainer = document.getElementById("errorContainer");
const errorMessage = document.getElementById("errorMessage");
const errorInfo = document.getElementById("errorInfo");
const unlockaud = document.getElementById("unlock");
const newvideoaud = document.getElementById("newvideo");
const presentaudio = document.getElementById("drums");

async function fetchdata() {
	const response = await fetch("/data.json").catch((err) => {
		errorMessage.innerText = "Erro ao carregar os dados do vídeo.";
		errorInfo.innerText = "API Error";
		errorContainer.style.display = "flex";
	});
	const data = await response.json();
	hydratepage(data);
}

console.log("urlid: " + urlid);

function hydratepage(data) {
	const videoData = data.find((item) => item.id === parseInt(urlid));
	console.log(videoData);
	const youtubeId = videoData ? videoData.youtubeId : null;
	console.log(youtubeId);
	let player;
	try {
		player = new YT.Player("mainVideo", {
			height: "610",
			width: "1080",
			videoId: youtubeId,
			events: {
				onStateChange: (event) => {
					if (event.data == YT.PlayerState.ENDED) {
						document.getElementById("mainvid").classList.remove("watching");
						if (document.fullscreenElement) {
							document.exitFullscreen();
						}
						setTimeout(() => {
							unlock(videoData);
						}, 3000);
					} else if (event.data == YT.PlayerState.PLAYING) {
						document.getElementById("mainvid").classList.add("watching");
					}
				},
				onError: (event) => {
					showErrorMessage(event.data);
				},
			},
		});
	} catch (e) {
		showErrorMessage(e);
	}
	if (player) {
		showIntro(videoData);
	}
}

function modifyBackgroundText(text) {
	const svgContent =
		document.getElementById("introcontainer").style.backgroundImage;

	const decodedSvgContent = svgContent.slice(
		'url("data:image/svg+xml;utf8,'.length,
		-2,
	);

	const newText = decodedSvgContent.replace(/[\?]+/g, text);
	const encodedSvgContent = encodeURIComponent(newText);

	document.getElementById("introcontainer").style.backgroundImage =
		`url("data:image/svg+xml;utf8,${encodedSvgContent}")`;
	document.getElementById("introtext").innerHTML = text;
}

function unlock() {
	newvideoaud.play();
	setTimeout(function () {
		unlockaud.play();
	}, 3500);
}

function showIntro(videoData) {
	console.log(videoData);
	presentaudio.play();
	setTimeout(() => {
		modifyBackgroundText(videoData.name);
		setTimeout(() => {
			document.getElementById("mainVideo").style.opacity = 1;
			document.getElementById("introcontainer").style.opacity = 0;
			setTimeout(() => {
				document.getElementById("introcontainer").style.display = "none";
			}, 1200);
		}, 6000);
	}, 3900);
}
function showErrorMessage(e) {
	const mainvideobody = document.getElementById("mainVideo");
	mainvideobody.style.display = "none";
	errorContainer.style.display = "flex";
	if (e == 2) {
		errorMessage.innerHTML =
			"ID incorreto ou faltando. Aguarde para próximas instruções!";
		errorInfo.innerHTML = `ID: ${videoID} & HasW: ${hasW}`;
	} else if (e == 100) {
		errorMessage.innerHTML =
			"Video indisponível (alguém fez caca na hora do upload hehe). Aguarde para próximas instruções!";
	} else if (e == 5) {
		errorMessage.innerHTML = "Erro no player. Por favor atualize a página!";
	} else if (e == 101 || e == 105) {
		errorMessage.innerHTML =
			"Video privado ou impossível de acessar. Aguarde para próximas instruções!";
	} else {
		errorMessage.innerHTML = `Erro desconhecido. ${e}`;
		errorInfo.innerHTML = `ID: ${videoID} HasW: ${hasW} url: ${window.location.href} `;
	}
}
document.addEventListener("DOMContentLoaded", (event) => {
	setTimeout(() => {
		fetchdata();
	}, 500);
});
