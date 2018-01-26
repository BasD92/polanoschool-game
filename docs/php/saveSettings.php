<?php

// Database connection
require_once('connect.php');
$con = mysqli_connect($dbHost, $dbUser, $dbPass, $dbDatabase);

// Check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

// Get values from input
$speed = $_POST['speed'];
$minimumVolume = $_POST['minimumVolume'];
$mediumVolume = $_POST['mediumVolume'];
$maximumVolume = $_POST['maximumVolume'];

// Add volume values to table
mysqli_query($con, "UPDATE settings SET speed='$speed', minimum='$minimumVolume', medium='$mediumVolume',
maximum='$maximumVolume' WHERE id=9");

// Allow access from other domains
header('Access-Control-Allow-Origin: *');

// Close connection
mysqli_close($con);
