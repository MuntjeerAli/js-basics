//#1
//let numOne = 5;
//let numTwo = 13;
//let numThree = 7;
//let numFour = 21;
//let numFive = 48;

//let totalNum = (numOne + numTwo + numThree + numFour + numFive);
//console.log(totalNum);

//#2
//const number = prompt("Enter the number: ");
//if(number % 2 == 0){
//    console.log("The number is even.");
//} else{
//    console.log("The number is odd.");
//}

//#3
//let numOne = 129;
//let numTwo = 251;

//if(numOne > numTwo){
//    console.log(`${numOne} is greater than ${numTwo}`);
//}else{
//    console.log(`${numTwo} is greater than ${numOne}`);
//};


// #4
//let numOne = 8;
//let numTwo = 23;
//let numThree = 17;

//if(numOne > numTwo && numOne > numThree){
//    console.log(`${numOne} is largest.`);
//}else if(numTwo > numOne && numTwo > numThree){
//    console.log(`${numTwo} is largest.`);
//}else{
//    console.log(`${numThree} is largest.`)
//}

// #5

//let numOne = 35;
//let numTwo = 29;
//let numThree = 46;

//if(numOne < numTwo && numOne < numThree){
//    console.log(`${numOne} is smallest.`);
//}else if(numTwo < numOne && numTwo < numThree){
//    console.log(`${numTwo} is smallest.`);
//}else{
//    console.log(`${numThree} is smallest.`)
//}

// #6
//let getDaysInMonth = function(month, year){
//    return new Date(year, month, 0).getDate();
//};

//console.log(getDaysInMonth(2, 2022));
//console.log(getDaysInMonth(1, 2020));
//console.log(getDaysInMonth(6, 2025));
//console.log(getDaysInMonth(12, 2020));


//Intermediate
//Fizzbuzz
let i;
for (i = 1; i <= 100; i++){
    if((i%3) == 0){
    console.log("Fizz" + " ");
}else if ((i%5) == 0){
    console.log("Buzz" + " ");
}else if((i%15) == 0){
    console.log("FizzBuzz" + " ");
}
    else{
        console.log(i + " ");
    }
}

//stars
//for(let i = 1; i <= 5; i++){
//    console.log("* ".repeat(i));
//}

//Write a program to take a number input from user and print multiplication table 12 times for that number.

//const number = prompt("Enter the number: ");
//for(let i = 1; i <= 12; i++){
//    const result = i * number;
//    console.log(`${number} * ${i} = ${result}`);
//}

//Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....
let a = 0;
let b = 1;
let n = 5

console.log(a);
console.log(b);

for(let i = 0; i <= n; i++) {
c = a + b;
console.log(c);
a = b;
b = c;
};
//Write a program to take an input from a user and find its Factorial.
const userNum = 5;
if (userNum < 0){
    console.log('Error!');
}else if(userNum === 0){
    console.log('Factorial of 0 is 1');
}else {
    let fact = 1;
    for(i = 1; i <= userNum; i++){
        fact *= i;
    }
    console.log(`Factorial of ${userNum} is ${fact}.`);
}

//Write a Program to take a number input from user and find if the number is Prime or not

const number = 5;
let isPrime = true;

if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

else if (number > 1) {

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}
else {
    console.log("The number is not a prime number.");
}

//Write a program to take a day as an input and determine whether it is a weekday or weekend.


//Functions:

//Given a and b, your function should return the value of ab
const power = function(x, y){
    return x ** y;
}
console.log(power(2, 3));

//Given length of a regular hexagon, your function should return area of the hexagon.
let areaOfHexagon = function(s){
    return ((3 * Math.sqrt(3) * (s * s)) / 2);
}
console.log(areaOfHexagon(10))

//Given a sentence, your functions should return the number of words in the sentence.

function noOfWords(str){
    return str.match(' ').length;
}
console.log('We are alchemyst')

//Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
let findMin = function(a, b){
    return Math.min(a, b);
}
console.log(findMin(3,5))

//Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
let findMax =  function(a, b){
    return Math.max(a, b);
}
console.log(findMax(7, 3))

//Given three angles of a triange, your function should return if it is a scalen, isosceles, equilateral triangle or not a triangle at all.
function triangleType(a, b, c){
    if(a==b && b==c){
        return 'Equilateral Triangle';
    }else if(a==b || b==c || a==c){
        return 'Isosceles Triangle';
    }else {
        return 'Scalene Triangle';
    }
}
console.log(triangleType(30, 60, 90))

//Given an array, your function should return the length of the array.

let arrayOne = [1,5,3,7,8];
console.log(arrayOne.length)