function shapeArea(n) {
    return (1 + (n-1)*n) *2 - 1;
}

function shapeArea1(n) {
    return n*n + (n-1)*(n-1);
}

function shapeArea2(n) {
    return Math.pow(n, 2) + Math.pow(n-1, 2);
}

shapeArea3=n => {
    return n * (n-1) * 2 + 1
}
