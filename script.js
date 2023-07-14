// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

var prevScrollPos = window.pageYOffset;

window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    document.getElementById("site-header").classList.remove("hidden");
  } else {
    document.getElementById("site-header").classList.add("hidden");
  }

  prevScrollPos = currentScrollPos;
};

// // Ambil semua elemen tombol menu
// const menuItems = document.querySelectorAll('nav ul li a');

// // Tambahkan event listener untuk setiap tombol menu
// menuItems.forEach(item => {
//   item.addEventListener('click', function() {
//     // Hapus kelas 'active' dari tombol menu yang saat ini aktif
//     const activeItem = document.querySelector('nav ul li a.active');
//     activeItem.classList.remove('active');
    
//     // Tambahkan kelas 'active' pada tombol menu yang baru diklik
//     this.classList.add('active');
//   });
// });

var navLinks = document.getElementsByClassName("nav-link");

window.addEventListener("scroll", function() {
  var currentSection = "";

  Array.from(navLinks).forEach(function(navLink) {
    var sectionId = navLink.getAttribute("href").slice(1);
    var section = document.getElementById(sectionId);
    var sectionTop = section.offsetTop;
    var sectionBottom = section.offsetTop + section.offsetHeight;

    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
      currentSection = sectionId;
    }
  });

  Array.from(navLinks).forEach(function(navLink) {
    navLink.classList.remove("active");
    if (navLink.getAttribute("href").slice(1) === currentSection) {
      navLink.classList.add("active");
    }
  });
});

// Form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Perform form validation or submission logic here

  // Clear form fields
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  // Display success message
  alert('Thank you for your message!');
});

