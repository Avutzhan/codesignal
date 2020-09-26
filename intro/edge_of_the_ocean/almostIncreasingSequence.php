<?php

function almostIncreasingSequence($sequence) {
    $mistakes = 0;

    for($i = 0; $i < count($sequence)-1; $i++) {
        if($sequence[$i] >= $sequence[$i+1]) {
            if(count($sequence) > $i+2 &&
                $sequence[$i] >= $sequence[$i+2] &&
                $i > 0 &&
                $sequence[$i-1] >= $sequence[$i+1]) {
                return false;
            }
            else
                $mistakes++;
        }

        if($mistakes > 1)
            return false;
    }

    return true;
}

function almostIncreasingSequence2($sequence) {

    $found = 0;
    for ($i=1;$i<sizeof($sequence);$i++) {

        if($sequence[$i] <= $sequence[$i-1]) {

            $found++;
            if($found > 1) {
                return false;
            }

            if($i === 1 || $i + 1 === sizeof($sequence)) {
                continue;
            }
            else if ($sequence[$i] > $sequence[$i-2]) {
                $sequence[$i-1] = $sequence[$i-2];
            }
            else if($sequence[$i-1] >= $sequence[$i+1]) {
                return false;
            }
        }

    }
    return true;
}