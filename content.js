function injectChatbotButton() {
  // Locate the "Solved" status container
  const solvedStatus = document.querySelector('.text-body.flex.flex-none.items-center.gap-1.py-1.5.text-text-secondary');

  if (solvedStatus) {
    // Create the button element
    const button = document.createElement('button');
    button.textContent = 'Open AI Chatbot';
    button.style.padding = '10px 20px';
    button.style.backgroundColor = '#007bff';
    button.style.color = 'white';
    button.style.border = 'none';
    button.style.borderRadius = '5px';
    button.style.cursor = 'pointer';
    button.style.marginBottom = '10px';  // Optional: add some spacing between the button and solved status

    // Add an event listener for the button click (for testing)
    button.addEventListener('click', () => {
      alert('Chatbot button clicked!');
    });

    // Insert the button before the "Solved" status
    solvedStatus.parentNode.insertBefore(button, solvedStatus);
  } else {
    console.log('Could not find the "Solved" status element.');
  }
}

// Run the function to inject the button when the page is loaded
injectChatbotButton();
