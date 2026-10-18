# Remix Kitchen

Weekly meal kits: one shop, one weekend prep, five 10-minute dinners. Tell it your dietary needs first and it only shows kits that fit, swapping ingredients where needed.

Live app: https://deedubs531.github.io/remix-kitchen/

The same code runs three ways. Your picks and checklists are saved in whichever one you use.

## Standalone app

Open the live app, then:

- **Chrome / Edge (desktop or Android):** click **Install app** in the header, or the install icon in the address bar.
- **Safari on iPhone/iPad:** Share → **Add to Home Screen**.
- **Safari on Mac:** File → **Add to Dock**.

It opens in its own window and works offline. Right-click (or long-press) the icon to jump straight to Groceries, Prep or Choose.

## Browser extension

Click the toolbar icon to get the app in a popup. **Open in tab ↗** gives you the full page.

- **Chrome / Edge / Brave:** go to `chrome://extensions`, turn on Developer mode, click **Load unpacked** and pick this folder.
- **Firefox:** go to `about:debugging#/runtime/this-firefox`, click **Load Temporary Add-on** and pick `manifest.json`.
- **Safari (Mac, needs Xcode):** unzip the extension zip, then run `xcrun safari-web-extension-converter <unzipped folder> --app-name "Remix Kitchen" --macos-only`. Xcode opens a project; press Run. In Safari, turn on Settings → Advanced → Show features for web developers, then Develop → **Allow Unsigned Extensions**, and switch Remix Kitchen on in Settings → Extensions. Leave off `--macos-only` to also get an iPhone/iPad target.

To publish to the Chrome Web Store or Firefox Add-ons, run `./scripts/build-extension.sh`. It builds a zip in `dist/`. Bump `version` in `manifest.json` for each release.

## Files

- `index.html`: page and styles
- `app.js`: kits and app logic, shared by every version
- `manifest.webmanifest` + `sw.js`: installable app and offline support
- `manifest.json`: browser extension
