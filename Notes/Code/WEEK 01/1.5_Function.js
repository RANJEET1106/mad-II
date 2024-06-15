//Functions

console.log("\n\nFunctions\n")

function add(x,y) //Regular Declaration
{
    return x+y;
}
console.log(typeof(add));
console.log(add(2,3));
add.v={'a':3 , 'b':6};
console.log(add.v)
console.log(add.v.a)
console.log(add.x)

let add1=(x,y)=>(x+y) //Arrow Notation
console.log(add1(5,6))

console.log(function(x,y){return x+y;}(2,3));//Anonymous Function

let add2=function(x,y){return x+y;};//Assigning to Variable
console.log(add2(4,4))