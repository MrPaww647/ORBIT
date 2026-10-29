chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({id:"orbit-selection",title:"Ask ORBIT AI about selection",contexts:["selection"]});
  chrome.contextMenus.create({id:"orbit-summary",title:"Summarize page with ORBIT AI",contexts:["page"]});
});
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (!tab || !tab.id) return;
  const prompt = info.menuItemId === "orbit-selection"
    ? "Explain this selected text clearly:\n\n" + (info.selectionText || "")
    : "Summarize the current webpage in concise bullet points.";
  await chrome.storage.session.set({orbitPendingPrompt:prompt});
  try { await chrome.sidePanel.open({tabId:tab.id}); } catch (_) {}
});
chrome.commands.onCommand.addListener(async command => {
  if (command !== "open-orbit") return;
  const tabs = await chrome.tabs.query({active:true,lastFocusedWindow:true});
  if (tabs[0] && tabs[0].id) try { await chrome.sidePanel.open({tabId:tabs[0].id}); } catch (_) {}
});