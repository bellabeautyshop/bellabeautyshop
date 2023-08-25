// to scroll to an specific element/container
function scrollToElement(elementId) {
    var targetElement = document.getElementById(elementId);
    if (targetElement) {
      window.scrollTo({ top: targetElement.offsetTop });
      // to close the navbar overlay, if open, when page has scrolled
      closeMenuOverlaySmScreen();
    }
}


// to show and hide the menu overlay | small screen
const overlay = document.getElementById('menu-overlay-small-screen-whole-con');

function openMenuOverlaySmScreen() {
  overlay.classList.remove("animate__animated", "animate__fadeOutDown")
  overlay.classList.add("animate__animated", "animate__fadeInDown")
  overlay.classList.remove('d-none');
  overlay.classList.add('d-block');
}

function closeMenuOverlaySmScreen() {
  overlay.classList.remove("animate__animated", "animate__fadeInDown")
  overlay.classList.add("animate__animated", "animate__fadeOutDown")
  overlay.classList.remove('d-block');
  // overlay.classList.add('d-none');
}


// go to top of the page
var elementGoToTop = document.getElementById("go-to-top-sec");

$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 700) {
      $('#go-to-top-sec').fadeIn();
  } else {
      $('#go-to-top-sec').fadeOut();
  }
});

function scrollToTop() {
  $(window).scrollTop(0);
}

  