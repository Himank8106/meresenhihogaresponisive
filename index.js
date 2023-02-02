// var video = document.getElementById("myVideo");

// var btn = document.getElementById("myBtn");

// function myFunction() {
//     if (video.paused) {
//         video.play();
//         btn.innerHTML = "Pause";
//     } else {
//         video.pause();
//         btn.innerHTML = "Play";
//     }
// }

// $(document).ready(function () {

//     $(".toggle-accordion").on("click", function () {
//         var accordionId = $(this).attr("accordion-id"),
//             numPanelOpen = $(accordionId + ' .collapse.in').length;

//         $(this).toggleClass("active");

//         if (numPanelOpen == 0) {
//             openAllPanels(accordionId);
//         } else {
//             closeAllPanels(accordionId);
//         }
//     })

//     openAllPanels = function (aId) {
//         console.log("setAllPanelOpen");
//         $(aId + ' .panel-collapse:not(".in")').collapse('show');
//     }
//     closeAllPanels = function (aId) {
//         console.log("setAllPanelclose");
//         $(aId + ' .panel-collapse.in').collapse('hide');
//     }

// });
VANTA.WAVES({
  el: ".domain_name",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: "#418fd4",
  shininess: 40.0,
  waveSpeed: 1.2,
});




AOS.init({
  duration: 1200,
  delay: 500,
});





lide = 1;
const mediaQuery = window.matchMedia('(min-width: 768px)')
function handleTabletChange(e) {
  // Check if the media query is true
  if (e.matches) {
    // Then log the following message to the console
    console.log('Media Query Matched!')
    slide = 2;
  }
}
mediaQuery.addListener(handleTabletChange)

handleTabletChange(mediaQuery)


/*==================== blog SWIPER  ====================*/
let swiper = new Swiper(".blog__container", {
  cssMode: true,
  loop: true,
  slidesPerView: slide,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

})
