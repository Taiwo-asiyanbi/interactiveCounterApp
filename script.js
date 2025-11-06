// Get the elements
const count = document.getElementById('count');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');
const message = document.getElementById('message');

// Start from zero
let counter = 0;
let increaseCount = 0;
let decreaseCount = 0;

// Add click events
increaseBtn.addEventListener('click', () =>{
    counter++;
    increaseCount++;  //  Track how many times "+" was clicked
    count.textContent = counter;
    displayMessage()
})

decreaseBtn.addEventListener('click', () =>{
    counter--;
    decreaseCount--;  //  Track how many times "-" was clicked
    count.textContent = counter;
    displayMessage()
})

resetBtn.addEventListener('click', () =>{
    counter = 0;
    count.textContent = 0;
})

function displayMessage(){
    message.textContent= ` Current value: ${counter}. You clicked "+" ${increaseCount} times and "-" ${decreaseCount} times. `

}