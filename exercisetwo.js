

function generateRandomArray(length = 100) {
    let randomArray = [];
    for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * 100) + 1;
        randomArray.push(randomNumber);
    }
    return randomArray;
}









// EXERCISE 2: Create an array of random numbers 
/*
Create a function generateRandomArray that accepts one argument: length (the length of the array). 

Inside the function, use a for loop to generate an array of random numbers between 1 and 100. 

Return the array from the function.*/