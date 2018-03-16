function init() {
  $('#changeSettings').on('submit', saveSettings);
}

function saveSettings(e) {
  e.preventDefault();

  // Variables to get values from input
  var speed = $('#speed').val();
  var minimumVolume = $('#minimumVolume').val();
  var mediumVolume = $('#mediumVolume').val();
  var maximumVolume = $('#maximumVolume').val();

  if (!minimumVolume || minimumVolume < 0 || minimumVolume > 1 || !mediumVolume || mediumVolume < 0 || mediumVolume > 1
  || !maximumVolume || maximumVolume < 0 || maximumVolume > 1) {
    alert('Lege velden zijn niet toegestaan. Vul alleen een waarde tussen de 0 en 1 in.');
  }
  else {
    // Send values from input to backend
    $.ajax({
      type: 'POST',
      url: 'http://sebastiaandingemans.nl/polano/saveSettings.php',
      data: {
        speed: speed,
        minimumVolume: minimumVolume,
        mediumVolume: mediumVolume,
        maximumVolume: maximumVolume
      },
      success: function () {
        alert('De nieuwe instellingen zijn opgeslagen!');
        $("form").trigger("reset");
      },
      error: function () {
        alert('De verbinding met de server is mislukt. Probeer het nog een keer. De wijzigingen zijn nu niet doorgevoerd.');
      }
    });
  }
}

// Load when page is ready
$(document).on('ready', init);