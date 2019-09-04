/*
Countdown
Create a function that accepts a number as an input. Return a new array that counts down by one, from
the number (as array’s ‘zeroth’ element) down to 0 (as the last element). How long is this array?
*/

function countDown(num1){
    var arr = [];
    for (var i = num1; i >= 0; i--){
        arr.push(i);
    }
    return arr;
}
// console.log(countDown(5));

/* -----------------------------------------------------------------------------------
Print and Return
Your function will receive an array with two numbers. Print the first value, and return the second.
*/

function printAndReturn(arr){
    console.log(arr[0]);
    return arr[1];
}
// console.log(printAndReturn([1,2]));

/* -----------------------------------------------------------------------------------
First Plus Length
Given an array, return the sum of the first value in the array, plus the array’s length. What happens if
the array’s first value is not a number, but a string (like "what?") or a boolean (like false).
*/

function firstPlusLength(arr){
    var length= arr.length;
    if (typeof arr[0] === "number" ){
        return arr[0] + arr.length; 
    } else return "what?";
}
// console.log(firstPlusLength(["hi",2,3,4,5]));
// console.log(firstPlusLength([1,2,3,4,5]));

/* -----------------------------------------------------------------------------------
Values Greater than Second
For [1,3,5,7,9,13], print values that are greater than its 2nd value. Return how many values this is.
*/

function valuesGreaterThanSecond(arr){
    var count =0;
    for (var i=0;i<arr.length;i++){
        if (arr[i]>arr[1]){
            count++;
            console.log(arr[i]);
        }
    }
    return count;
}
//console.log(valuesGreaterThanSecond([1,2,3,4,5]));

/* -----------------------------------------------------------------------------------

Values Greater than Second, Generalized
Write a function that accepts any array, and returns a new array with the array values 
that are greater than its 2nd value. Print how many values this is. What will you do 
if the array is only one element long?
*/

