// JavaScript to show/hide the Wi-Fi popup and handle Wi-Fi network selection

// Get references to the Wi-Fi popup and the close button
const wifiPopup = document.getElementById('wifi-popup');
const closeWifiPopup = document.getElementById('close-wifi-popup');

// Function to show the Wi-Fi popup
function showWifiPopup() {
  wifiPopup.style.display = 'block';
}

// Function to hide the Wi-Fi popup
function hideWifiPopup() {
  wifiPopup.style.display = 'none';
}

// Function to handle Wi-Fi network selection
function selectWifiNetwork(event) {
  const selectedNetwork = event.target.textContent;
  // Your logic to handle the selected network goes here
  console.log(`Selected Wi-Fi Network: ${selectedNetwork}`);
  hideWifiPopup();
}

// Event listener to show the Wi-Fi popup when the Wi-Fi icon is clicked
const wifiIcon = document.getElementById('wifi-icon');
wifiIcon.addEventListener('click', showWifiPopup);

// Event listener to hide the Wi-Fi popup when the close button is clicked
closeWifiPopup.addEventListener('click', hideWifiPopup);

// Event listener to handle Wi-Fi network selection
const wifiNetworks = document.getElementById('wifi-networks');
wifiNetworks.addEventListener('click', selectWifiNetwork);





 // Get references to the volume icon, audio element, and volume control popup ...

    // Get references to the Windows button and Start menu
    const windowsButton = document.getElementById('windows-button');
    const startMenu = document.getElementById('start-menu');

    // Function to toggle the Start menu
    function toggleStartMenu() {
      if (startMenu.style.display === 'block') {
        startMenu.style.display = 'none';
      } else {
        startMenu.style.display = 'block';
      }
    }

    // Event listener to toggle the Start menu when the Windows button is clicked
    windowsButton.addEventListener('click', toggleStartMenu);

    // Event listener to hide the Start menu when clicking outside of it
    document.addEventListener('click', function(event) {
      if (!startMenu.contains(event.target) && event.target !== windowsButton) {
        startMenu.style.display = 'none';
      }
    });