<?php
$host = "localhost";
$user = "root";
$pass = "";
$database = "php_database_contact";

$link = mysqli_connect($host, $user, $pass, $database);

if($link === false){
die ("ERROR: Could not connect. " . mysqli_connect_error());
}

$nombre = mysqli_real_escape_string($link, $_POST['Nombre']);
$correo = mysqli_real_escape_string($link, $_POST['Correo']);

$sql = "INSERT INTO contactos(nombre, email) VALUES ('$nombre','$correo')";

if(mysqli_query($link, $sql)){
    echo "Se añadio";
    
}
else{
    echo "ERROR, no se añadió" . mysqli_error($link);
}
?>