# Search with Engine

A minimal Chrome extension that allows you to select text on any webpage and search it using your preferred search engine.

## Features

- 🔍 Right-click on selected text to search instantly
- 🎯 No popup needed - ultra-minimal design
- ⚙️ Configurable search engine (Google, Bing, DuckDuckGo, Yahoo, Brave)
- 🚀 Fast and lightweight
- 🔒 Privacy-focused - only uses context menu and storage permissions

## Installation

### From Source

1. Clone or download this repository
2. Open Chrome and navigate to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top-right corner)
4. Click "Load unpacked"
5. Select the extension directory

## Usage

1. Select any text on a webpage
2. Right-click on the selected text
3. Click "Search with [Engine Name]" from the context menu
4. The search results will open in a new tab

## Configuration

To change the default search engine:

1. Right-click the extension icon in Chrome toolbar
2. Select "Options"
3. Choose your preferred search engine from the dropdown
4. Settings are saved automatically

Available search engines:
- Google (default)
- Bing
- DuckDuckGo
- Yahoo
- Brave

## Files

- `manifest.json` - Extension configuration
- `background.js` - Core functionality (context menu and search)
- `options.html` - Settings page UI
- `options.js` - Settings page logic
- `icon16.png`, `icon48.png`, `icon128.png` - Extension icons

## Permissions

This extension requires:
- `contextMenus` - To add the search option to the right-click menu
- `storage` - To save your search engine preference

## License

MIT