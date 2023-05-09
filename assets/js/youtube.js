// Define an object that maps div IDs to video IDs
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
  // video1: "X8avbciUP3c",
  // video2: "23RpZqv-wuw",
  // video3: "X8avbciUP3c",
  // video4: "23RpZqv-wuw",
  // video5: "X8avbciUP3c",
  // video6: "23RpZqv-wuw",
  // video7: "X8avbciUP3c",
  // video8: "23RpZqv-wuw",
  // video9: "X8avbciUP3c",
  // video10: "23RpZqv-wuw",
  // video11: "X8avbciUP3c",
  // video12: "X8avbciUP3c",
  // video13: "X8avbciUP3c",
  // video14: "X8avbciUP3c",
  // video15: "X8avbciUP3c",
  // video16: "X8avbciUP3c",
  // video17: "X8avbciUP3c",
  // video18: "X8avbciUP3c",

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
