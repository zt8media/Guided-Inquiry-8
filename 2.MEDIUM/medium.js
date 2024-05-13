// Write a function that will allow you to calculate how many slices of pizza x each person y would get
//  if they shared evenly. The function should return an interpolated string like 
//  Each person gets 4.00 slices of pizza; from our 8-slice pizza x being a decimal 
//  in case there is no way to split the pizza evenly.
// 
// Output: Each person gets 4 slices of pizza; from our 8 slice pizza
//   console.log(sharePizza(8, 2)); 
// // Output: Each person gets 2.67 slices of pizza; from our 8 slice pizza
//   console.log(sharePizza(8, 3)); 
// // Output: Each person gets 1.05 slices of pizza; from our 21 slice pizza
//   console.log(sharePizza(21, 20));
// // Output:Each person gets 3.33 slices of pizza; from our 10 slice pizza
//   console.log(sharePizza(10, 3)); 


function howManySlices(x,y){
//Create a function called slices of pizza with two parameter x= the numer of slices the pizza has y=number of person
    let shareSlice =(x/y).toFixed(2)
    // shareSlice variable will equal to x divided by y than .Fixed() tells it to make the anser have as many decials thats i the paraethensis 
return`Each person gets ${shareSlice} of pizza from out ${x} slice of pizza`
}
//returm the statment with the shareslice amount and the orginal amount of pizza
console.log(howManySlices(8,2));



