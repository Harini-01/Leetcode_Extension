window.onload = function () {
  setTimeout(() => { 
    const targetElements = document.getElementsByClassName("flexlayout__tab_button flexlayout__tab_button_top flexlayout__tab_button--unselected");
    console.log("Found elements:", targetElements.length);

    if (targetElements.length > 2) {
      const targetElement = targetElements[2];  // Third element
      injectButton(targetElement);
    } else {
      console.log("Target element not found. Retrying...");
      observeDOMChanges();
    }
  }, 1000); 
};

function injectButton(targetElement) {
  // Create separator (vertical bar "|")
  const separator = document.createElement("span");
  separator.innerText = " | ";
  separator.style.color = "gray";  // Match existing separator color
  separator.style.margin = "0 10px";  // Add spacing
  separator.style.fontSize = window.getComputedStyle(targetElement).fontSize;

  // Create button
  const button = document.createElement('button');
  button.innerText = "Ask AI";  // Set button text
  button.style.display = "flex";  
  button.style.alignItems = "center";  // Align text & icon
  button.style.justifyContent = "center";
  button.style.padding = '5px 10px'; 
  button.style.fontSize = window.getComputedStyle(targetElement).fontSize;  
  button.style.cursor = "pointer";
  button.style.border = "none";
  button.style.background = "transparent";  
  button.style.color = window.getComputedStyle(targetElement).color;  

  // Create icon
  const icon = document.createElement("img");
  icon.src = "https://cdn-icons-png.flaticon.com/512/25/25231.png";  // GitHub icon as example
  icon.style.width = "16px";  
  icon.style.height = "16px";
  icon.style.marginRight = "5px";  

  // Insert icon before text
  button.innerHTML = "";  
  button.appendChild(icon);
  button.appendChild(document.createTextNode("Ask AI"));  

  // Inject elements
  targetElement.insertAdjacentElement("afterend", button);
  button.insertAdjacentElement("beforebegin", separator);  // Insert separator before button

  // Click event
  button.addEventListener('click', () => {
    alert("Ask AI button clicked!");
  });

  button.addEventListener('click', () => {
    alert("You clicked the 'Ask AI' button!");  // Add your custom alert message here
  });


  console.log("Button injected successfully.");
}

// Handle dynamically loaded elements
function observeDOMChanges() {
  const observer = new MutationObserver(() => {
    const targetElements = document.getElementsByClassName("flexlayout__tab_button flexlayout__tab_button_top flexlayout__tab_button--unselected");
    if (targetElements.length > 2) {
      injectButton(targetElements[2]);
      observer.disconnect();
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
}
