var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var myObj = JSON.parse(this.responseText);
        //console.log(myObj[0].speed);
        return myObj[0].speed;
    }
};

xmlhttp.open("GET", "http://localhost/polanoschool-game/docs/php/getSettings.php", true);
xmlhttp.send();
//var test = xmlhttp.onreadystatechange();

//console.log(test);