<?php
session_start();
require($_SERVER['DOCUMENT_ROOT'] . '/db/connection.php');

use Database\Connection;

$conn = new Connection();
$conn = $conn->getConnection(); 

set_error_handler(function($errno, $errstr, $errfile, $errline) {
    throw new ErrorException($errstr, 0, $errno, $errfile, $errline);
});

try {
    $input = file_get_contents('php://input');
    $input = json_decode($input, true);

    $firstname = $input['firstname'];
    $lastname = $input['lastname'];
    $email = $input['email'];
    $password_hash = password_hash($input['password'], PASSWORD_DEFAULT);
    $mobile = $input['mobile'];
    $occupation = $input['occupation'];

    $query = "INSERT INTO tenant (fname, lname, email, pwd, mobile_no, occupation) VALUES (?, ?, ?, ?, ?, ?)" ;
    $stmt = $conn->prepare($query);

    $stmt->bind_param("ssssis", $firstname, $lastname, $email, $password_hash, $mobile, $occupation);

    if ($stmt->execute()) {

        $last_id = $conn->insert_id;
        $_SESSION['tenant_id'] = $last_id;
        $_SESSION['firstname'] = $firstname;
        echo json_encode(['success' => true, 'message' => 'Signup successful']);

    } else {
        echo json_encode(['success' => false, 'message' => 'Execution failed']);
    }

    $stmt->close();
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error ' . $e->getMessage()]);
}
