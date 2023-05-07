// Define an object that maps div IDs to video IDs
const videoIds = {
  // video1: "ibzlP1CKL40",
  // video2: "Its6d0PBr0A",
  // video3: "H-FkTpaozRI",
  // video4: "V1wu2xXka30",
  // video5: "Oio7Eksy3MI",
  // video6: "Vsz_9V87-hA",
  // video7: "67-AFhDjXVI",
  // video8: "frxIV4fbhBE",
  // video9: "jeAzDJ9rvLk",
  // video10: "KR0K-HlP8Uc",
  // video11: "oSuyEnSybvw",
  // video12: "pyhfoy0h9GE",
  // video13: "jcOgOgyGPyE",
  // video14: "1KSTYcSSGkI",
  // video15: "w31wgDgct8M",
  // video16: "bmTpAIeZ2fM",
  // video17: "w31wgDgct8M",
  // video18: "xAcrr8jJW64",

  video1: "X8avbciUP3c",
  video2: "23RpZqv-wuw",
  video3: "X8avbciUP3c",
  video4: "23RpZqv-wuw",
  video5: "X8avbciUP3c",
  video6: "23RpZqv-wuw",
  video7: "X8avbciUP3c",
  video8: "23RpZqv-wuw",
  video9: "X8avbciUP3c",
  video10: "23RpZqv-wuw",
  video11: "X8avbciUP3c",
  video12: "X8avbciUP3c",
  video13: "X8avbciUP3c",
  video14: "X8avbciUP3c",
  video15: "X8avbciUP3c",
  video16: "X8avbciUP3c",
  video17: "X8avbciUP3c",
  video18: "X8avbciUP3c",

  // Add more div/video ID mappings as needed
};

// Define a function that checks which video corresponds to a div
function checkVideo(divId) {
  // Check if the provided div ID is in the videoIds object
  if (videoIds.hasOwnProperty(divId)) {
    const videoId = videoIds[divId];
    console.log(
      `Video ${divId.slice(-1)} setado para a div! Video ID: ${videoId}`
    );
    // Do something with the video ID, such as embed the video in the div
  } else {
    console.log(`Nenhum vídeo definido para a div ${divId}`);
  }
}

// Example usage: check which video corresponds to div2
// Output: "Video 2 setado para a div! Video ID: gthy475tyghs"
//   https://www.youtube.com/watch?v=
