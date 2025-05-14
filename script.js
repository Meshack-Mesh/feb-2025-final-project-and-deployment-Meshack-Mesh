// Form Validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;
  let formMsg = document.getElementById('formMsg');

  // Simple validation
  if (name === "" || email === "" || message === "") {
    formMsg.textContent = "Please fill in all fields!";
    formMsg
