/////////////////////////////////////////////////////////////////////////
// MUST KNOW !!!
/////////////////////////////////////////////////////////////////////////

//Q: What is a variable and how do I declare one?
//A: stores a value
var variableName = whatever
let variableName = whatever
const variableName = whatever

//Q: What is the difference between var/let/const?
//A: Var is function scoped
    function myFunc(){
        if(true){
            var varScope = "I can be accessed outside this block scope"
        }
        console.log(varScope) // can access the var variable anywhere within that function scope
    }

//let & const are block scoped
    function myFunc(){
        if(true){
            let letScope = "I cannot be accessed outside this block scope"
        }
        console.log(varScope) // can only access the let variable within its block scope (within any {})
    }

//const cannot be reassigned
const variable = 5
variable = 6 // cannot do this!!!

const variable = [1,2,3]
variable.push(4) //can do this! Not reassigning (important distinction)


//Q: What are the main data types in Javascript?
//A: Number, string, boolean, null, undefined, object (and symbol but dont worry about that one)

//Q: What is a function and why do we use them?
//A: set of instructions to execute, allow for reusable code



/////////////////////////////////////////////////////////////////////////
// SHOULD KNOW !!
/////////////////////////////////////////////////////////////////////////

//Q: Why is it important to always initialize a variable with var/let/const?
//A: Hoisting occurs, will attach to the global object and pollute scope

//Q: What is a template literal? Why would I use it and what is the syntax?
//A: Way to write a string that can take a dynamic value from a Javascript expression
//`${expression}`


//Q: What is the difference between null/undefined?
//A: Undefined (variable not declared or declared and has no value)
//null (variable is declared, and value is explicitly set to null (nothing/empty)


//Q: What is type coercion?
//A: when javascript converts from one data type to another


//Q: What are some different ways to write a function in Javascript?
//A: function declaration
    function myFunc(){}
//function expression (stored in a variable)
    let myFunc = function(){} //this is an anonymous function (takes name from variable)
//arrow function 
    let myFunc = () => {} //arrow function is a type of anonymous function


//Q: What is the use of return in a function? Where does the return statement need to be and why?
//A: have access to the value the function produces
//needs to be at the end of any code block/execution context after the code you want to run
//the function with stop execution whenever it hits a return statement



//Q: What is the difference between an argument and parameter? When/where do we use each?
//A: Parameter (variable given when declaring the function)
//argument (value given when calling the function)
    function runThisFunction(parameter){}

    runThisFunction(argument)


//Q: What are some different ways to write a loop in Javascript? Why would you use them?
//A: For, While, ForEach, ForIn, ForOf

    for(let i = 0; i < str.length; i++){}
                                    //for: most versatile loop, best for when need to setup specific conditions for the loop such as different starting points, ways to increment, etc. 
                                    //let i = 0  --> initialize your counter
                                    //i < str.length --> setup condition
                                    //i++ --> increment your counter

    while(x){}                      //as long as condition is true, will keep running code

    array.forEach(item => {})       //takes array and performs callback function on each item in the array
                                    //in this case each element in the array will be access by the parameter "item"

    for(let key in object){         //forIn: used to loop through an object
        console.log(object)         //access the object (need to put the name of the actual object)
        console.log(key)            //access the property (can be any word or use generic "key")
        console.log(object[key])    //access the value (of the property)
    }

    for(let item of array)          //forOf: used to loop through an array
                                    //each index is accessed by the variable "item" (could be any word)


/////////////////////////////////////////////////////////////////////////
// Good to Know !
/////////////////////////////////////////////////////////////////////////

//Q: What reads and interprets our Javascript code?
//A: the browser

//Q: What is the global object in the browser?
//A: window

//Q: What is concatenation and how can I do it?
//A: Combining two things together
//options: “” + “”,  str1.concat('  ', str2),  template literals

//Q: What is a javascript expression?
//A: something that evaluates to a value (variable, function, comparison, etc.)

//Q: How can I tell what data type something is?
//A: Typeof operator
    let variable = "hello"
    typeof variable //return "string"

//Q: What is a callback function and why would we use them?
//A: function you pass into another function
//it is asynchronous (it only runs when the function it is inside is invoked)


//Q: What is a higher order function? Examples?
//A: function that accepts another function as an argument (or returns a function)
//any function with a callback function is a higher order function
//examples: map/filter/reduce/forEach/setTimeout





/////////////////////////////////////////////////////////////////////////
// NEXT LEVEL
/////////////////////////////////////////////////////////////////////////

//Q: What is the ternary operator?
//A: another way to write a condition (more concise)
//Condition ? True : false

    if(person.name === ‘Sean Tayler’){
		let person.role = ‘instructor’ }
		else { let person.role = ‘student’ }

    person.role = Person.name === ‘Sean Tayler’ ? ‘instructor’ : ‘student’

//Q: What is a switch statement?
//A: Another way to write a condition, used when you know the specific set of possible options
    switch(expression){
        case value1: 
            statement; 
            break; 
        case value1: 
            statement; 
            break; 
        default: 
            statement;













Arrays

What is an array/why would we use it? how do we declare it?
variable that holds multiple values, using []
How do you access an item in an array?
by index value
What do we mean when we say an array is index-based? How does this work? What else is index-based?
each value has an associated index, zero-based
strings are also index based (they are iterable)
what does the indexOf() method do? what will it return if the item is not in the array?
search array for a value and return its index position in the array, or return -1
what methods are used to add/remove items from an array?
push/pop/shift/unshift

Objects
What is an object and why would we use it over an array? How do we declare it?
Structure to hold key/value pairs, using {}
What are the two things any object can contain? What is the difference?
properties/methods (same but method is property that stores a function)
What are the two ways we can access the properties/values of an object?
dot notation, bracket notation
how do we add/change properties from an object? How do we delete a property?
Simply declare it (person.name = ‘Sean’)
delete person.name (not used much)
What method can we use to check if an object has a specific property?
Obj.hasOwnProperty(‘property’) —returns boolean
conditions
What are some different ways to write a conditional in Javascript?
Conditional
if(true){code…} else if(true){code…} else{code…}

What is the difference between =, ==, ===?
What do I mean by truthy/falsey? What are the falsey values?
False, 0, “”, null, undefined, NaN
Reference vs Primitive Types
Difference between reference and primitive types?
Passed by reference (place in memory), passed by value (copy)
Which are reference and primitive types?
Reference (objects, arrays, functions), primitives (strings, numbers, booleans, undefined, null)
are reference types mutable or immutable?
Mutable (values change and update everything that points to it)
Will this evaluate to true or false and why? [1, 2, 3] == [1, 2, 3]
What is the difference between shallow and deep copies?
Shallow (one level deep while copying, no references), deep (all levels and references)
How can I make a shallow copy of an array?
slice(), map(), filter(), reduce(), spread operator
how can I make a shallow copy of an object?
Object.create({}, obj), object.assign({}, obj), spread operator
