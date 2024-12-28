<?php
include 'config.php';
$data = json_decode(file_get_contents('php://input'), true);
$id = $data['id'];

$sql = "UPDATE tarefas SET status = IF(status='pendente', 'concluida', 'pendente') WHERE id = $id";
$response = ['success' => $conn->query($sql)];

echo json_encode($response);
?>