document.getElementById('saveButton').addEventListener('click', function() {
    const value = document.getElementById('stored-value').value;
    if (value) {
      chrome.storage.sync.set({ [new Date().getTime()]: value }, function() {
        console.log('Value is set to ' + value);
        document.getElementById('stored-value').value = '';
      });
    }
  });
  
  document.getElementById('showButton').addEventListener('click', function() {
    chrome.storage.sync.get(null, function(items) {
      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = ''; 
      for (let key in items) {
        const value = items[key];
        const p = document.createElement('p');
        p.textContent = `${key}: ${value}`;
        outputDiv.appendChild(p);
      }
    });
  });
  