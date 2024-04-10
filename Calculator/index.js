let display = document.querySelector('.display');
console.log(display);

// Function  to add the user input to the display screen
function addTodisplay(input){
    display.textContent+=input;
}

// Clears the Display screen
document.querySelector('#clear').addEventListener('click',function(){
    display.textContent = " ";
});

// function to calculate the final result of the expression that is entered by the user
function calculate(){
        
        display.textContent= eval(display.textContent);
        console.log(display.textContent);
}
