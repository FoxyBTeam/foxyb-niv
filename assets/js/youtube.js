// Define an object that maps div IDs to video IDs
const videoIds = {
    'div1': 'ibzlP1CKL40', 
    'div2': 'Its6d0PBr0A', 
    'div3': 'H-FkTpaozRI', 
    'div4': 'V1wu2xXka30', 
    'div5': 'Oio7Eksy3MI', 
    'div6': 'Vsz_9V87-hA', 
    'div7': '67-AFhDjXVI', 
    'div8': 'frxIV4fbhBE', 
    'div9': 'jeAzDJ9rvLk', 
    'div10': 'KR0K-HlP8Uc', 
    'div11': 'oSuyEnSybvw', 
    'div12': 'pyhfoy0h9GE', 
    'div13': 'jcOgOgyGPyE', 
    'div14': '1KSTYcSSGkI', 
    'div15': 'w31wgDgct8M', 
    'div16': 'bmTpAIeZ2fM', 
    'div17': 'w31wgDgct8M', 
    'div18': 'xAcrr8jJW64'
    // Add more div/video ID mappings as needed
  };
  
  // Define a function that checks which video corresponds to a div
  function checkVideo(divId) {
    // Check if the provided div ID is in the videoIds object
    if (videoIds.hasOwnProperty(divId)) {
      const videoId = videoIds[divId];
      console.log(`Video ${divId.slice(-1)} setado para a div! Video ID: ${videoId}`);
      // Do something with the video ID, such as embed the video in the div
    } else {
      console.log(`Nenhum vídeo definido para a div ${divId}`);
    }
  }
  
  // Example usage: check which video corresponds to div2
  // Output: "Video 2 setado para a div! Video ID: gthy475tyghs"
//   https://www.youtube.com/watch?v=