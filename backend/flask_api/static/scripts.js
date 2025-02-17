// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function () {
    
  // =====================================
  // 📌 NAVBAR SHRINK ON SCROLL
  // =====================================
  function navbarShrink() {
      const navbar = document.querySelector("#mainNav");
      if (!navbar) return;
      if (window.scrollY === 0) {
          navbar.classList.remove("navbar-shrink");
      } else {
          navbar.classList.add("navbar-shrink");
      }
  }
  
  // Run navbar shrink on page load and scroll
  navbarShrink();
  document.addEventListener("scroll", navbarShrink);

  // =====================================
  // 📌 BOOTSTRAP SCROLLSPY (ACTIVE NAVIGATION LINKS)
  // =====================================
  const mainNav = document.querySelector("#mainNav");
  if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
          target: "#mainNav",
          rootMargin: "0px 0px -40%",
      });
  }

  // =====================================
  // 📌 COLLAPSE MOBILE NAVIGATION ON LINK CLICK
  // =====================================
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navLinks = document.querySelectorAll("#navbarResponsive .nav-link");

  navLinks.forEach(function (navLink) {
      navLink.addEventListener("click", function () {
          if (window.getComputedStyle(navbarToggler).display !== "none") {
              navbarToggler.click();
          }
      });
  });

  // =====================================
  // 📌 ANIMATED STATISTICS SECTION
  // =====================================
  
  function incrementNumbers() {
      document.querySelectorAll(".incremental").forEach(function (el) {
          let target = parseInt(el.getAttribute("data-increment"));
          let count = 0;
          let incrementSpeed = Math.floor(2000 / target); // Adjust speed dynamically

          let counter = setInterval(function () {
              count += Math.ceil(target / 100); // Increment gradually
              if (count >= target) {
                  count = target;
                  clearInterval(counter);
              }
              el.innerText = count.toLocaleString(); // Format with commas
          }, incrementSpeed);
      });
  }
  

  function isInViewport(element) {
      let rect = element.getBoundingClientRect();
      return rect.top < window.innerHeight && rect.bottom >= 0;
  }

  function checkScroll() {
      document.querySelectorAll(".incremental").forEach(function (el) {
          if (isInViewport(el) && !el.classList.contains("animated")) {
              el.classList.add("animated");
              incrementNumbers();
          }
      });
  }

  window.addEventListener("scroll", checkScroll);
  checkScroll(); // Run on page load in case section is visible

});
window.addEventListener("scroll", function() {
  let header = document.querySelector(".header");
  if (window.scrollY > 50) { // Adjust the scroll threshold as needed
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

