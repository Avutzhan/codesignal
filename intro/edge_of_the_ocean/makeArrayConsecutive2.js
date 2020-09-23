function makeArrayConsecutive2(statues) {
    return Math.max(...statues)-Math.min(...statues)+1-statues.length
}

//Description 1
//there is an array with number
//and you must found how many numbers doesnt exist to make consecutive array form min to max existing integers range where one greater other by 1 like [1, 2, 3, 4, 5]
//for example given array [6, 2, 3, 8] result 3 because we need 4, 5, 7 to make array consecutive by 1
//because give arrays min integer is 2 and max 8 and the result must be between this range
// to do this we need
// max - min + 1 is a array length must be in result
// 4 is a given array's length
// so just increment from result what we have and the result is how many integers we need to do array consecutive
// 8 - 2 + 1 = 7
// 7 - 4 = 3


function steps(statues) {
    let max = Math.max(...statues);
    let min = Math.min(...statues);
    let length = statues.length;
    let result = max - min + 1 - length;
    return length;
}

console.log(steps([6, 2, 3, 8]));