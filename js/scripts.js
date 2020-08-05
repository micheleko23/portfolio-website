

console.log ("Hi there, welcome!")

function menuToggle() {
  var x = document.getElementById('myNavtoggle');
  if (x.className === 'navtoggle') {
    x.className += ' responsive';
  } else {
    x.className = 'navtoggle';
  }

}

$(window).on('load', function() {
  $("#container1").twentytwenty();
});

$(window).on('load', function() {
  $("#container2").twentytwenty();
});

$(window).on('load', function() {
  $("#container3").twentytwenty();
});


$(function(){
  $(".twentytwenty-container").twentytwenty({
    default_offset_pct: 0.7, // How much of the before image is visible when the page loads
    orientation: 'vertical', // Orientation of the before and after images ('horizontal' or 'vertical')
    before_label: 'First version', // Set a custom before label
    after_label: 'Final version', // Set a custom after label
    no_overlay: true, //Do not show the overlay with before and after
    move_slider_on_hover: true, // Move slider on mouse hover?
    move_with_handle_only: true, // Allow a user to swipe anywhere on the image to control slider movement.
    click_to_move: false // Allow a user to click (or tap) anywhere on the image to move the slider to that location.
  });
});


// Open the Modal
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

// Close the Modal
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
