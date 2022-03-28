document.querySelector("#start").addEventListener("click", function () {

  chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    alert('loader');
    chrome.tabs.sendMessage(tabs[0].id, {
      message: true,
    });
  });

});
