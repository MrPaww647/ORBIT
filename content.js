chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message && message.type === "ORBIT_GET_PAGE") {
    sendResponse({
      title: document.title || "",
      url: location.href,
      selection: (window.getSelection() && window.getSelection().toString()) || "",
      text: (document.body && document.body.innerText || "").replace(/\n{3,}/g,"\n\n").slice(0,18000)
    });
  }
  return true;
});