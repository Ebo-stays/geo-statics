document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Account created successfully!");
    location.href = "index.html";
});
