function makeArrayConsecutive2(statues) {
    return Math.max(...statues)-Math.min(...statues)+1-statues.length
}

//Description 1
//there is an array with number
//and you must found how many numbers doesnt exist to make consecutive array where one greater other by 1 like [1, 2, 3, 4, 5]
//for example given array [6, 2, 3, 8] result 4 because we need 1, 4, 5, 7 to make array consecutive by 1
// to do this we need

function steps(statues) {
    let max = Math.max(...statues);
    let min = Math.min(...statues);
    let length = statues.length;
    let result = max - min + 1 - length;
    return length;
}

console.log(steps([6, 2, 3, 8]));