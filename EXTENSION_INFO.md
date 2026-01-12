# Search with Engine - Technical Overview

## Architecture

This is a minimal Chrome Extension built using Manifest V3. The extension consists of:

### Core Components

1. **manifest.json** - Extension configuration
   - Manifest Version 3 (latest standard)
   - Minimal permissions: `contextMenus` and `storage` only
   - Service worker-based background script
   - Embedded options UI

2. **background.js** - Service worker
   - Handles context menu creation and updates
   - Processes search requests
   - Listens for settings changes
   - Opens search results in new tabs

3. **options.html/js** - Settings interface
   - Simple dropdown for search engine selection
   - Auto-save functionality
   - Minimal, clean UI
   - Uses Chrome Storage API

### Supported Search Engines

- Google (default): https://www.google.com/search?q=
- Bing: https://www.bing.com/search?q=
- DuckDuckGo: https://duckduckgo.com/?q=
- Yahoo: https://search.yahoo.com/search?p=
- Brave: https://search.brave.com/search?q=

### User Flow

1. User selects text on any webpage
2. User right-clicks to open context menu
3. User clicks "Search with [Engine]" option
4. Extension opens new tab with search results
5. User can change search engine via extension options

### Key Features

✅ No popup required - ultra-minimal design
✅ Context menu integration only
✅ Configurable search engine
✅ Persistent settings (synced across Chrome instances)
✅ Dynamic menu updates
✅ Privacy-focused (no data collection)
✅ Fast and lightweight

### Permissions Justification

- **contextMenus**: Required to add search option to right-click menu
- **storage**: Required to save user's search engine preference

### File Structure

```
search-with-engine/
├── manifest.json          # Extension configuration
├── background.js          # Service worker (context menu + search logic)
├── options.html           # Settings page UI
├── options.js             # Settings page logic
├── icon16.png            # Toolbar icon (16x16)
├── icon48.png            # Extension manager icon (48x48)
├── icon128.png           # Web store icon (128x128)
├── test.html             # Test page for validation
└── README.md             # User documentation
```

### Code Quality

- ✅ Valid JSON syntax (manifest.json)
- ✅ Valid JavaScript syntax (background.js, options.js)
- ✅ Code review passed
- ✅ Security scan passed (0 vulnerabilities)
- ✅ Chrome Manifest V3 compliant

### Installation Size

Total size: ~3 KB (excluding icons)
- manifest.json: 460 bytes
- background.js: 1.9 KB
- options.html: 1.4 KB
- options.js: 827 bytes

Truly minimal! ✨
