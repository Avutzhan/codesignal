<?php
function makeArrayConsecutive2($statues) {
    return max($statues) - min($statues) + 1 - count($statues);
}
//see in js