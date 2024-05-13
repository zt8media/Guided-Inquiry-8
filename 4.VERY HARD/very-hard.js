// VERY HARD: 
// Object prototype chain and prototypal inheritance exercise.
// Create a Person constructor that has three properties: name, job, and age.
// Give the Person an 'exercise' method that console logs whatever you want, e.g. "Running is fun! - said no one ever".
// Give the Person a 'fetchJob' method that console logs the person's name and job, e.g. "Brad is a back-end developer".
// Create a Programmer constructor that inherits all the members from Person with an additional 'languages' 
// property that is passed in and a busy property that is NOT passed in and is set to true by default.
// Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. 
// Also, give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.
// Give the Programmer an 'offerNewTask' method that console logs one thing if the programmer is busy and another if 
// the programmer is not, e.g., should initially log out "Mark can't accept any new tasks right now." and "Mark would love to take on a new responsibility." if the programmer is not busy.
// Give the Programmer 'learnLanguage' and 'listLanguages' methods that add new languages 
// to the programmer and list off all languages the programmer knows.
// Test it out - can you create different programmers and run all the methods on them? 
// Does each programmer maintain their own properties properly and independently of the other programmers? Bonus - ES6 Syntax:
//  Use ES6 Syntax in your answer. Feel free to add new methods or properties to incorporate the syntax.





    
   
    // 1. Create a Person Constructor with name,job,age


    // class is a blueprint for creating objects with predefined properties and methods. 
//Used so I can create a constructor 
    class Person {
        
         //Constructor is used to set up the class object 
    // "this" is used and attached to the properties so the values will be able to be changed per object
    //also to reach things outside of the scope 
        
        constructor(name, job, age) {
            this.name = name;
            this.job = job;
            this.age = age;
        }
    //Excercise and fethjob methods 
        exercise() {
            console.log("Running is fun! - said no one ever");
        }
    //this.name and this.job calls the previous objects and will equao the name and the job.  
        fetchJob() {
            console.log(`${this.name} is a ${this.job}`);
        }
    }
    

    // 2. Create a Programmer constructor that inherits all the memebers from the person with lanague added on 

     // The extends keyword is used in class declarations and to create a class as a child of another class. 
     // It makes it so it inheris everything from the Peroson clas

    class Programmer extends Person {
   
    constructor(name, job, age, languages) {
        
        super(name, job, age);  // Call the constructor of the Parent class (Person)
        // super must be called before using 'this' in a constructor, as it sets up 'this' context properly.
        
        //add the programmar classes new objects
        this.languages = languages; 
        this.busy = true;       
    }



//Creating different Methods 
// 3. // Give the Programmer a 'completeTask' method that updates the busy property on that programmer to be false. 

completeTask() {
    this.busy = false;
}

// 4. // Give the Programmer an 'acceptNewTask' method that updates the busy property on that programmer to be true.

 acceptNewTask(){
    this.busy=true;
}
    
// 5. Method to offer a new task based on the programmer's current busy status
offerNewTask() {
    if (this.busy) {
        // If busy, log that the programmer can't accept new tasks
        console.log(`${this.name} can't accept any new tasks right now.`);
    } else {
        // If not busy, log that the programmer is open to new responsibilities
        console.log(`${this.name} would love to take on a new responsibility.`);
    }
}

// 7. Method to add a new programming language to the programmer's skill set
learnLanguage(newLanguage) {
    this.languages.push(newLanguage); 
    // `push` is called on `this.languages`, which is the array of programming languages known by the programmer.
}


};

const person1 = new Person("Harold", "Backend Engineer", 20);
const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS”, ”Ruby"]);
const c3 = new Programmer("Manny", "SysOps", 31,[("HTML", "CSS", "JS", "R")]);


c1.learnLanguage("CSS");
c2.learnLanguage("C++");
c3.learnLanguage("JAVA");
console.log(c1.learnLanguage())
console.log(person1);
console.log(c1);
console.log(c2);
console.log(c3);
person1.exercise();
person1.fetchJob();
