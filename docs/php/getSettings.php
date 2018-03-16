<?php

// Database connection
require_once('connect.php');
$con = mysqli_connect($dbHost, $dbUser, $dbPass, $dbDatabase);

// Check connection
if (mysqli_connect_errno()) {
    echo "Failed to connect to MySQL: " . mysqli_connect_error();
}

// Get all results shoes
$result = mysqli_query($con, "SELECT * FROM settings");

// Fill array with rows from db
$rows = array();
while($row = mysqli_fetch_object($result))
{
    $rows[] = $row;
}

// Convert array to json
header("Content-Type: application/json");
header('Access-Control-Allow-Origin: *');
echo json_encode($rows, JSON_NUMERIC_CHECK);

// Close connection
mysqli_close($con);