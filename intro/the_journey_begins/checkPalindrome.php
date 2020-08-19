<?php
    function checkPalindrome($inputString) {
        return strrev($inputString) == $inputString;
    }