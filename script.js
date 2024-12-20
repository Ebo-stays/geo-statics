document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (storedUsername === username && storedPassword === password) {
      localStorage.setItem("isLoggedIn", true);
      location.href = "profile.html";
  } else {
      const errorMessage = document.getElementById("error-message");
      errorMessage.textContent = "Invalid username or password. Please try again.";
      errorMessage.style.display = "block";
  }
});
