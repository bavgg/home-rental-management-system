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

    $email = $input['email'];
    $pwd = $input['pwd'];

    $query = "SELECT * FROM tenant WHERE email = ?";
    $stmt = $conn->prepare($query);

    $stmt->bind_param("s", $email);
    $stmt->execute();
    $result = $stmt->get_result();
    $data = $result->fetch_assoc();

    if ($data && password_verify($pwd, $data['pwd'])) {
        $_SESSION['tenant_id'] = $data['t_id'];
        $_SESSION['full_name'] = $data['fname'] . ' ' . $data['lname'];

        echo json_encode(['success' => true, 'message' => 'Signin successful']);
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid email or password']);
    }

    $stmt->close();
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Error ' . $e->getMessage()]);
}
