<?php
function shapeArea1($n) {
    return $n * $n + ($n-1) * ($n-1);
}
//see in js file description

function shapeArea2($n) {
    return (1 + ($n-1)*$n) * 2 - 1;
}

function shapeArea3($n) {
    return ($n-1) * $n * 2 +1;
}

function shapeArea4($n) {
    return pow($n,2)+pow($n-1,2);
}




