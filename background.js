// Default search engine configuration
const DEFAULT_SEARCH_ENGINE = 'google';
const SEARCH_ENGINES = {
  google: 'https://www.google.com/search?q=',
  bing: 'https://www.bing.com/search?q=',
  duckduckgo: 'https://duckduckgo.com/?q=',
  yahoo: 'https://search.yahoo.com/search?p=',
  brave: 'https://search.brave.com/search?q='
};

// Initialize context menu on installation
chrome.runtime.onInstalled.addListener(() => {
  createContextMenu();
});

// Create context menu item
async function createContextMenu() {
  // Remove existing menu items
  await chrome.contextMenus.removeAll();
  
  // Get the current search engine setting
  const result = await chrome.storage.sync.get(['searchEngine']);
  const searchEngine = result.searchEngine || DEFAULT_SEARCH_ENGINE;
  
  // Create the context menu item
  chrome.contextMenus.create({
    id: 'search-selected-text',
    title: `Search with ${searchEngine.charAt(0).toUpperCase() + searchEngine.slice(1)}`,
    contexts: ['selection']
  });
}

// Handle context menu clicks
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === 'search-selected-text' && info.selectionText) {
    // Get the current search engine setting
    const result = await chrome.storage.sync.get(['searchEngine']);
    const searchEngine = result.searchEngine || DEFAULT_SEARCH_ENGINE;
    
    // Get search URL
    const searchUrl = SEARCH_ENGINES[searchEngine] || SEARCH_ENGINES[DEFAULT_SEARCH_ENGINE];
    
    // Encode the selected text and create search URL
    const query = encodeURIComponent(info.selectionText);
    const url = searchUrl + query;
    
    // Open search in a new tab
    chrome.tabs.create({ url: url });
  }
});

// Listen for storage changes to update context menu
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'sync' && changes.searchEngine) {
    createContextMenu();
  }
});
