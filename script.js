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

const submitBtn=document.getElementById('submit')

submitBtn.addEventListener('click',(event)=>{
  event.preventDefault()

  const formData={
    "data": {
        "Name": document.getElementById("name").value,
        "Email": document.getElementById("email").value,
        "Date": document.getElementById("date").value,
        "Service": document.getElementById("service").value,
        "PhoneNumber": document.getElementById("phone").value,
        "Message": document.getElementById("message").value
      }
  }

  fetch('https://sheetdb.io/api/v1/ovbxjani61f31',{
    method:"Post",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify(formData)

  })
  .then((data)=>data.json())
  .then((data)=>{
    if(data.created){
      alert("Your appointment has been scheduled!")
      document.getElementById('appointmentForm').reset()
    }
  })
  .catch(error=>{
    alert('Error while confirming appointment,Please contact us directly')
  })
})