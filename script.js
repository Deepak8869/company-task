// script.js

function changeImage(imageSrc, bgColor) {
  document.getElementById('section3img').src = imageSrc;
  document.getElementById('section3container').style.backgroundColor = bgColor;
}


document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("contactModal");
  const btn = document.querySelector(".contact-btn");
  const span = document.getElementsByClassName("close-btn")[0];

  // Open the modal when the button is clicked
  btn.onclick = function() {
      modal.style.display = "block";
  }

  // Close the modal when the 'x' is clicked
  span.onclick = function() {
      modal.style.display = "none";
  }

  // Close the modal when clicking outside of the modal content
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});
