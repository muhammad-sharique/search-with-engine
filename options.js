// Load saved settings
document.addEventListener('DOMContentLoaded', async () => {
  const result = await chrome.storage.sync.get(['searchEngine']);
  const searchEngine = result.searchEngine || 'google';
  document.getElementById('searchEngine').value = searchEngine;
});

// Save settings when changed
document.getElementById('searchEngine').addEventListener('change', async (event) => {
  const searchEngine = event.target.value;
  
  // Save to storage
  await chrome.storage.sync.set({ searchEngine: searchEngine });
  
  // Show success message
  const status = document.getElementById('status');
  status.textContent = 'Settings saved!';
  status.className = 'status success';
  status.style.display = 'block';
  
  // Hide message after 2 seconds
  setTimeout(() => {
    status.style.display = 'none';
  }, 2000);
});
