// document.addEventListener("scroll", () => {
//     const images = document.querySelectorAll(".blur-image");
//     const windowHeight = window.innerHeight;

//     images.forEach((image) => {
//         const imagePosition = image.getBoundingClientRect().top;

//         if (imagePosition < windowHeight) {
//             image.classList.add("show");
//         }
//     });
// });


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