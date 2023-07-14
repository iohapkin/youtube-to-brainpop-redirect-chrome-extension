chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (changeInfo.status === 'complete' && tab.url.includes('youtube.com')) {
    chrome.tabs.update(tabId, { url: 'https://www.brainpop.com' });
  }
});
