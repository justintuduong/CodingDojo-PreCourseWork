/* Chapter 1 - Fundamentals
Set myNumber to 42. Set myName to your name.
Now swap myNumber into myName & vice versa.
*/

var myNumber = 42;
var myName = "Justin";
var temp = myNumber;
myNumber = myName;
myName = temp;
/* --------------------------------------------------------------------
Print integers from -52 to 1066 using a FOR loop.
*/

function integer(){
    for (i = -52; i <= 1066; i++){
        console.log(i);
    }
}

//integer();

/* --------------------------------------------------------------------
Don’t Worry, Be Happy
Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.
*/

function beCheerful(){
    for (var i=1; i <= 98; i++){
        console.log("good morning!")
    }
}
//beCheerful();

/* --------------------------------------------------------------------
Multiples of Three – but Not All Using FOR, print multiples of 3 from -300 to 0.
Skip -3 and -6.
*/

function multOfThree (){
    for (var i = -300; i <= 0; i++){
        if (i!==-3 && i!==-6 && i%3===0){
            console.log(i);
        }
    }
}
// multOfThree();

/*--------------------------------------------------------------------
Printing Integers with While. Print integers from 2000 to 5280, using a WHILE.
*/

function intWhile (){
    var i = 2000;
    while (i <= 5280){
        console.log(i);
    i++;
    }
}
//intWhile();

/*--------------------------------------------------------------------
You say it's your birthday
If 2 given numbers represent your birth month and day in either order, 
log "How did you know?", else log "Just another day...."
*/

function birthday(month,day){
    if (month===7 && day===7){
        console.log("How did you know?");
    } else console.log("Just another day....")
}
// birthday(7,7);
// birthday(7,6);

/* --------------------------------------------------------------------
Leap Year
Write a function that determines whether a given year is a leap year. 
If a year is divisible by four, it is a leap year, unless it is divisible by 100. 
However, if it is divisible by 400, then it is.
*/

function leapYear(year){
    if (year % 400 === 0) {
        console.log("Yes!");
    } else if (year % 100 === 0){
        console.log("No!");
    } else if (year % 4 === 0){
        console.log("Yes!")
    }
}
// leapYear(4);
// leapYear(100);
// leapYear(400);

/* --------------------------------------------------------------------
Print and Count
Print all integer multiples of 5, from 512 to 4096.
Afterward, also log how many there were.
*/

function allInt(){
    var count = 0;
    var i = 512;
    while (i<= 4096){
        if(i%5===0){
            count++;
            console.log(i);
        }
    i++;
    }
    return count;
}
//console.log(allInt());

/*

function allInt(){
    var count = 0;
    for (var i=512; i<=4096; i++){
        if (i%5===0){
            count = count + 1;
            console.log(i);
        }
    }
    console.log(count);
}
// allInt();
*/
/* --------------------------------------------------------------------
Multiples of Six
Print multiples of 6 up to 60,000, using a WHILE.
*/

function multOfSix(){
    let i = 0;
    while (i <= 60000){
        if (i%6 === 0){
            console.log(i);
        }
        i++;
    }
}
//multOfSix();

/* --------------------------------------------------------------------
Counting, the Dojo Way
Print integers 1 to 100. If divisible by 5, print
"Coding" instead. If by 10, also print " Dojo".
*/

function dojoWay(){
    for (var i=1; i<=100; i++){
        if (i%10===0){
            console.log("Dojo");
        } else if (i%5 === 0){
            console.log("Coding");
        } else console.log(i);
    }
}
// dojoWay();

/* --------------------------------------------------------------------
What Do You Know?
Your function will be given an input parameter incoming. Please console.log this value.
*/

function whatDoYouKnow(incoming){
    console.log(incoming);
}
// whatDoYouKnow("hello");

/* --------------------------------------------------------------------
Whoa, That Sucker’s Huge...
Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?
*/
/* ALTERNATE METHOD
var sum = 0;
for (let i = -300; i <= 300;i++){
    if (i% 2 !==0){
        sum+= i;
    }
}
console.log(sum);
*/

function oddInt(num1,num2){
    var sum = 0;
    for (var i=num1; i<=num2;i++){
        if (i%2!==0){
            sum += i;
        }
    }
    return sum;
}
// oddInt(-300000, 300000);

/* --------------------------------------------------------------------
Countdown by Fours
Log positive numbers starting at 2016, counting
down by fours (exclude 0), without a FOR loop.
*/

function countDownByFours(){
    var i = 2016;
    while (i!=0){
        console.log(i);
        i = i -4;
    }
}
// countDownByFours();

/* --------------------------------------------------------------------

Flexible Countdown
Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print 
multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), 
print 9 6 3 (on successive lines).
*/

function flexibleCountDown(lowNum,highNum,mult){
    for ( var i = highNum; i >= lowNum; i--){
        if (i%mult === 0){
            console.log(i + "\n");
        }
    }
}
flexibleCountDown(2,9,3);

/* --------------------------------------------------------------------
The Final Count Down
This is based on “Flexible Countdown”. The parameter names are not as helpful, 
but the problem is essentially identical; don’t be thrown off! Given 4 parameters 
param1,param2,param3,param4), print the multiples of param1, starting at param2 
and extending to param3. One exception: if a multiple is equal to param4, then 
skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), print 6,12,15 
(which are all of the multiples of 3 between 5 and 17, and excluding the value 9).
*/

function finalCountDown(param1,param2,param3,param4){
    var i = param2;
    while (i <= param3){
        if (i !== param4 && i % param1 === 0){
            console.log(i);
        }
        i++;
    }
}
// finalCountDown(3,5,17,9);
