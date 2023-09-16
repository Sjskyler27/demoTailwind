/*DARK MODE*/
// get dark mode elements
var darkModeToggle = document.getElementById('dark-mode-toggle');
var toggleCircle = document.getElementById('toggle-circle');
// Check if dark mode is initially enabled
if (darkModeToggle && toggleCircle) {
    var isDarkMode = localStorage.getItem('darkMode') === 'enabled';
    if (isDarkMode) {
        document.documentElement.classList.add('dark');
        toggleCircle.style.transform = 'translateX(100%)';
        darkModeToggle.checked = true;
    }
    // Toggle dark mode
    darkModeToggle.addEventListener('change', function () {
        if (darkModeToggle.checked) {
            document.documentElement.classList.add('dark');
            toggleCircle.style.transform = 'translateX(100%)';
            localStorage.setItem('darkMode', 'enabled');
        }
        else {
            document.documentElement.classList.remove('dark');
            toggleCircle.style.transform = 'translateX(0)';
            localStorage.setItem('darkMode', 'disabled');
        }
    });
}
/*POPUPS*/
var alertButton = document.getElementById('alert-button');
if (alertButton) {
    alertButton.addEventListener('click', function () {
        // Display a customized window alert when the button is clicked
        var alertId = 'warning-alert';
        window.alert("ID: ".concat(alertId, "\nYou shouldn't have clicked that button."));
    });
}
// Get references to the button and modal
var popupButton = document.getElementById('popup-button');
var popupModal = document.getElementById('popup-modal');
var closeModalButton = document.getElementById('close-modal');
// Function to show the modal
function showModal() {
    if (popupModal) {
        popupModal.style.display = 'block';
    }
}
// Function to hide the modal
function hideModal() {
    if (popupModal) {
        popupModal.style.display = 'none';
    }
}
// Add a click event listener to the button to show the modal
if (popupButton) {
    popupButton.addEventListener('click', showModal);
}
// Add a click event listener to the close button to hide the modal
if (closeModalButton) {
    closeModalButton.addEventListener('click', hideModal);
}
/*SPINNERS*/
// Get references to the loader and button
var loadingSpinner = document.getElementById('loading-spinner');
var spinnerButton = document.getElementById('spinner-button');
// Function to show the loader
function showLoader() {
    if (loadingSpinner) {
        loadingSpinner.style.display = 'flex';
    }
}
// Function to hide the loader
function hideLoader() {
    if (loadingSpinner) {
        loadingSpinner.style.display = 'none';
    }
}
// Function to simulate loading (replace with your actual loading logic)
function simulateLoading() {
    showLoader();
    setTimeout(function () {
        hideLoader();
    }, 1200); // Simulated loading time in milliseconds
}
// click event listener for the button
if (spinnerButton) {
    spinnerButton.addEventListener('click', simulateLoading);
}
/*FOOTER*/
console.log('DOMContentLoaded event fired');
var fullYear = new Date().getFullYear();
var year = document.querySelector('#year');
year ? (year.textContent = fullYear.toString()) : '';
