existing_btn=document.getElementsByClassName("coding_ask_doubt_button__FjwXJ")[0]

window.addEventListener("load",()=>{
    if (existing_btn) {
        // Create a new button
        const newButton = document.createElement("button");
        newButton.textContent = "New Button";
        newButton.className = "new-custom-button";
        
        // Insert the new button before the target
        existing_btn.parentNode.insertBefore(newButton, existing_btn);
      } else {
        console.error("Target button not found!");
      }
})
