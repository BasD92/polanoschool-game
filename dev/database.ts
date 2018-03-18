/// <reference path="jquery.d.ts" />

class Database {

  constructor() {

  }

  static getData() {
    $.ajax({
      dataType: 'json',
      url: 'https://stud.hosted.hr.nl/0847433/polano/getSettings.php',
      type: 'GET',
      success: this.successData,
      error: this.errorData
    });
  }

  static successData(response) {
    $.each(response, function (i, item) {
      if (typeof (Storage) !== "undefined") {
        localStorage.setItem("speed", item['speed']);
        localStorage.setItem("minimum", item['minimum']);
        localStorage.setItem("medium", item['medium']);
        localStorage.setItem("maximum", item['maximum']);
      }
      else {
        alert('Schakel localStorage in voor een goede werking van deze app.');
      }
    });
  }

  static errorData() {
    console.log('De verbinding met de server is mislukt.');
  }
}