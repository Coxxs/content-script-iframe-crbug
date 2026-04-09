// Inject extension iframe immediately
const f = document.createElement('iframe');
f.src = chrome.runtime.getURL('iframe.html');
document.documentElement.appendChild(f);
