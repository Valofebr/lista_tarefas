<?php
include 'config.php';
$data = json_decode(file_get_contents('php://input'), true);
$id = $data['id'];

$sql = "DELETE FROM tarefas WHERE id = $id";
$response = ['success' => $conn->query($sql)];

echo json_encode($response);
?>