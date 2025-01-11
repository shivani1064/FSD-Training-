demo() //refernece error
let demo = function()
{
    console.log("hello")
}
console.log(demo);
demo()


let operator = function()
{
    let a = Number(prompt("enter a value"));
    let b = Number(prompt("enter b value"));
    let c = a + b;
    console.log(c);
    return c;
    console.log("hello")

}
console.log(operator());


//create a function to find largest of three numbers

const findLargest = function(a, b, c) {
    let largest = a;
    if (b > largest) {
        largest = b;
    }
    if (c > largest) {
        largest = c;
    }
    return largest;
};

// Take input from the user
const num1 = parseFloat(prompt("Enter the first number:"));
const num2 = parseFloat(prompt("Enter the second number:"));
const num3 = parseFloat(prompt("Enter the third number:"));

// Call the function and display the result
alert("The largest number is: " + findLargest(num1, num2, num3));