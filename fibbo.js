var n = 14, s, fib;
var a = (5 * Math.pow(n, 2) + 4 || 5 * Math.pow(n, 2) - 4 )



var result = Math.sqrt(a);
   
    


//How to fix this line. I don't know how to check perfect square conditions 
if(result % 1==0)  // checks the given input is fibonacci series
{

fib=Math.round(n* 1.618); // finds the next fibonacci series of given input
console.log("The next Fibonacci number is " + fib);

}
else
{
console.log("The given number is not a fibonacci number");
}

