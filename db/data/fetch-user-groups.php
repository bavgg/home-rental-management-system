<?php
require($_SERVER['DOCUMENT_ROOT'] . '/db/connection.php');

use Database\Connection;

$conn = new Connection();
$conn = $conn->getConnection();

try {
    $query = "SELECT * FROM user_groups";
    $result = $conn->query($query);

    if ($result === false) {
        echo json_encode(['success' => false, 'message' => "Query failed: " . $conn->error]);
    }

    $user_groups = [];
    while ($row = $result->fetch_assoc()) {
        $user_groups[] = $row;
    }

    $result->close();

    echo json_encode(['success' => true, 'data' => $user_groups]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => 'Query failed: ' . $e]);
}
