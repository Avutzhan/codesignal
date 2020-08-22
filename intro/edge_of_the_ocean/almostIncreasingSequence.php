<?php

//First solution with inline description
function almostIncreasingSequence($sequence) {
    $found=0;

    for($i=1;$i<sizeof($sequence);$i++) {

        // if first int less or equal to previous then check
        if($sequence[$i]<=$sequence[$i-1]) {

            // increment check
            $found++;

            // if cheks more than 1 then it is wrong
            if($found > 1) {
                return false;
            }

            // if it first iteration then continue
            if ($i === 1) {
                continue;
            }

            // if iteration before last ineger continue
            if ($i + 1 === sizeof($sequence)) {
                continue;
            }

            // if int more than previous through 1 then
            if ($sequence[$i] > $sequence[$i-2]) {
                //previous must be equal to previous through 1
                $sequence[$i-1] = $sequence[$i-2];
            }

            // if previous more or equal to next then wrong
            if($sequence[$i-1] >= $sequence[$i+1]) {
                return false;
            }
        }
    }

    return true;
}

function almostIncreasingSequence2($sequence) {
    $mistakes = 0;
    //we will begin from 0 until -1 index from the end of array because php will throw fatal error
    //if php doesnt find undefined index
    for($i = 0; $i < count($sequence)-1; $i++) {
        //if integer more than or equal to next integer we will check
        if($sequence[$i] >= $sequence[$i+1]) {
            //if length of array more than next through 1 integer and
            if(count($sequence) > $i+2 &&
                //integer more than or equal to next through 1 integer and
                $sequence[$i] >= $sequence[$i+2] &&
                //if the iteration is not first and
                $i > 0 &&
                //prev integer more than or equal to next integer then return false
                $sequence[$i-1] >= $sequence[$i+1]) {
                return false;
            }
            else
                //else increment mistake
                $mistakes++;
        }

        //if mistakes more than 1 return false
        if($mistakes > 1)
            return false;
    }

    //check passed
    return true;
}