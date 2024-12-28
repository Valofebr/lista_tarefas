<?php
include 'config.php';

$sql = "SELECT * FROM tarefas";
$result = $conn->query($sql);

$tarefas = [];
while ($row = $result->fetch_assoc()) {
    $tarefas[] = $row;
}

echo json_encode($tarefas);
?>