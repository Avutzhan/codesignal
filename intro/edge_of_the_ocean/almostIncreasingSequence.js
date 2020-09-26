function almostIncreasingSequence(sequence) {
    var bad=0;
    for(var i=1;i<sequence.length;i++) {
        if(sequence[i]<=sequence[i-1]) {
            bad++;
            if(bad>1) return false;

            if(sequence[i]<=sequence[i-2]&&sequence[i+1]<=sequence[i-1]) return false;
            //i tried to use this example and convert it to php code but encountered the error
            //with arrays
            //in js if you mess with array index you get undefined and if you put in condition statement
            //js will understand this as true or false == undefined
            //but php doesnt understand this and return error undefined offset
            //so in this conditional statement i must make other logic
        }
    }

    return true;
}

// Given a sequence of integers as an array, determine whether it
// is possible to obtain a strictly increasing sequence by removing
// no more than one element from the array.

// Solution
// we will use for loop and iterate from second integer
// if integer less or equal to previous integer we will check it, if not return true;
// when we check integers
// if checks (count variable bad ) more than 1 return false;
// if integer less or equal to previous through 1 integer and next less or equal to previous then return false;
// if all checks failed return true;

console.log(almostIncreasingSequence([1, 3, 2, 1])); //false impossible to make sequence
console.log(almostIncreasingSequence([1, 3, 2])); //true can make if drop 3 result 1, 2