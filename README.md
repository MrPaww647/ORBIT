# ORBIT AI — Browser Extension

Manifest V3 extension for Chrome and Opera GX. Built with plain HTML, CSS and JavaScript; no React, Vite or Webpack.

## Features
- Cyberpunk black/purple popup, side panel and settings
- AI chat through an OpenAI-compatible Chat Completions API
- Current webpage title, URL, visible text and selected text as optional context
- Right-click actions for selected text and page summaries
- Quick prompts, recent conversation context and clear-chat action
- API endpoint, model, API key and system prompt settings
- Shortcut: Alt+Shift+O (customizable in browser extension shortcuts)

## Install
1. Open chrome://extensions or opera://extensions.
2. Enable Developer mode.
3. Choose Load unpacked and select the folder containing manifest.json.
4. Open ORBIT Options and configure API base URL, model ID and API key.
5. Open a normal HTTP/HTTPS website and reload it once to enable page context.

## AI provider
ORBIT expects POST {API base URL}/chat/completions with Bearer authentication and a response containing choices[0].message.content. Example base URL: https://api.openai.com/v1. Enter a model available to your provider/account. API availability, pricing, model names and CORS support depend on the provider. ORBIT does not include an API key or bypass billing. Some providers block browser-extension requests; use a provider supporting CORS or a secure proxy you control.

## Privacy
- Page text is only sent when you submit a prompt.
- Prompts may include up to 12,000 characters of visible page text and the detected selection.
- API keys are stored in chrome.storage.local and are not encrypted by this extension. Keep your browser profile private.
- Page content is untrusted context; always review AI output.
- The extension requests no broad host permissions. Content script runs on HTTP and HTTPS pages only.

## Manual test checklist
- [ ] Extension loads without manifest errors.
- [ ] Options save configuration.
- [ ] Test connection succeeds with valid credentials or gives a useful error.
- [ ] Popup quick actions open the assistant.
- [ ] Shortcut opens the side panel where supported.
- [ ] Reload an HTTP/HTTPS tab and check title/URL context.
- [ ] Select text, right-click, choose Ask ORBIT AI about selection.
- [ ] Right-click a page, choose Summarize page with ORBIT AI.
- [ ] Test invalid key/network and verify an error is shown.

## Limitations
Provider CORS and API compatibility vary. Protected pages such as chrome://extensions cannot be read. AI answers render as plain text in this release; Markdown rendering and streaming can be added later.