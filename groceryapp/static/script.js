
// NAVBAR======================


document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-link');

  // Get the current path
  const currentPath = window.location.pathname;

  navLinks.forEach(link => {
      // If the link's href matches the current path, set it as active
      if (link.getAttribute('href') === currentPath) {
          link.classList.add('active');
      } else {
          link.classList.remove('active');
      }

      // Add click event listener
      link.addEventListener('click', function() {
          // Remove the active class from all links
          navLinks.forEach(nav => nav.classList.remove('active'));
          // Add the active class to the clicked link
          this.classList.add('active');
      });
  });
});


function toggleDropdown(event) {
    event.preventDefault(); // Prevent default link behavior
    const dropdownMenu = event.target.nextElementSibling;
    dropdownMenu.style.display =
        dropdownMenu.style.display === "block" ? "none" : "block";
}

// Close dropdown if clicked outside
document.addEventListener("click", function (event) {
    const dropdowns = document.querySelectorAll(".dropdown-menu");
    dropdowns.forEach((dropdown) => {
        if (!dropdown.parentElement.contains(event.target)) {
            dropdown.style.display = "none";
        }
    });
});











document.addEventListener("scroll", () => {
    const logos = document.querySelectorAll(".partner-logo");
    const header = document.querySelector(".partners-title");
    const description = document.querySelector(".partners-description");
    const windowHeight = window.innerHeight;

    // Check the position of the header
    const headerPosition = header.getBoundingClientRect().top;

    if (headerPosition < windowHeight) {
        header.classList.add("show-title"); // Show header with transition
        description.classList.add("show-title"); // Optional: Show description with the same transition
    }

    logos.forEach((logo, index) => {
        const logoPosition = logo.getBoundingClientRect().top;

        if (logoPosition < windowHeight) {
            // Show logos with staggered effect
            setTimeout(() => {
                logo.classList.add("show");
            }, index * 200); // Stagger each logo by 200ms
        }
    });
});






document.addEventListener('DOMContentLoaded', function () {
  const items = document.querySelectorAll('.item');

  // Create an intersection observer to trigger animations
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              // Add the "show" class when the item is in view
              entry.target.classList.add('show-feature');
              observer.unobserve(entry.target); // Stop observing once shown
          }
      });
  });

  // Observe each item
  items.forEach(item => {
      observer.observe(item);
  });
});









document.addEventListener('DOMContentLoaded', () => {
  const sign_in_btn = document.querySelector("#sign-in-btn");
  const sign_up_btn = document.querySelector("#sign-up-btn");
  const container = document.querySelector(".login-container");

  sign_up_btn.addEventListener("click", () => {
    container.classList.add("sign-up-mode");
  });

  sign_in_btn.addEventListener("click", () => {
    container.classList.remove("sign-up-mode");
  });
  
});