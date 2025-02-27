document.getElementById("newPassword").addEventListener("input", function () {
  const password = this.value;
  const strengthLabel = document.getElementById("passwordStrengthLabel");
  const strengthBar = document.getElementById("passwordStrengthBar");
  const strengthStatus = document.getElementById("strengthStatus");

  let strength = 0;

  if (password.length > 7) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/\d/.test(password)) strength++;
  if (/[\W_]/.test(password)) strength++;

  if (password.length === 0) {
    strengthLabel.textContent = "";
    strengthBar.style.width = "0%";
    strengthStatus.style.display = "none";
  } else {
    strengthStatus.style.display = "block";

    switch (strength) {
      case 0:
      case 1:
      case 2:
        strengthLabel.textContent = "Weak";
        strengthLabel.style.color = "red";
        strengthStatus.textContent = "Weak";
        strengthBar.style.width = "33%";
        strengthBar.className = "progress-bar bg-danger";
        break;
      case 3:
        strengthLabel.textContent = "Moderate";
        strengthLabel.style.color = "Yellow";
        strengthStatus.textContent = "Moderate";
        strengthBar.style.width = "66%";
        strengthBar.className = "progress-bar bg-warning";
        break;
      case 4:
        strengthLabel.textContent = "Strong";
        strengthLabel.style.color = "Green";
        strengthStatus.textContent = "Strong";
        strengthBar.style.width = "100%";
        strengthBar.className = "progress-bar bg-success";
        break;
      default:
        strengthLabel.textContent = "";
        strengthBar.style.width = "0%";
        strengthBar.className = "progress-bar";
        break;
    }
  }
});

function validatePasswords() {
  const newPassword = document.getElementById("newPassword").value;
  const confirmNewPassword =
    document.getElementById("confirmNewPassword").value;
  const passwordMatchStatus = document.getElementById("passwordMatchStatus");

  if (newPassword !== confirmNewPassword) {
    passwordMatchStatus.style.display = "block";
  } else {
    passwordMatchStatus.style.display = "none";
  }
}

function togglePasswordVisibility(inputId, eyeIconId) {
  const input = document.getElementById(inputId);
  const eyeIcon = document.getElementById(eyeIconId);
  if (input.type === "password") {
    input.type = "text";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  } else {
    input.type = "password";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  }
}
