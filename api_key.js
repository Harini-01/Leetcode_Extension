document.addEventListener("DOMContentLoaded", function () {
    const saveButton = document.getElementById("save-api-key");

    saveButton.addEventListener("click", function () {
        const apiKey = document.getElementById("api-key-input").value.trim();
        
        if (apiKey) {
            // Save the API key in Chrome storage
            chrome.storage.sync.set({ "geminiApiKey": apiKey }, function () {
                alert("API Key Saved!");
                window.location.href = "popup.html"; // Redirect to main popup
            });
        } else {
            alert("Please enter a valid API Key.");
        }
    });
});
