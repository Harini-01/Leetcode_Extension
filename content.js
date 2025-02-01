window.onload = function() {
  // Get the element using getElementsByClassName
  console.log("LeetCode AI Helper Extension Loaded!");

  let targetElement = document.getElementsByClassName('.text-body.flex.flex-none.items-center.gap-1.py-1\\.5.text-text-secondary')[0];

  if (targetElement) {
      // Create the button
      let button = document.createElement('button');
      button.innerText = "AI Helper";
      button.style.marginRight = "10px";
      button.style.padding = "5px 10px";
      button.style.borderRadius = "5px";
      button.style.backgroundColor = "#007bff";
      button.style.color = "white";
      button.style.border = "none";
      button.style.cursor = "pointer";

      // Insert before the target element
      targetElement.parentNode.insertBefore(button, targetElement);
  } else {
      console.log("Target element not found.");
  }
};
