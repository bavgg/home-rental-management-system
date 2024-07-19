<?php
session_start();
require($_SERVER['DOCUMENT_ROOT'] . '/db/connection.php');

use Database\Connection;

$conn = new Connection();
$conn = $conn->getConnection();

set_error_handler(function ($errno, $errstr, $errfile, $errline) {
    throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
});

try {
    $input = file_get_contents('php://input');
    $input = json_decode($input, true);

    $fullname = $input['fullname'];
    $email = $input['email'];
    $password_hash = password_hash($input['password'], PASSWORD_DEFAULT);
    $mobile = $input['mobile'];
    $occupation = $input['occupation'];
    $house_no = $input['house_no'];
    $country = $input['country'];
    $state = $input['state'];
    $city = $input['city'];
    $address = $input['address'];

    $query = "INSERT INTO owner (name, email, pwd, mobile_no, occupation, no_of_houses, country, state, city, address) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($query);

    $stmt->bind_param("sssisissss", $fullname, $email, $password_hash, $mobile, $occupation, $house_no, $country, $state, $city, $address);

    if ($stmt->execute()) {

        $last_id = $conn->insert_id;
        $_SESSION['owner_id'] = $last_id;
        $_SESSION['full_name'] = $fullname;
        echo json_encode(['success' => true, 'message' => 'Signup successful']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Execution failed']);
    }

    $stmt->close();
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error ' . $e->getMessage()]);
}
