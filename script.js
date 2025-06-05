document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    // Get the username and password values from the form
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple front-end validation and demo authentication
    // In real applications, send credentials to the backend for verification!
    if (username === "admin" && password === "password123") {
        // If login is successful, show a success message
        document.getElementById("loginMessage").style.color = "green";
        document.getElementById("loginMessage").textContent = "Login successful! Welcome, " + username + ".";
        // Redirect to scientific calculator page after a short delay
        setTimeout(function() {
            window.location.href = "chooseGame.html";
        }, 1000);
    } else {
        // If login fails, show an error message
        document.getElementById("loginMessage").style.color = "red";
        document.getElementById("loginMessage").textContent = "Invalid username or password.";
    }
});