// script.js
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the form from submitting before validation
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "" || password === "") {
        alert("Please fill in both fields.");
    } else {
        // Normally, you would send the data to a backend server for authentication here
        alert("Login successful!");
        // Redirect to another page (e.g., dashboard) after login
        // window.location.href = "dashboard.html";
    }
});
