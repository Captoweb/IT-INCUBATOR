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




// 20 декабря

// Switch it Up!
function switchItUp(number){
    switch(number) {
        case 0:
          return 'Zero'
        break;
        case 1:
            return 'One'
        break;
        case 2:
            return 'Two'
        break;
        case 3:
            return 'Three'
        break;
        case 4:
            return 'Four'
        break;
        case 5:
            return 'Five'
        break;  
        case 6:
            return 'Six'
        break;
        case 7:
            return 'Seven'
        break;
        case 8:
           return 'Eight'
        break;
        case 9:
            return 'Nine'
        break;
    }
     
  }
  
  

  // The highest profit wins!
  function minMax(arr){
    let newArr = []
  
    let min = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]
        }
    }
    
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    newArr[0] = min
    newArr[1] = max
    
    return newArr
  }


// Square(n) Sum
function squareSum(numbers){
    let sum = 0
    numbers.map(item => {
      sum+= item * item
    })
    return sum
}



// Difference of Volumes of Cuboids
function findDifference(a, b) {
    let kub1 = 1
    let kub2 = 1
    a.map(item => kub1 *= item)
    b.map(item => kub2 *= item)
    let res = kub1 - kub2
    if (res < 0) res = res * (-1)
    return res
}



// A wolf in sheep's clothing
function warnTheSheep(queue) {

    queue = queue.reverse()
     if (queue[0] == "wolf")	{
         return "Pls go away and stop eating my sheep"
     }
  
    for (let i = 0; i < queue.length; i++) {
        if (queue[i] == "wolf") {
             return `Oi! Sheep number ${i}! You are about to be eaten by a wolf!`
        }  
     }
   
}




// 21 декабря  

// Opposite number
function opposite(number) {
    //your code here
    return number * (-1)
}



// Is this my tail?
function correctTail(body, tail) {
    return body[body.length - 1] == tail
}



// Beginner - Reduce but Grow
function grow(x){
    let mult = 1
    x.map(item => {
       mult *= item 
    })
    return mult
}



// Counting sheep...
function countSheeps(sheep) {
    let count = 0
    for (let i = 0; i < sheep.length; i++) {
        if (sheep[i] === true) count++
    }
    return count
}



// Removing Elements
function removeEveryOther(arr){
    let newArr = []
    for (let i = 0; i < arr.length; i+=2) {
      newArr.push(arr[i])
    }
    return newArr
}


// Grader
function grader(score) {
    if (score > 1 || score < 0.6) return 'F'
    if (score < 0.7) return 'D'
    if (score < 0.8) return 'C'
    if (score < 0.9) return 'B'
    return 'A'
}


// You only need one - Beginner
function check(a, x) {
    let res = a.indexOf(x)
    if (res == -1) {return false} else {return true}
}



// 22 декабря
// Find the Remainder
function remainder(n, m){
    if (n > m) {
      return n % m
    } else {
      return m % n
    }
}

// Exclamation marks series #4
function remove (string) {
    let arr = string.split('')
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == '!') delete arr[i]
    }
    return arr.join('')+'!' 
}
