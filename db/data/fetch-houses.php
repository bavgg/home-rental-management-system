<?php
require($_SERVER['DOCUMENT_ROOT'] . '/db/connection.php');

use Database\Connection;

$conn = new Connection();
$conn = $conn->getConnection();

try {
    $query = "SELECT id, owner_id, no_of_rooms, rate, country, state, city, address, description FROM house";
    $result = $conn->query($query);

    if ($result === false) {
        echo json_encode(['success' => false, 'message' => "Query failed: " . $conn->error]);
    }

    $houses = [];
    while ($row = $result->fetch_assoc()) {
        $houses[] = $row;
    }

    $result->close();

    echo json_encode(['success' => true, 'data' => $houses]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'message' => "Query failed: " . $e]);
}
