// 18 декабря
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


// 19 декабря

// BASIC: Making Six Toast
function sixToast(num) {
    if (num > 6) return (6 - num) * -1
    else return 6 - num
}



// Check same case
function sameCase(a, b){
    if ( a.toLowerCase() == a.toUpperCase() || b.toLowerCase() == b.toUpperCase() ) {
        return -1
    }
     if ( a.toLowerCase() == a && b.toLowerCase() == b || a.toUpperCase() == a && b.toUpperCase() == b ) {
        return 1
    }
     return 0
}


// Create Phone Number
function createPhoneNumber(numbers){
    numbers.splice(0,0,'(');
    numbers.splice(4,0,')');
    numbers.splice(5,0, ' ');
    numbers.splice(9,0, '-');
   
   return numbers.join('');
  }

  