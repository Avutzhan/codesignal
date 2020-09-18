function shapeArea1(n) {
    return n*n + (n-1)*(n-1);
}
//Solution 1
//output must be like this
//n=1, A=1, n=2, A=5, n=3, A=13, n=4, A=25
//so that's mean one side of polygon have n blocks and you must count all blocks
//if we start counting from one side you will notice that second line have n - 1 blocks
//since the polygon is symmetrical we can do this n * n and will remain n - 1
//but how many times we must multiply n - 1
//when we count n * n remains to count n - 1 and this layer form second polygon wich consists from n - 1 blocks
//so you just do same step and multiply (n-1) * (n-1)
//and result will be n * n + (n-1) * (n-1)
//this is a complex solution

function shapeArea2(n) {
    return (1 + (n-1)*n) *2 - 1;
}
//Solution 2
//step1 1 + (n-1)*n this is a half of the polygon + 1 square
//step2 when you know the half of polygon then you must multiply to two
//step3 - 1 because there is a 1 center
//this is solution directed from left to right
//there is we subtract 1 from result


function shapeArea3(n) {
    return (n-1) * n * 2 + 1
}
//Solution3
//similar to solution 2
//step1 (n-1) * n half of polygon
//step2 step1 * 2 full polygon
//step3 add center + 1
//there is we adding + 1 to result


function shapeArea4(n) {
    return Math.pow(n, 2) + Math.pow(n-1, 2);
}


