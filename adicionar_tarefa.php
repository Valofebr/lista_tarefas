<?php
include 'config.php';
$data = json_decode(file_get_contents('php://input'), true);
$descricao = $data['descricao'];

$sql = "INSERT INTO tarefas (descricao) VALUES ('$descricao')";
$response = ['success' => $conn->query($sql)];

echo json_encode($response);
?>