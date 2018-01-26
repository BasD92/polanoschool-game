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

  // Send values from input to backend
  $.ajax({
    type: 'POST',
    url: 'http://localhost/polanoschool-game/docs/php/saveSettings.php',
    data: {
      speed: speed,
      minimumVolume: minimumVolume,
      mediumVolume: mediumVolume,
      maximumVolume: maximumVolume,
      success: function () {
        alert('De nieuwe instellingen zijn opgeslagen!');
        $("form").trigger("reset");
      }
    }
  });
}

// Load when page is ready
$(document).on('ready', init);