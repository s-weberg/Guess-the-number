

const target = Math.floor(Math.random() * 10) + 1;

let guess = parseInt(prompt("Guess the number between 1 and 10:"));

while(guess !== target) {
    if(guess > target) {
        guess = parseFloat(prompt("Your guess is too high! Try again."));
    } else {
        guess = parseFloat(prompt("Your guess is too low! Try again."))
    }
}

alert("Congrats! You guessed the right number!")




// EXERCISE 1: Guess the random number 
/*
Create a function guessNumberGame that generates a random number between 1 and 10. 

The function should repeatedly prompt the user to guess the number until the correct number is guessed. 

Use a while loop to keep asking the user for input until they guess correctly.  

Provide feedback if the guess is too high or too low.*/