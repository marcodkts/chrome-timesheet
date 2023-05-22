document.addEventListener('DOMContentLoaded', function() {
  var timeSheetContainer = document.getElementById('timeSheetContainer');
  var configContainer = document.getElementById('configContainer');
  var timeSheetForm = document.getElementById('timeSheetForm');
  var configForm = document.getElementById('configForm');
  var apiUrlInput = document.getElementById('apiUrl');
  var userIdInput = document.getElementById('userId');
  var clientIdInput = document.getElementById('clientId');
  var systemIdInput = document.getElementById('systemId');

  chrome.storage.sync.get(['userId', 'clientId', 'systemId', 'apiUrl'], function(data) {
    apiUrlInput.value = data.apiUrl || '';
    userIdInput.value = data.userId || '';
    clientIdInput.value = data.clientId || '';
    systemIdInput.value = data.systemId || '';
  });

  timeSheetForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var date = new Date().toISOString().slice(0, 10)
    var startTime = document.getElementById('startTime').value;
    var endTime = document.getElementById('endTime').value;
    var description = document.getElementById('description').value;

    var apiUrl = apiUrlInput.value;
    var userId = userIdInput.value;
    var clientId = clientIdInput.value;
    var systemId = systemIdInput.value;

    var postData = {
      IdApontamento: 0,
      IdUsuario: userId,
      IdCliente: clientId,
      IdSistema: systemId,
      DataApontamento: date,
      HoraInicial: startTime,
      HoraFinal: endTime,
      Observacao: description
    };

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(postData)
    })
      .then(function(response) {
        if (response.ok) {
          console.log('Time sheet submitted successfully');
          timeSheetForm.reset();

          document.getElementById('startTime').value = '13:00'
          document.getElementById('endTime').value = '17:00'
        } else {
          console.log('Error submitting time sheet');
        }
      })
      .catch(function(error) {
        console.log('Error:', error);
      });
  });

  configForm.addEventListener('submit', function(event) {
    event.preventDefault();
    var userId = userIdInput.value;
    var clientId = clientIdInput.value;
    var systemId = systemIdInput.value;

    chrome.storage.sync.set({ userId, clientId, systemId }, function() {
      console.log('Configuration values saved');
    });

    configContainer.style.display = 'none';
    timeSheetContainer.style.display = 'block';
    timeSheetForm.reset();
  });

  var toggleContainer = function() {
    if (configContainer.style.display === 'none') {
      configContainer.style.display = 'block';
      timeSheetContainer.style.display = 'none';
      toggleButton.style.display = 'none';
    } else {
      configContainer.style.display = 'none';
      timeSheetContainer.style.display = 'block';
      toggleButton.style.display = 'block';
    }
  };

  timeSheetContainer.style.display = 'block';
  configContainer.style.display = 'none';

  var toggleButton = document.createElement('button');
  toggleButton.textContent = 'Configure';
  toggleButton.style.display = 'block'
  toggleButton.addEventListener('click', toggleContainer);
  document.body.appendChild(toggleButton);

  document.getElementById('startTime').value = '08:00'
  document.getElementById('endTime').value = '12:00'
});