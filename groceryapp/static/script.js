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

    const section = document.querySelector(".partners");
    const sectionPosition = section.getBoundingClientRect().top;

    // Check if the section is in view
    if (sectionPosition < windowHeight && sectionPosition > 0) {
        header.classList.add("show-title");
        description.classList.add("show-title");

        logos.forEach((logo, index) => {
            logo.classList.remove("show"); // Reset animation
            const logoPosition = logo.getBoundingClientRect().top;

            if (logoPosition < windowHeight) {
                setTimeout(() => {
                    logo.classList.add("show"); // Show logos with transition
                }, index * 200); // Stagger each logo by 200ms
            }
        });
    } else {
        // If the section is scrolled out of view, remove the classes
        header.classList.remove("show-title");
        description.classList.remove("show-title");
        logos.forEach(logo => {
            logo.classList.remove("show"); // Reset logos for the next scroll
        });
    }
});
