function toggleNav() {
  var navMenu = document.getElementById("navMenu");
  navMenu.classList.toggle("active");
}

// // Menambahkan event listener saat dokumen dimuat
// document.addEventListener("DOMContentLoaded", function () {
//   var hamburger = document.querySelector(".hamburger");
//   var navMenu = document.getElementById("navMenu");

//   hamburger.addEventListener("click", function () {
//     toggleNav();
//   });
// });

// // Menutup menu navigasi saat link di dalam menu diklik
// document.addEventListener("DOMContentLoaded", function () {
//   var navLinks = document.querySelectorAll("#navMenu a");

//   navLinks.forEach(function (link) {
//     link.addEventListener("click", function () {
//       var navMenu = document.getElementById("navMenu");
//       navMenu.classList.remove("active");
//     });
//   });
// });
