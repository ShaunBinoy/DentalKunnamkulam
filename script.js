// Change the navbar toggler icon to an "X" on click
document.addEventListener('DOMContentLoaded', function() {
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100
  });
});
const navbarToggler = document.getElementById("navbarToggler");
navbarToggler.addEventListener("click", function () {
  const togglerIcon = navbarToggler.querySelector("i");
  if (togglerIcon.classList.contains("fa-bars")) {
    togglerIcon.classList.remove("fa-bars");
    togglerIcon.classList.add("fa-times");
  } else {
    togglerIcon.classList.remove("fa-times");
    togglerIcon.classList.add("fa-bars");
  }
});
function showUpIcon() {
  const dropdownIcon = document.getElementById("dropdownIcon");
  dropdownIcon.classList.remove("fa-chevron-down");
  dropdownIcon.classList.add("fa-chevron-up");
}

function showDownIcon() {
  const dropdownIcon = document.getElementById("dropdownIcon");
  dropdownIcon.classList.remove("fa-chevron-up");
  dropdownIcon.classList.add("fa-chevron-down");
}

document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('appointmentForm');

  form.addEventListener('submit', function (event) {
    if (!form.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
    }

    form.classList.add('was-validated');
  }, false);
});

