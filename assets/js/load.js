let loadingIntervalId;
let loadingMessageIndex = 0;
const loadingMessages = ["Loading", "Loading.", "Loading..", "Loading..."];

function switchLoadingText() {
    const x = document.getElementById("txt");
    if (x) {
        x.innerHTML = loadingMessages[loadingMessageIndex];
        loadingMessageIndex = (loadingMessageIndex + 1) % loadingMessages.length;
    }
}

function startLoadingAnimation() {
    // Start switching the loading text every 500ms
    loadingIntervalId = setInterval(switchLoadingText, 500);

    // Stop switching the loading text after 10 seconds
    setTimeout(() => {
        clearInterval(loadingIntervalId);
    }, 10000);
}


async function animloader2() {
    const loadingp = document.getElementById('loadingp');
    const loadingmessages = ["Comendo uma pizza.",
        "Dando rage quit em um jogo.",
        "Assistindo a Amy abrir a porta.",
        "Capinando mato.",
        "Escrevendo nomes no meu rosto.",
        "Eu tentei antes e funcionou!",
        "MEU CARTÃO DE CRÉDITO VAI VENCER!!",
        "Eu comprei uma nova peruca!",
        "Assistindo 드라마 (dorama)",
        "Fazendo ASMR (uma vez ao mês é o suficiente :kappa:)",
        "Cuidando da Amy e da Kali"]
    const random = loadingmessages[Math.floor(Math.random() * loadingmessages.length)];
    if (loadingp) {
        loadingp.innerHTML = random;
    }
}
