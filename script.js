  // Get references to the HTML elements
  const signupFormPage = document.getElementById("signup-form-page");
  const successMessagePage = document.getElementById("success-message-page");
  const emailInput = document.getElementById("email");
  const signupButton = document.getElementById("signup-button");
  const backButton = document.getElementById("back-button");

  // Function to show the success message page
  function showSuccessMessage() {
    signupFormPage.style.display = "none";
    successMessagePage.style.display = "block";
  }

  // Function to go back to the signup form page
  function goBackToSignupForm() {
    successMessagePage.style.display = "none";
    signupFormPage.style.display = "block";
    emailInput.value = ""; // Clear the email input
  }

  // Event listener for the signup button
  signupButton.addEventListener("click", function () {
    event.preventDefault(); // Prevent the default form submission
    const email = emailInput.value.trim(); // Get the entered email

    // Check if the email is valid (you can add more validation)
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
      }

    // Here, you can add code to handle the signup process
    // For this example, we'll just show the success message page
    showSuccessMessage();
  });

  // Event listener for the back button on the success message page
  backButton.addEventListener("click", signupFormPage);
