function sumEvenNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
    }
    return sum;
}

let testArray = [23, 14, 67, 8, 42];
console.log(sumEvenNumbers(testArray));





// EXERCISE 3: Calculate the sum of even numbers in the array 
/*
Create a function sumEvenNumbers that accepts an array as an argument. 

Use a for loop to iterate through the array and calculate the sum of the even numbers. 

Return the sum of the even numbers.*/