function valuesGreaterThanSecond(arr){
    var newArr = [];
    for (var i=0; i<=arr.length;i++){
        if (arr[i] > arr[1]){
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
}
//valuesGreaterThanSecond([1,2,3,4]);
//valuesGreaterThanSecond([1,23,2,3,]);

/* -----------------------------------------------------------------------------------
This Length, That Value
Given two numbers, return array of length num1 with each value num2. Print "Jinx!" if they are same.
DO NOT FULLY UNDERSTAND QUESTION...********************************* revist.

create an array of size num1. make each value = num 2. if num 1 ==num2 say"jinx"

*/
function thisLengthThatValue(num1,num2){
    var newArr = [];
    for (var i=0; i<num1.length;i++){
        if (num1.length === num2){
            console.log("Jinx!");
        } else newArr.push(i);
    }
    return newArr;
}
//thisLengthThatValue(2,4);

/* -----------------------------------------------------------------------------------
Fit the First Value
Your function should accept an array. If value at [0] is greater than array’s length, print "Too big!";
if value at [0] is less than array’s length, print "Too small!"; otherwise print "Just right!".
*/

function fitTheFirstValue(arr){
    if (arr[0] > arr.length){
        console.log("Too big!");
    } else if (arr[0] < arr.length){
        console.log("Too small!");
    } else console.log("Just right!");
}
// fitTheFirstValue([10,1,2]);
// fitTheFirstValue([1]);
// fitTheFirstValue([1,2,3,4]);

/* -----------------------------------------------------------------------------------
Fahrenheit to Celsius
Kelvin wants to convert between temperature scales. Create fahrenheitToCelsius(fDegrees) 
that accepts a number of degrees in Fahrenheit, and returns the equivalent temperature as 
expressed in Celsius degrees. For review, Fahrenheit = (9/5 * Celsius) + 32.
*/
function fahrenheitToCelsius(fDegrees){
    var celsius = (((fDegrees - 32) * 5) /9);
    return celsius;
}
// console.log(fahrenheitToCelsius(52));

/* -----------------------------------------------------------------------------------
Celsius to Fahrenheit
Create celsiusToFahrenheit(cDegrees) that accepts number of degrees Celsius, and returns
the equivalent temperature expressed in Fahrenheit degrees.
(optional) Do Fahrenheit and Celsius values equate at a certain number? Scientific
calculation can be complex, so for this challenge just try a series of Celsius integer 
values starting at 200, going downward (descending), checking whether it is equal to the 
corresponding Fahrenheit value.
*/

function celsiusToFahrenheit(cDegrees){
    var fahrenheit = (9/5*cDegrees) + 32;
    return fahrenheit;
}
// console.log(celsiusToFahrenheit(100));

// TRY OPTIONAL QUESTION BELOW.


/* -----------------------------------------------------------------------------------
Biggie Size
Given an array, write a function that changes all positive numbers in the array to “big”. 
Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1,"big","big",-5].
*/

function makeItBig(arr){
    var newArr=[];
    for (var i=0;i<arr.length;i++){
        if(arr[i]>0){
            newArr.push("big");
        } else newArr.push(arr[i]);
    }
    return newArr;
}
// console.log(makeItBig([-1,3,5,-5]));

/* -----------------------------------------------------------------------------------

Print Low, Return High
Create a function that takes array of numbers. The function should print the lowest 
value in the array, and return the highest value in the array.
*/

function printLowReturnHigh(arr){
    var highest=arr[0];
    var lowest=arr[0];
    for (var i=0;i<arr.length;i++){
        if(arr[i]<lowest){
            lowest = arr[i];
        } else if (arr[i]>highest){
            highest = arr[i];
        }
    }
    console.log(lowest);
    return highest;
}

// console.log(printLowReturnHigh([5,4,3,2,1]));

/* -----------------------------------------------------------------------------------
Print One, Return Another
Build a function that takes array of numbers. The function should print second-to-last 
value in the array, and return first odd value in the array.
*/

function printOneReturnAnother(arr)
{
    console.log(arr[arr.length-2]);
    
    for (let i=0; i<arr.length;i++)
    {
        if (arr[i] %2 !== 0)
        {
            return arr[i];  
        }
    }
}
//console.log(printOneReturnAnother([2,2,2,3,4,7,5,6]));

/* -----------------------------------------------------------------------------------
Double Vision
Given array, create a function to return a new array where each value in the original 
has been doubled. Calling double([1,2,3]) should return [2,4,6] without changing original.
*/

function doubleVision(arr){
    var newArr=[];
    for (let i=0;i<arr.length;i++){
        newArr.push(arr[i] *2);
    }
    return newArr;
}
// console.log(doubleVision([1,2,3]));

/* -----------------------------------------------------------------------------------
Count Positives
Given array of numbers, create function to replace last value with number of positive 
values. Example, countPositives([-1,1,1,1]) changes array to [-1,1,1,3] and returns it.
*/

function countPositives(arr){
    var count=0;
    for (let i=0;i<arr.length;i++){
        if(arr[i]>0){
            count++;
        }

    }
    arr.splice(arr.length-1,1, count);
    return arr;
}
// console.log(countPositives([-1,1,1,1]));

/*-----------------------------------------------------------------------------------
Evens and Odds
Create a function that accepts an array. Every time that array has three odd values 
in a row, print "That’s odd!" Every time the array has three evens in a row, print 
"Even more so!"
*/

function evensAndOdds(arr){
    var evensCount =0;
    var oddsCount=0;
    for (var i =0;i<arr.length;i++){
        if (arr[i] %2 == 0){ // if even, increase count by 1
            evensCount+=1;
            oddsCount = 0; //oddsCount is reset back to 0.
        } else {
            evensCount=0
            oddsCount+=1;
        }
        if (evensCount === 3){
            console.log("Even more so!");
        } else if (oddsCount === 3){
            console.log("That's so odd!");
        }
    }    
}
// console.log(evensAndOdds([1,2,3,3,3,4,5])); // That's so odd
// console.log(evensAndOdds([1,2,2,2,4,5,2])); // Even more so

/*-----------------------------------------------------------------------------------
Increment the Seconds
Given arr, add 1 to odd elements ([1], [3],
etc.), console.log all values and return arr.
*/
 function incrementTheSeconds(arr){
     for(var i=0;i<arr.length;i++){
         if (arr[i]%2!==0){ //if number is odd
            console.log(arr[i]+=1); // add 1
         }
     }
     return arr;
 }
 //console.log(incrementTheSeconds([1,2,3]));

 /*-----------------------------------------------------------------------------------
Previous Lengths
You are passed an array containing strings. Working within that same array, replace 
each string with a number – the length of the string at previous array index – and 
return the array.
*/

function previousLengths(arr){
    var temp;
    for (var i=0;i<arr.length;i++){
        arr.splice(i,1, arr[i].length);
    }
    return arr;
}
//console.log(previousLengths(["hello", "hi","sup"]));

/*-----------------------------------------------------------------------------------
Add Seven to Most
Build function that accepts array. Return a new array with all values except first, 
adding 7 to each. Do not alter the original array.
*/

function sevenToMost(arr){
    var newArr=[];
    for(var i=0; i<arr.length;i++){
        if(i!==0){
        newArr.push(arr[i]+7);
        }
    }
    return newArr;
}
// console.log(sevenToMost([1,2,3,4,5]));

/*-----------------------------------------------------------------------------------
Reverse Array
Given array, write a function to reverse values, in-place. Example: reverse([3,1,6,4,2]) 
returns same array, containing [2,4,6,1,3].
*/
function reverseArray(arr){
    return arr.reverse();
}
// console.log(reverseArray([3,1,6,4,2]));

/*-----------------------------------------------------------------------------------
Outlook: Negative
Given an array, create and return a new one containing all the values of the provided array, 
made negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
*/

function negative(arr){
    var newArr=[];
    for(var i=0;i<arr.length;i++){
        newArr.push(-Math.abs(arr[i]));
    }
    return newArr;
}
//console.log(negative([1,-3,5]));

/*-----------------------------------------------------------------------------------
Always Hungry
Create a function that accepts an array, and prints "yummy" each time one of the values 
is equal to "food". If no array elements are "food", then print "I'm hungry" once.
*/

function alwaysHungry(arr)
{
    var count=0;
    for(var i=0;i<arr.length;i++)
    {
        if (arr[i]=== "food")
        {
            count++;
            console.log("yummy");
        }
    }
    if (count===0)
        {
            console.log("I'm hungry")
        }
}
//alwaysHungry(["food", "food", 1,2,3]);
//alwaysHungry([1,2,3,4,5]);
//alwaysHungry([1,"food",3,"food"]);


/*-----------------------------------------------------------------------------------
Swap Toward the Center
Given an array, swap the first and the last, third and third-to- last, etc. Input[true,42,"Ada",2,"pizza"] 
becomes ["pizza",42,"Ada",2,true]. Change [1,2,3,4,5,6] to [6,2,4,3,5,1].                                            
*/

function snapTowardTheCenter(arr)
{
    var temp=0;
    var x=1;
    for (var i=0;i<arr.length/2;i++)
    {
        if (i%2==0)
        {
            temp = arr[i];
            arr[i]= arr[arr.length-x];
            arr[arr.length-x]=temp;
            x++; 
        } 
        else 
        {
            x++;
        }
    }
    return arr;
}
//console.log(snapTowardTheCenter([true, 42, "Ada", 2, "pizza"]));
//console.log(snapTowardTheCenter([1,2,3,4,5,6]));

/*-----------------------------------------------------------------------------------
Scale the Array
Given array arr and number num, multiply each arr value by num, and return the changed arr.
*/
function scaleTheArray(arr,num)
{
    var temp=0;
    for(var i=0;i<arr.length;i++)
    {
        arr[i]=arr[i] * num;
    }
    return arr;
}
//console.log(scaleTheArray([1,2,3,4],2));