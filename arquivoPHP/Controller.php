<?php
include "ClassDB.php";
$json = json_decode(file_get_contents('php://input'));
$objDB = new ClassDB();
echo json_encode($objDB->verifyLogin($json->cpfUser,$json->passwordUser));