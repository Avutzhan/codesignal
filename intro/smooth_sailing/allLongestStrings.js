function allLongestStrings(inputArray) {
    var obj = {};
    var arr = [];
    var wordLength = 0;

    for (var i = 0; i < inputArray.length; i++) {
        obj[inputArray[i]] = inputArray[i].length;
    }
    for (var keys in obj) {
        if (obj[keys] >= wordLength) {
            wordLength = obj[keys];
        }
    }
    for (var word = 0; word < inputArray.length; word++) {
        if (inputArray[word].length === wordLength) {
            arr.push(inputArray[word]);
        }
    }
    return arr;
}

//without describing code
