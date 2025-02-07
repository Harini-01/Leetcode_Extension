document.addEventListener("DOMContentLoaded", function () {
    const signinBtn = document.getElementById("signin-btn");

    // Redirect to API key entry page when "Sign In" is clicked
    signinBtn.addEventListener("click", function () {
        window.location.href = "api_key.html"; 
    });
});
