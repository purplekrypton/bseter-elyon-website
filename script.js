// ================== Navbar Toggle ==================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
  });

  // Close menu on link click
  document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("show");
      hamburger.classList.remove("active");
    });
  });
}

// ================== Navbar Scroll Effect ==================
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// // ================== Swiper for What We Do ==================
// var swiper = new Swiper(".swiper-container", {
//   loop: true,
//   slidesPerView: 1,
//   spaceBetween: 20,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   breakpoints: {
//     768: { slidesPerView: 2 }, // tablets
//     1024: { slidesPerView: 3 } // desktops
//   }
// });



// List of YouTube video IDs to play in sequence
const videos = [
  'WZb81LfpOQE',  
  'J5oKelbxUyc',  
  'LgfHw6lGEPw',  
  'PrMGXlstRRE'   
];

let current = 0;
let player;

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
