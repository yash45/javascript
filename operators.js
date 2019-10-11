/*in summary; we have memory space and in that space we have variables that carry
different data types ( number, String, Boolean, null,NaN, etc). the computer needs 
operators like =(for assigning), == (checks value only), === (checks value and data type), 
postadding(c++), preadding(++c)

null- means value un-none
empty - means nothing is there

function- is a group of related code or statments to do a specfic task
the rule that governs code writing are
1- function
2- a valid name of a function
3- must have brackets at the end of the name 
4- you should declare the variables
5- console.log(c)
e.g
function addNum()
var a=20, var b=30
var c = a + b 
console.log(c)
return c

//returning values
use return "value -c" at the end of a function definition otherwise it wont 
print if it comes after console. log "value"

//function invocation
use the name of the returned value 

//working on unknown values
function yash (a,b)-----these are parameters, sometime called formal parameters
       {
           let c = a+b
           return c 
       }
    yash (20,30)---------arguments
    yash (15,25)
*/




let a = 30
let b = 50

let c = a+b
console.log("Addition of 30 + 50 is\t"+c)

let d = b-a
console.log("Subtraction of 50 - 30 is\t"+d)

let e = b*a
console.log("Multiplication of 50 * 30 is\t"+e)

let z = c++
console.log(z)

let y = ++c
console.log(y)

let x = d--
console.log(x)
// uses the value as is then remove one later
let s = --d
console.log(s)
// first remove one then use the value after there 2 are removed from 20 making it 18

let q = c+=8
console.log("adding 8 to the last value of c\n"+q) 
// here you add the number of what you want using (+=) to increase

// remember it addes or substracts from the last value of c or otherwise

 let sum = 20
 let sub = 50
 let add = sum % sub
 console.log("the First add value(getting the remainder)\n"+add)
// the new operator (%) is for remainders its called modulus.
// the small number cant go into the big number there...the 20 remains because the remaining space wasnt catered for





 let add2 = sub % sum
 console.log("50%20\t"+add2)
 // give out fourty oranges and you remian with 10 oranges as everyone gets 2
 
 //logical operator
 //&& and ||/OR
 // = is the assignment operator
 // == is the equal operator
 //var x = 5, x2 = "5";
 //var x3 = x ==x2
//  this is true
 // === is the exact operator

// var x4= x===x2
 // this is false, because the data types are not the same 

//function definition
function addNums(){
    let num1 = 200;
    let num2 = 100;
    let num3 = num1 + num2;
    console.log("The sum is\t"+num3)
    //expose num3 to other functions
    return num3;
}
addNums();
//function invocation or function

// here functions; they conservetive ir it doesnt show it other functions
// showing the code  to other calling functions means that  you use the return word ie return num3;
//say subNums as explained below
function subNums(){
    let diff = addNums() - 200
    console.log("The diff is\t"+diff)
}
subNums();
