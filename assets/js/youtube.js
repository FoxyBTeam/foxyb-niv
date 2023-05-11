const videoIds = {
  video1: "Oio7Eksy3MI",
  video2: "Its6d0PBr0A",
  video3: "pyhfoy0h9GE",
  video4: "jeAzDJ9rvLk",
  video5: "H-FkTpaozRI",
  video6: "N8d_cDAIAB8",
  video7: "bmTpAIeZ2fM",
  video8: "oSuyEnSybvw",
  video9: "frxIV4fbhBE",
  video10: "ibzlP1CKL40",
  video11: "1KSTYcSSGkI",
  video12: "KR0K-HlP8Uc",
  video13: "67-AFhDjXVI",
  video14: "V1wu2xXka30",
  video15: "w31wgDgct8M",
  video16: "jcOgOgyGPyE",
  video17: "xAcrr8jJW64",
  video18: "vbC-vb7LpqQ"
};

// Define a function that checks which video corresponds to a div
function checkVideo(divId) {
  // Check if the provided div ID is in the videoIds object
  if (videoIds.hasOwnProperty(divId)) {
    const videoId = videoIds[divId];
    console.log(
      `Video ${divId.slice(-1)} setado para a div! Video ID: ${videoId}`
    );
  } else {
    console.log(`Nenhum vídeo definido para a div ${divId}`);
  }
}

// Output: "Video 2 setado para a div! Video ID: gthy475tyghs"
//   https://www.youtube.com/watch?v=
