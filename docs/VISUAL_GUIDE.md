# Visual Guide - Search with Engine Extension

## 📦 Installation View

When you load the extension in Chrome:

```
Chrome Extensions Page (chrome://extensions/)
┌─────────────────────────────────────────────────────┐
│ 🔍 Search with Engine                     v1.0.0    │
│ Select text on any page and search it...            │
│                                                      │
│ ID: [generated-extension-id]                        │
│ ⚙️ Options  |  🗑️ Remove  |  🔄 Reload              │
└─────────────────────────────────────────────────────┘
```

## 🖱️ Context Menu Usage

When you select text and right-click:

```
┌─────────────────────────────────┐
│ Selected Text: "Chrome Extension" │
├─────────────────────────────────┤
│ Copy                            │
│ Search with Google             ← OUR EXTENSION!
│ Translate...                    │
│ Look up "Chrome Extension"      │
│ ────────────────               │
│ View page source               │
│ Inspect                        │
└─────────────────────────────────┘
```

## ⚙️ Options Page

Access via: Right-click extension icon → Options

```
┌────────────────────────────────────┐
│ Search Engine Settings              │
│                                     │
│ Default Search Engine:              │
│ ┌──────────────────────────────┐  │
│ │ Google                    ▼  │  │
│ └──────────────────────────────┘  │
│                                     │
│ Available options:                  │
│ • Google                           │
│ • Bing                             │
│ • DuckDuckGo                       │
│ • Yahoo                            │
│ • Brave                            │
│                                     │
│ ✅ Settings saved!                 │
└────────────────────────────────────┘
```

## 🎯 User Workflow

### Step 1: Select Text
```
On any webpage:
┌─────────────────────────────────┐
│ This is some text about [Chrome │
│ Extension development] that I   │
│ want to search for.             │
└─────────────────────────────────┘
      ↓ (Text highlighted)
```

### Step 2: Right-Click
```
┌─────────────────────────────────┐
│ Context Menu appears...         │
│ > Search with Google           │
└─────────────────────────────────┘
      ↓ (Click)
```

### Step 3: New Tab Opens
```
┌─────────────────────────────────────────────┐
│ 🔍 Chrome Extension development - Google... │
├─────────────────────────────────────────────┤
│                                             │
│ Google Search Results for:                 │
│ "Chrome Extension development"              │
│                                             │
│ 📄 Chrome Extension Development Guide...   │
│ 📄 Getting Started with Chrome Extensions..│
│ 📄 Chrome Extension API Documentation...   │
└─────────────────────────────────────────────┘
```

## 🎨 Extension Icon

The extension uses a simple magnifying glass icon:

```
┌──────┐
│  🔍  │  Blue background (#4285f4)
│      │  White magnifying glass icon
└──────┘
```

Available in three sizes:
- 16x16px (toolbar)
- 48x48px (extension manager)
- 128x128px (Chrome Web Store)

## 💡 Key Advantages

✨ **Ultra-Minimal Design**
- No popup window
- Single context menu item
- Embedded options page

🚀 **Fast & Lightweight**
- Total size: ~3 KB (code only)
- Instant loading
- No background processes when idle

🔒 **Privacy-Focused**
- No data collection
- No external requests (except search)
- Minimal permissions

⚡ **Smart Features**
- Auto-updates menu when engine changes
- Syncs settings across Chrome instances
- Works on all web pages
