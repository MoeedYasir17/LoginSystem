<?php

<<<<<<< HEAD
$Username = $_POST['Username']; 
$Name =  $_POST['Name']; 
$Lastname = $_POST['LastName']; 
$Password = $_POST['Password']; 
$DateOfBirth = $_POST['DOB']; 
=======
$Username = $_POST['username']; 
$Name =  $_POST['Name']; 
$Lastname = $_POST['lastName']; 
$Password = $_POST['password']; 
$DateOfBirth = $_POST['dob']; 
>>>>>>> bf92fa1850af4b8c1fb011a25f365890bb365d76

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "LoginSystem"; 

// Create connection
$conn = new mysqli($servername, $username, $password , $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

echo "Connected successfully";
$query="insert into SignUp values('$Name','$Lastname', '$Username','$Password','$DateOfBirth')";

if ($conn->query($query) === TRUE) {
  echo " New record created successfully";
} else {
  echo "Error: " . $query . "<br>" . $conn->error;
}

$conn->close();

?>