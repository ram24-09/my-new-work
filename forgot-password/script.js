document
  .getElementById("passwordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const newPassword = document.getElementById("newPassword").value;
    const confirmNewPassword =
      document.getElementById("confirmNewPassword").value;
    const errorMessage = document.getElementById("error-message");

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!passwordRegex.test(newPassword)) {
      errorMessage.textContent =
        "Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.";
      return;
    }

    if (newPassword !== confirmNewPassword) {
      errorMessage.textContent = "Passwords do not match.";
      return;
    }

    errorMessage.textContent = "";
    alert("Password successfully updated!");
  });
