<?php
$json = 'db.json';
$contents = file_get_contents($json);
$results = json_decode($contents, true);
$results = json_encode($results, JSON_UNESCAPED_UNICODE);
echo "$results";
?>
