<?php

session_start();
if( !(isset($_SESSION['tenant_id']) || isset($_SESSION['owner_id']) )) {
    header("location: /signin");
    exit();
}

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

    <script type="module" src="/owners/index.js"></script>

</body>

</html>