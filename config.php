<?php
$host = 'localhost';
$db = 'lista_tarefas';
$user = 'root';
$password = '';
$conn = new mysqli($host, $user, $password, $db);
if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
}
?>