
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






// PARTNER SECTION ===================================


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





// FEATURES SECTION ========================================

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







// USER LOGIN SECTION ======================================

document.addEventListener('DOMContentLoaded', () => {
    const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".login-container");
  
    sign_up_btn.addEventListener("click", () => {
        container.classList.add("sign-up-mode");
        window.location.href = "/registration/";
    });
  
    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
      window.location.href = "/login/";
    });
    
  });





function checkpass()
{
    if(document.changepassword.newpassword.value!=document.changepassword.confirmpassword.value)
    {
        alert('New Password and Confirm Password field does not match');
        document.changepassword.confirmpassword.focus();
        return false;
    }
    return true;
}




// PRODUCT DETAIL 
(function ($) {
    $.fn.picZoomer = function (options) {
      var opts = $.extend({}, $.fn.picZoomer.defaults, options),
        $this = this,
        $picBD = $('<div class="picZoomer-pic-wp"></div>')
          .css({ width: opts.picWidth + "px", height: "400px" })
          .appendTo($this),
        $pic = $this.children("img").addClass("picZoomer-pic").appendTo($picBD),
        $cursor = $(
          '<div class="picZoomer-cursor"><i class="f-is picZoomCursor-ico"></i></div>'
        ).appendTo($picBD),
        cursorSizeHalf = { w: $cursor.width() / 2, h: $cursor.height() / 2 },
        $zoomWP = $(
          '<div class="picZoomer-zoom-wp"><img src="" alt="" class="picZoomer-zoom-pic"></div>'
        ).appendTo($this),
        $zoomPic = $zoomWP.find(".picZoomer-zoom-pic"),
        picBDOffset = { x: $picBD.offset().left, y: $picBD.offset().top };
 
      opts.zoomWidth = opts.zoomWidth || opts.picWidth;
      opts.zoomHeight = opts.zoomHeight || opts.picHeight;
      var zoomWPSizeHalf = { w: opts.zoomWidth / 2, h: opts.zoomHeight / 2 };
 

      $zoomWP.css({
        width: opts.zoomWidth + "px",
        height: opts.zoomHeight + "px"
      });
      $zoomWP.css(
        opts.zoomerPosition || { top: 0, left: opts.picWidth + 30 + "px" }
      );

      $zoomPic.css({
        width: opts.picWidth * opts.scale + "px",
        height: opts.picHeight * opts.scale + "px"
      });
 

      $picBD
        .on("mouseenter", function (event) {
          $cursor.show();
          $zoomWP.show();
          $zoomPic.attr("src", $pic.attr("src"));
        })
        .on("mouseleave", function (event) {
          $cursor.hide();
          $zoomWP.hide();
        })
        .on("mousemove", function (event) {
          var x = event.pageX - picBDOffset.x,
            y = event.pageY - picBDOffset.y;
 
          $cursor.css({
            left: x - cursorSizeHalf.w + "px",
            top: y - cursorSizeHalf.h + "px"
          });
          $zoomPic.css({
            left: -(x * opts.scale - zoomWPSizeHalf.w) + "px",
            top: -(y * opts.scale - zoomWPSizeHalf.h) + "px"
          });
        });
      return $this;
    };
    $.fn.picZoomer.defaults = {
      picHeight: 460,
      scale: 2.5,
      zoomerPosition: { top: "0", left: "380px" },
 
      zoomWidth: 400,
      zoomHeight: 460
    };
  })(jQuery);
 
  $(document).ready(function () {
    $(".picZoomer").picZoomer();
    $(".piclist li").on("click", function (event) {
      var $pic = $(this).find("img");
      $(".picZoomer-pic").attr("src", $pic.attr("src"));
    });
 
    var owl = $("#recent_post");
    owl.owlCarousel({
      margin: 20,
      dots: false,
      nav: true,
      navText: [
        "<i class='fa fa-chevron-left'></i>",
        "<i class='fa fa-chevron-right'></i>"
      ],
      autoplay: true,
      autoplayHoverPause: true,
      responsive: {
        0: {
          items: 2
        },
        600: {
          items: 3
        },
        1000: {
          items: 5
        },
        1200: {
          items: 4
        }
      }
    });
 
    $(".decrease_").click(function () {
      decreaseValue(this);
    });
    $(".increase_").click(function () {
      increaseValue(this);
    });
    function increaseValue(_this) {
      var value = parseInt($(_this).siblings("input#number").val(), 10);
      value = isNaN(value) ? 0 : value;
      value++;
      $(_this).siblings("input#number").val(value);
    }
 
    function decreaseValue(_this) {
      var value = parseInt($(_this).siblings("input#number").val(), 10);
      value = isNaN(value) ? 0 : value;
      value < 1 ? (value = 1) : "";
      value--;
      $(_this).siblings("input#number").val(value);
    }
  });






//   CART=============
var prolenth = '{{lengthpro}}';
    var mytotal = 0;
    for(var i=1;i<=prolenth*1;i++){
        totalprice = parseFloat(document.getElementById('totalprice-'+i).innerHTML);
        var mytotal = parseFloat(mytotal) + (totalprice);
    }
    document.getElementById('total-price').innerHTML  = mytotal;
