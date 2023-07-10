// Get the popup element
const popup = document.getElementById('quote-popup');

// Get the button to open the popup
const getQuoteButton = document.querySelector('.get-quote-button');

// Get the button to close the popup
const closePopupButton = document.querySelector('.close-popup-button');

// Get the cancel button
const cancelButton = document.querySelector('.cancel-button');

// Get the hamburger menu icon element
const hamburgerMenu = document.querySelector('.hamburger-menu');

// Get the navigation menu element
const navMenu = document.querySelector('nav ul');

// Function to open the popup
function openPopup() {
  popup.style.display = 'block';
}

// Function to close the popup
function closePopup() {
  popup.style.display = 'none';
}

// Function to handle cancel button click
function handleCancel(event) {
  event.preventDefault();
  closePopup();

  window.location.href = 'index.html';
}


// Function to toggle the navigation menu
function toggleMenu() {
  navMenu.classList.toggle('active');
}


// Add event listeners
getQuoteButton.addEventListener('click', openPopup);
closePopupButton.addEventListener('click', closePopup);
cancelButton.addEventListener('click', handleCancel);
hamburgerMenu.addEventListener('click', toggleMenu);


