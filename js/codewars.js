// Returning Strings
//Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".
// [Make sure you type the exact thing I wrote or the program may not execute properly]

function greet(name) {
    //your code here
    return 'Hello, ' +  name + ' how are you doing today?'
}



// Multiply the number
// Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised 
// to the number of digits of each numbers, so, for example:
function multiply(number){
    if(number < 0) return (number * 5**(number.toString().length -1)); 
    else return (number * 5**number.toString().length);
}