const promptEl=document.getElementById("prompt");
async function init(){const s=await chrome.storage.local.get(["apiBase","model"]);document.getElementById("model-chip").textContent=s.model||"AI";document.getElementById("status").textContent=s.apiBase&&s.model?"SYSTEM READY":"SETUP REQUIRED";}
async function openAssistant(value){const text=value||promptEl.value.trim();if(!text){promptEl.focus();return;}await chrome.storage.session.set({orbitPendingPrompt:text});const tabs=await chrome.tabs.query({active:true,currentWindow:true});if(tabs[0]&&tabs[0].id){try{await chrome.sidePanel.open({tabId:tabs[0].id});}catch(e){await chrome.tabs.create({url:chrome.runtime.getURL("sidepanel.html")});}}window.close();}
document.getElementById("ask").addEventListener("click",()=>openAssistant());
document.getElementById("settings").addEventListener("click",()=>chrome.runtime.openOptionsPage());
document.querySelectorAll("[data-prompt]").forEach(b=>b.addEventListener("click",()=>openAssistant(b.dataset.prompt)));
promptEl.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key==="Enter")openAssistant();});init();