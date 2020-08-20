<?php

function adjacentElementsProduct($inputArray)
{
    $o = [];

    for($i = 0; $i < count($inputArray) - 1; $i ++)
    {
        $o[] = $inputArray[$i] * $inputArray[$i+1];
    }

    return max($o);
}

function adjacentElementsProduct2($inputArray) {
    $max = $inputArray[0] * $inputArray[1];

    foreach($inputArray as $key => $value){
        if ($key != count($inputArray)-1){
            $product = $value * $inputArray[$key+1];
            if  ($max < $product) {
                $max = $product;
            }
        }
    }

    return $max;
}
