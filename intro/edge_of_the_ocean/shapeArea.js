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

function shapeArea(n) {
    return (1 + (n-1)*n) *2 - 1;
}

shapeArea3=n => {
    return n * (n-1) * 2 + 1
}



function shapeArea2(n) {
    return Math.pow(n, 2) + Math.pow(n-1, 2);
}


