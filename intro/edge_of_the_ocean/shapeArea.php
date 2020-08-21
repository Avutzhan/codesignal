<?php
function shapeArea($n) {
    return pow($n,2)+pow($n-1,2);
}

function shapeArea1($n) {
    return 2*$n*($n-1)+1;}


function shapeArea2($n) {
    return $n * $n + ($n-1) * ($n-1);
}