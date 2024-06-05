// Saves options to chrome.storage
const saveOptions = () => {
    const reminder = document.getElementById('reminder').checked;
    const quantity = document.getElementById('quantity').value;
  
    chrome.storage.sync.set(
      { reminder: reminder, quantity: quantity },
      () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(() => {
          status.textContent = '';
        }, 750);
      }
    );
  };
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  const restoreOptions = () => {
    chrome.storage.sync.get(
      { favoriteColor: 'red', likesColor: true },
      (items) => {
        document.getElementById('reminder').checked = items.reminder;
        document.getElementById('like').value = items.quantity;
      }
    );
  };
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.getElementById('save').addEventListener('click', saveOptions);