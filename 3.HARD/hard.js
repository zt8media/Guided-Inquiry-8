// HARD:
// Inside a closure, create an object called PII (Personally Identifiable Information)that cannot be accessed directly. 
// The object should have at least two properties: name and SSN. 
// Only the name property should be accessible, and it should be called through a public function.
//  The SSN property should not be accessible at all.
//   Creating private objects and private properties helps you control who has access to what data and
//    helps you prevent people who shouldn't see important info like social security numbers from getting access to the data.
//    You can use 'getName' or other get methods to access data that people might need. 
//    For example, people addressing a package or email may need a customer's name,
//     but they definitely shouldn't have access to their SSN.
// // Output: Undefined
//   console.log(patient2.names); 
// // Output: Undefined
//   console.log(patient2.ssn); 
// // Output: John
//   console.log(patient2.getName());
// // Output: 123-45-6789
//   console.log(patient2.getSSN()); 




// First try (uncomment out lines 25-44)

// function createPatient(name,SSN) {

//    let PII ={};
//    PII.name=name;
//    PII.SSN=SSN;


// return { 
//     name:function(){
//         return privateName;
//     },

//     SSN:function(){
//     return privateSSN;
//     }
// }

// }

// let patient2 = createPatient("zari","123-45-6789")


// console.log(patient2.name())

function createPatient(names, SSN) {
    // Using a closure to encapsulate the PII
    
    let PII = {
        privateName: names,  
        privateSSN: SSN      
    };

    // Return an object with methods to access the necessary information
    return { 
        getName: function() {
            return PII.privateName;  
        },

        
        getSSN: function() {
            return PII.privateSSN;  
        }
    };
}

let patient2 = createPatient("Zari", "123-45-6789");


console.log(patient2.getName()); 
console.log(patient2.getSSN());  
console.log(patient2.names)