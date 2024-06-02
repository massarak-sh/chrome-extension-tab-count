document.addEventListener('DOMContentLoaded', function() {
  // Query the number of tabs in the current window
  chrome.tabs.query({ currentWindow: true }, function(tabs) {
    // Get the number of tabs
    var tabCount = tabs.length;
    // Update the HTML content with the tab count
    document.getElementById('tabs-number').innerText = tabCount;
  });
});