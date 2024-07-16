<?php

session_start();
if (!$_SESSION['email']) {
    header("location: /login");
    exit();
}

require(__DIR__ . "/db/data.php");

use Database\Data;

$data = new Data();
$users = $data->fetchUsers();

echo "<script>const users = " . json_encode($users) . ";</script>";
?>


<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home Rental Management System</title>
    <link rel="stylesheet" href="./styles.css">

</head>

<body>

    <script type="module" src="index.js"></script>
    
</body>

</html>