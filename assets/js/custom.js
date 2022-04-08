!(function($) {
	"use strict";

// PreLoader
setTimeout(function(){
	$('.loader-wrap').fadeToggle();
  }, 2000);

// Sticky Navbar
window.onscroll = function() {myFunction()};
var navbar = document.getElementById("sticky-nav");
function myFunction() {
  if (window.scrollY >= 80) {
	navbar.classList.add("sticky")
  } else {
	navbar.classList.remove("sticky");
  }
}
//   VenoBox 
$(document).ready(function() {
$('.venobox').venobox({
	'share': false
});
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        if (form.checkValidity()) {
          document.getElementById("yes").style.display ="block";
          event.preventDefault()
          $('button').prop('disabled', true);
          $('input').prop('disabled', true);
          $('textarea').prop('disabled', true);
        } 
        form.classList.add('was-validated')
      }, false)
    })
})()

//   Owl Carousel
$("#video-slide").owlCarousel({
	pagination : false,
	loop:true,
	dots:false,
	nav:true,
	margin: 10,
	autoplay: true,
	smartSpeed: 1000,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	responsive:{
		0:{
			items:1
		},
	}
  });
  $("#testimonial-carousel").owlCarousel({
	pagination : false,
	loop:true,
	dots:false,
	nav:false,
	margin: 10,
	autoplay: true,
	smartSpeed: 1000,
	autoplayTimeout:5000,
	autoplayHoverPause:true,
	responsive:{
		0:{
			items:1
		},
		767:{
			items:2
		},
		1000:{
			items:3
		}
	}
  });

})(jQuery);