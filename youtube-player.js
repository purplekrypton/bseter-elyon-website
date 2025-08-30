// List of YouTube video IDs to play in sequence
const videos = [
  'WZb81LfpOQE',  // Video 1
  'J5oKelbxUyc',  // Video 2
  'LgfHw6lGEPw',  // Video 3
  'PrMGXlstRRE'   // Video 4
];

let current = 0;
let player;

// Called automatically by the YouTube IFrame API when ready
function onYouTubeIframeAPIReady() {
  player = new YT.Player('youtube-player', {
    events: {
      'onStateChange': onPlayerStateChange
    }
  });
}

// Detect when a video ends and load the next one
function onPlayerStateChange(event) {
  // event.data === 0 means video ended
  if (event.data === YT.PlayerState.ENDED) {
    current = (current + 1) % videos.length;  // Loop back to first video after last
    player.loadVideoById({
      'videoId': videos[current],
      'startSeconds': 0
    });
  }
}
