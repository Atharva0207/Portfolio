// Contact Me button functionality
const contactBtn = document.getElementById("contact-btn");
contactBtn.addEventListener("click", () => {
  alert("Please feel free to reach out to me through the provided contact information.");
});

// Project buttons functionality
const projectButtons = document.querySelectorAll(".project-btn");
projectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    alert("This feature is under development. Check back soon for more details!");
  });
});
