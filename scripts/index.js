// Get the popup element
const popup = document.getElementById('quote-popup');

// Get the button to open the popup
const getQuoteButton = document.querySelector('.get-quote-button');

// Get the button to close the popup
const closePopupButton = document.querySelector('.close-popup-button');

// Function to open the popup
function openPopup() {
  popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
  popup.style.display = 'none';
}

// Add event listeners
getQuoteButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
 
