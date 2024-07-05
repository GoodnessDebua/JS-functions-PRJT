// STRING MANIPULATION AND FUNCTIONS :

// Write a function that reverses a string.

function reverseString(string){
    let arr = string.split("");
    let result = arr.reverse();
    let result2 = result.join("");

    return result2;
}
console.log(reverseString("software engineer in the making"));

// Count characters

function countChars(string){
    let arr = string.split("");
    let count = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== " "){
            count++;
        }
    }
    return count;
}
console.log(countChars("eat code sleep repeat"));

// Capitalize words

function Capitalizewords(string){
    let arr = string.split(" ");
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    return arr.join(" ");
}

console.log(Capitalizewords("javascript, gateway to software engineering"));


// ARRAY FUNCTIONS :

// Find maximum and minimum 

function findMinMax(arr){
    let min = arr[0];
    let max = arr[0];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < min){
            min = arr[i];
        }
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return [min, max];
}

console.log(findMinMax([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Sum of arrays

function sum(){
    let sum = 0;
    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

// Filter array

function filterarray(){
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let result = arr.filter(function(num){
        if(num % 2 === 0){
            return true;
        }
    });
    return result;
}
console.log(filterarray(''));

// MATHEMATICAL FUNCTIONS

// Factorial

function factorial(num){
    let result = 1;
    for(let i = 1; i <= num; i++){
        result *= i;
    }
    return result;
}

console.log(factorial(5));

// Prime Number Check

function isPrime(num){
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return false;
        }
    }
    return num > 1;
}

console.log(isPrime(7));

// Fibonacci Sequence 

function fibonacci(num){
    let arr = [0, 1];
    for(let i = 2; i <= num; i++){
        arr[i] = arr[i - 1] + arr[i - 2];
    }
    return arr;
}

console.log(fibonacci(10));