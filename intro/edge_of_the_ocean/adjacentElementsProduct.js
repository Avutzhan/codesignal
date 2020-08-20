// Given an array of integers, find the pair of adjacent elements that has the largest product and return that product.

// For inputArray = [3, 6, -2, -5, 7, 3], the output should be
// adjacentElementsProduct(inputArray) = 21.
// 7 and 3 produce the largest product.

function max(arr) {
    let args = arr.slice(1);
    let result = args.map((x,i)=>x*arr[i]);
    let max = Math.max(...result);
    return max;
}

max([3, 6, -2, -5, 7, 3]);

//we copy the incoming array and remove the duplicate integer at the beginning
//multiply the copy by the incoming array
//transfer the result to Math.max() and get the largest number

function adjacentElementsProducts(arr) {
    return Math.max(...arr.slice(1).map((x,i)=>x*arr[i]))
}

function adjacentElementsProduct2(inputArray) {
    let prod = inputArray[0] * inputArray[1];

    for (let i = 1; i<inputArray.length - 1;i++) {
        prod = Math.max(prod, inputArray[i] * inputArray[i+1]);
    }

    return prod;
}

