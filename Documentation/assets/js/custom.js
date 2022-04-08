window.onscroll = function() {myFunction()};
var navbar = document.getElementById("nav-con");
function myFunction() {
  if (window.scrollY >= 200) {
	navbar.classList.add("sticky")
  } else {
	navbar.classList.remove("sticky");
  }
}