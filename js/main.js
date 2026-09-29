document.addEventListener("DOMContentLoaded", function () {
  // Mobile nav toggle
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".main-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen ? "true" : "false");
    });
  }

  // Tap-to-open Products dropdown on mobile (hover doesn't apply on touch)
  var dropdownParent = document.querySelector(".has-dropdown > a");
  if (dropdownParent) {
    dropdownParent.addEventListener("click", function (e) {
      if (window.innerWidth <= 860) {
        e.preventDefault();
        dropdownParent.parentElement.classList.toggle("open");
      }
    });
  }

  // Pre-select product dropdown on the contact form when arriving via
  // a "Request a Quote for X" link from a product page (?product=hibiscus)
  var productField = document.getElementById("product");
  if (productField) {
    var params = new URLSearchParams(window.location.search);
    var requested = params.get("product");
    if (requested) {
      for (var i = 0; i < productField.options.length; i++) {
        if (productField.options[i].value.toLowerCase() === requested.toLowerCase()) {
          productField.selectedIndex = i;
          break;
        }
      }
    }
  }
});
