'use strict'

// EASY:
// A local gym wants to implement an "exercise of the day" program where there is a free class for that day that promotes a certain exercise. The gym needs some backend logic to update its system to reflect which exercise will be promoted that day. Write a function that will take as an input the name of an exercise and console log a message like Today's exercise: running
//  Write one function that can dynamically print the value of the exercise for that day, and it must be closure.
// // Output: Today's exercise: Running
//   console.log(exercise("Running")); 
// // Output: Today's exercise: Swimming
//   console.log(exercise("Swimming"));
// // Output: Today's exercise: Dancing
//   console.log(exercise("Dancing")); 
// // Output: Today's exercise: Fencing
//   console.log(exercise("Fencing")); 



// let excerciseOfTheDay = a 

// let todaysExcercise = " "

// const excercise = () => {
//     if(a === "runnning"){
//         console.log(`Today's excercise: ${todaysExcercise}`)
        
//     }

// }

//How I would solve it my way 



function excerciseOfTheDay (excercise){
// Define the excercise of the dat function with a paramater of exercise
    return function(){
        //Create a return function that will console long the name of the  whatever the excercise is
        
        
        
        console.log(`Todays excercise:${excercise}`)
    }
}
//Declare variable for the outputs 
const running = excerciseOfTheDay('Running');
const swimming = excerciseOfTheDay('Swimming');
const dancing = excerciseOfTheDay('Dancing');
const fencing = excerciseOfTheDay('Fencing');

running();
swimming();
dancing();
fencing();



//Solution that reflects the questions output set up 

function exercise1(exerciseName) {
    // Return and immediately invoke the function that logs the exercise
    return (function() {
        return `Today's exercise: ${exerciseName}`;
    })();
}

// Now, when you call exercise with an argument, it logs directly
console.log(exercise1("Running"));  
console.log(exercise1("Swimming"));
console.log(exercise1("Dancing"));  
console.log(exercise1("Fencing"));  





