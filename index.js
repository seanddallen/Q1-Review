Key = {
    Padawin: "ESSENTIAL KNOWLEDGE - Q1 Basics",
    Apprentice: "BENEFICIAL KNOWLEDGE - Q1 Intermediate",
    Jedi: "I BOW TO YOU - Q1 Advanced"
}


/////////////////////////////////////////////////////////////////////////
// Q1 - PADAWIN (MUST KNOW!!!)
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
            var varScope = "I can be accessed within this function but outside this block scope"
        }
        console.log(varScope) // can access the var variable anywhere within that function scope
    }

//let & const are block scoped
    function myFunc(){
        if(true){
            let letScope = "I cannot be accessed outside this block scope"
        }
        console.log(letScope) // can only access the let variable within its block scope (within its code block {})
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


//Q: What are some different ways to write a loop in Javascript? Why would you use them?
//A: For, While, ForEach, ForIn, ForOf

for(let i = 0; i < str.length; i++){}
                                //for: most versatile loop, best for when need to setup specific conditions for the loop such as different starting points, ways to increment, etc. 
                                //let i = 0         --> initialize your counter variable
                                //i < str.length    --> setup condition for running loop (executing code)
                                //i++               --> increment your counter variable

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


//Q: What is an array/why would we use it? how do we declare it?
//A: think of like a variable that holds multiple values, using []


//Q: How do you access an item in an array? What do we mean when we say an array is index-based? How does this work? What else is index-based?
//A: by index value, each value has an associated index, indexes start at zero (zero-based)
//strings are also index based (they are "iterable" - can iterate through each element by index)


//Q: what methods are used to add/remove items from an array?
//A: push/pop/shift/unshift


//Q: What is an object and why would we use it over an array? How do we declare it?
//A: Structure to hold key/value pairs, when we want to access a value by specific name, using {}
//objects are "enumerable" not "iterable" (can loop though named properties, rather than index number)


//Q: What are the two things any object can contain? What is the difference?
//A: properties and methods (same but method is property that stores a function)
    object = {
        property: 'my property',
        method: () => {}
    }

//Q: What are the two ways we can access the properties/values of an object?
//A: dot notation, bracket notation

//Q: how do we add/change properties from an object? How do we delete a property?
//A: Simply declare it (person.name = ‘Sean’)  --> will either add the property/value or overwrite value if property already exists
//delete person.name (not used much)


//Q: How do you write a conditional in Javascript?
//if(condition){code…} else if(condition){code…} else{code…}


//Q: What is a template literal? Why would I use it and what is the syntax?
//A: Way to write a string that can take/inject a dynamic value from a Javascript expression
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
//A: Parameter ("variable" name given when declaring the function)
//argument (value given when calling the function)
    function runThisFunction(parameter){}

    runThisFunction(argument)


//Q: What is the difference between =, ==, ===?
//A: = is the assignment operator, used to assign a value to a variable
// == is a comparison operator, used to compare if two things are equal (checks values only)
    //will perform implicit type coercion if needed to compare values
// === is a comparison operator, used to compare if two things are equal (checks values and type)
    //no type coercion
    //best to use this by default unless have specific reason to use ==






/////////////////////////////////////////////////////////////////////////
// Q1 - APPRENTICE (GOOD TO KNOW!)
/////////////////////////////////////////////////////////////////////////

//Q: What reads and interprets our Javascript code?
//A: the browser


//Q: What is the global object in the browser?
//A: window


//Q: Why is it important to always initialize a variable with var/let/const?
//A: Hoisting occurs, will attach to the global object and pollute scope


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


//Q: what does the indexOf() method do? what will it return if the item is not in the array?
//A: search array for a value and return its index position in the array, or return -1


//Q: What method can we use to check if an object has a specific property?
//A: Obj.hasOwnProperty(‘property’) —returns boolean


//Q: What do I mean by truthy/falsey? What are the falsey values?
//A: simply means when this value is type coerced into a boolean (for comparison purposes), what would it evaluate to?
    //if it would evaluate to false it is considered falsey, if it would evaluate to true it is considered truthy
//falsey - False, 0, “”, null, undefined, NaN (all other values are truthy)









/////////////////////////////////////////////////////////////////////////
// Q1 - JEDI (ON YOUR WAY TO BE A MASTER)
/////////////////////////////////////////////////////////////////////////

//Q: Difference between reference and primitive types?
//A: Passed by reference (place in memory) vs. passed by value (copy)


//Q: Which are the reference and primitive types?
//A: Reference (objects, arrays, functions), primitives (strings, numbers, booleans, undefined, null)


//Q: Which data types are mutable or immutable?
//A: References types are mutable (values change and update everything that points to it)
    //EX: array can change from [1,2,3] to [1,2,3,4] and still refer to the same array
//Primitive types are immutible
    //EX: a number cannot change from 3 to 4 and still refer to the same number (it is now refering to a different number)


//Q: Will this evaluate to true or false and why? [1, 2, 3] == [1, 2, 3]
//A: False. Because arrays and objects are reference types
//so even if another array/object is exactly alike it is considered a different array/object and thus not equal


//Q: What is the difference between shallow and deep copies?
//A: Shallow copy goes one level deep while copying, doesn't copy any references (just the values)
//Deep copy not only copies all nested levels however deep, but it also copies any references


//Q: How can I make a shallow copy of an array?
//A: slice(), map(), filter(), reduce(), spread operator


//Q: how can I make a shallow copy of an object?
//A: Object.create({}, obj), object.assign({}, obj), spread operator


//Q: What is the ternary operator?
//A: another way to write a condition (more concise)
//Condition ? True : false

    //conditional
    if(person.name === 'Sean'){
        person.role = 'instructor' 
    } else { 
        person.role = 'student' 
    }

    //ternary
    person.role = person.name === 'Sean' ? 'instructor' : 'student'
    //read: if person.name equals Sean is true, then person.role is instructor, else if it is false, then person.role is student


//Q: What is a switch statement?
//A: Another way to write a condition, used when you know the specific set of possible options
    //Syntax:     
    switch(expression){
        case value1: 
            statement; 
            break; 
        case value1: 
            statement; 
            break; 
        default: 
            statement;
    }

    //Example: 
    switch(season){
        case 'spring':
            return "Spring is in the air";
            break;
        case 'summer':
            return "Don't worry it's a dry heat";
            break;
        case 'fall':
            return "The beautiful leaves of autumn";
            break;
        case 'winter':
            return "Walking in a winter wonderland";
            break;
        default:
            return "You did not type in a valid season name";
    }