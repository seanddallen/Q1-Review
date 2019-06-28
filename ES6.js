Key = {
    Padawin: "ESSENTIAL KNOWLEDGE - Q1 Basics",
    Apprentice: "BENEFICIAL KNOWLEDGE - Q1 Intermediate",
    Jedi: "I BOW TO YOU - Q1 Advanced"
}


/////////////////////////////////////////////////////////////////////////
// Q1 - PADAWIN (MUST KNOW!!!)
/////////////////////////////////////////////////////////////////////////

//Q: difference between var and let/const?

//A: var is function scoped
//let/const are block scoped
//const cannot be reassigned (but reference type can change values)

function varFunc(){
    if(true){
        var varScope = "I can be accessed within this function but outside this block scope"
    }
    console.log(varScope) // can access the var variable anywhere within that function scope
}

varFunc()

function letFunc(){
    if(true){
        let letScope = "I cannot be accessed outside this block scope"
    }
    console.log(letScope) // can only access the let variable within its block scope (within its code block {})
}

letFunc()


// //const cannot be reassigned
// const variable = 5
// variable = 6 // cannot do this!!!
// variable++ // cannot do this!!!

// const variable = [1,2,3]
// variable.push(4) //can do this! Not reassigning (important distinction)
// console.log(variable)



//Q: What are Template Literals and how do I write them?

//A: way to write a string that can take/inject a dynamic value from a JS expression
    `hello my name is ${name}`


//Q: What is .map?
//A: iterates through array and runs callback function on each item
//Returns each item into a new array (does not mutate original)
    Array.map(item => { do this code…})

    const newArr = numArray.map(num => {
        return num * 2
    })


//Q: What is .filter?
//A: iterates through array and runs callback function on each item
//Returns each item that passes the condition into a new array (does not mutate original)
    Array.filter(item => { do this code…})

    const filteredArr = strArray.filter(name => {
        return name.startsWith('b')
    })
    console.log(filteredArr)


//Chaining Methods
    let filteredNames = strArray.map(name => name.toUpperCase()).filter(name => name.length > 5)
    console.log(strArray)



//Q: What is the Spread operator? (used for arrays/objects)
    //A: Used to make a shallow copy of an object/array without mutating original
    //Simply spreads out the VALUES of one object/array into another

    //Object:
        const originalObject = {name: 'Sean', age: 34}
        const copyObject = { ...originalObject}
        const updatedObject = { ...originalObject, role: 'teacher'}

    //Array:
    const animals = ['cat', 'dog', 'rat']
    const names = ['felix', 'fido', 'fred']

    const copyAnimals = [...animals]
    const updatedAnimals = [...animals, 'pig', 'monkey']
    const concatArrays = [...animals, ...names]




/////////////////////////////////////////////////////////////////////////
// Q1 - APPRENTICE (GOOD TO KNOW!)
/////////////////////////////////////////////////////////////////////////


//Q: What is an arrow function?

//A: shorter syntax for anonymous/callback functions
    const myArrowFunction = () => {...}



//Q: What are default parameters?

//A: Value to be given to the parameter if no argument is passed in
    function makePerson(name='Sean', age=34)



//Q: What is object destructuring?
//A: easier way to references properties of an object
//Get all the properties in any object with one variable declaration
    const personObject = {name: 'Sean', age: 34, role: 'teacher'}
    const {name, age, role} = personObject



//Q: What is a higher order function?
//A: A function that takes a callback function as an argument



//Q: What is .forEach?
//A: iterates through array and runs callback function on each item
//Doesn't return anything (undefined), simply uses values or mutates original array
    Array.forEach((item) => { do this code…})

    numArray.forEach((num, i) => {
        numArray[i] = num * 2
    })
    console.log(numArray)




    
/////////////////////////////////////////////////////////////////////////
// Q1 - JEDI (ON YOUR WAY TO BE A MASTER)
/////////////////////////////////////////////////////////////////////////


//Q: What is reduce and how is it used?
//A: Reduce
//iterates through array and runs callback function on each item
//results in one output (returns value of whatever type the accumulator is)
//Callback parameters:
        //acc: the accumulator
                //this is the value that is returned
                //Accumulates the callbacks return value
                //it is remembered and may be updated across iterations
        //val: the current value
        //Index (optional)
        //Array (optional)
//Second parameter: the initial value (optional)
        //The value the accumulator starts at
        //If value supplied, the acc starts with that value and the current value will start at the first value in the array (index 0)
        //if no value supplied, value will default to first element in the array and the current value will be equal to the second (index 1)

    Array.reduce((acc, val) => { do this code…})

    //Example #1
    numArray.reduce((sum, num) => {
      return sum + num
    }, 0)

    //Example #2
    let newArr = [98, 47, 23, -6, 106, 73, 102, 44]

    newArr.reduce((max, cur) => cur > max ? cur : max)

    //Example #3
    let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice', 'Bob', 'Bob'];

    names.reduce((nameMap, name) => { 
      nameMap[name] ? nameMap[name]++ : nameMap[name] = 1
      return nameMap
    }, {});

    //Example #4
    let letterArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd', 'a', 'c', 'c'];

    letterArray.reduce((acc, letter) => {
      acc.indexOf(letter) === -1 ? acc.push(letter) : acc
      return acc
    }, [])




//Q: What is the rest operator? (used as a parameter)
//A: LAST parameter of a function can be prefixed with (…) which will place all remaining arguments in an array
    function sum(...args){ }  OR   function sum(name, age, ...argsCanBeNamedAnything){ }
    //can then use array methods

    function multiplyEach(multiplier, ...numbers){
      return numbers.map(num => num * multiplier)
    }

    multiplyEach(5,3,4,5,6,6,7,7,5,3,2)



//Q: What are Classes in javascript?
//A: A simpler way to use prototype inheritance and make instances of objects
//Classes are like blueprints for objects
//should be general to be reusable/modular

    //Constructor (used to setup the details of the class/instance)
        // used to describe how an object should be created and with which properties (fills in the details of the class/instance)
        // The function that is called when a new class instance is created

    //Super (used to extend the details of one class into a new class)
        // Calls the constructor on prototype class to extend its properties to the current class/instance

    // New (used to create a new instance of a class)
        // creates a new empty object
        // sets the value of “this” to be the new object
        // Calls the constructor method (and passes in “this”)
        // adds the “__proto__” property (to access the prototype methods)

    //Prototype Inheritance:
        //one object gets access to the properties and methods of another object

    //Prototype/proto
        // Every class has a “prototype” property
        // where methods are stored
        // can use to write methods to the prototype (Array.prototype.myMethod = () => {})
        // All instances have a “__proto__” property 
        // Links to the prototype and has access to its methods
        // Its looks down until the “prototype chain” to find the method

    //Syntax: 
            class Person {
                constructor(name, age, greeting) {
                    this.name = name;
                    this.age = age; 
                    this.greeting = greeting;
                }
                greet() {
                    console.log(this.greeting)
                }
            }

            let sam = new Person('Sam', 22, 'Whattup Brah') 
    
    
            class Teacher extends Person {
                constructor() {
                    super()
                    this.role = 'teacher'
                }
                teach() {
                    studentKnowledge += 100;
                }
                motivate() {
                    studentMorale += 100;
                }
            }

            let sean = new Teacher('Sean', 34, 'Hey there Buckaroo') 