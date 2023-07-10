//Scroll
document.addEventListener('DOMContentLoaded', function() {
    var reffydianLink = document.getElementById('js-bawah');
    var bawahSection = document.getElementById('bawah');

    reffydianLink.addEventListener('click', function(event) {
      event.preventDefault();

      bawahSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
});

//Navbar
window.addEventListener("scroll", function() {
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("scrolled", window.scrollY > 0);
});