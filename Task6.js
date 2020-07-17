

//Declare a variable with defined value. Print the last digit of the number.

let a = 1986;

let b = a%10;
console.log(b);

//Check whether a given number is negative. Print “yes”, if it is negative, print “no” otherwise

let i = 1289;


if (i < 0)
{
    console.log("Yes");
}
else{
    console.log("No");
}

//Declare variable. Initialize it with the value, which shows temperature in degrees Celsius. Print its equivalent in degrees Fahrenheit. To convert temperatures in degrees Celsius to Fahrenheit use the following formula: °C * 1.8 +32 = °F .

let c = 28;
let f = c*1.8 + 32;
console.log(f);

//Given two numbers print(console.log or alert) 1 if one of them is divisible by the other one, otherwise print 0.

let m = 18;
let s = 54;

if (m % s == 0 || s % m == 0)
{
    console.log("1");
}
else{
    console.log("0");
}

//Given three numbers. Find the maximum one.
//Solution 1
let number_1 = 4;
let number_2 = 6;
let number_3 = 46;

if (number_1 > number_2 && number_1 > number_3)
{
    console.log(number_1);
}
else if (number_2 > number_1 && number_2 > number_3)
{
    console.log(number_2);
}
else(number_3 > number_1 && number_3 > number_2)
{
    console.log(number_3);
}
