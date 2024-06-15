//  Basic Array Declaration

console.log("\n\nBasic Array Declaration\n");
let x=[1,2,3];
console.log(`${typeof(x)}: ${x} with length = ${x.length}`);
console.log(x[0]);

//  Mixed Element Type

console.log("\n\nMixed Element Type\n");
let y=[1,'b',a=>a+1];
console.log(`${typeof(y)}: ${y} with length = ${y.length}`);
console.log(x.length,y.length);

// Deleting

console.log("\n\nDeleting\n")
x=[];
console.log(`${typeof(x)}: ${x} with length = ${x.length}`);

y.length=10;
console.log(`${typeof(y)}: ${y} with length = ${y.length}`);

// Iteration

console.log("\n\nIteration\n")
y.length=5;

for(let i=0;i<y.length;i++)
    console.log(`y: ${y[i]} of type ${typeof(y[i])}`);

console.log("\n\nUsing In for Iteration\n");//In Skips the Undefined Takes Only Value
for(const i in y)
    console.log(`y: ${y[i]} of type ${typeof(y[i])}`);

console.log("\n\nUsing Of for Iteration\n");
for(const i of y)
    console.log(`y: ${i} of type ${typeof(i)}`);


//  Are Objects Iterable?

console.log("\n\nAre Objects Iterable?\n");
x={'a':1,'b':'alpha','c':[3,2,1]}; // Curly Brace Represent Objects

for(const i in x)//iterates over the keys of x
    console.log(x[i]);

/*
for(const i of x) // of directly iterates over the object and it is not possible
    console.log(i)

////iterating over an object is not possible
*/

console.log("\n\nUsing Object.entries for iterating\n");
for(const[k,v] of Object.entries(x))
    console.log(k,v);


//  Creating Arrays With Holes

console.log("\n\nCreating Arrays With Holes\n")
y=new Array(5);
y[1]=10;
y[3]="Hello";

for(const i of y)
    console.log(`y: ${i} of type ${typeof(i)}`);


// Spreading

console.log("\n\nSpreading\n");
x=[1,2,3];
y=[0,...x,4];
console.log(x);
console.log(y);

//  Iteration and Transformation

console.log("\n\nIteration and Transformation\n");
x=[1,-2,3,-4,5,6,-7,8];
y=x.find(x=>x<0); //finds the first element satisfing the condition
console.log(x);

console.log("Find Function:");
console.log(y);

console.log("Filter Function:");
y=x.filter(x=>x<0);
console.log(y);

console.log("Map Function:");
y=x.map(i=>i>0 ? '+':'-');
console.log(y);

console.log("Reduce Function:");
y=x.reduce((a,i)=>a+i,0);
console.log(y);

y=x.reduce((a,i)=>a*i,1);
console.log(y);

console.log("Sort Function:")
console.log(x.sort());          //String Based Sorting
console.log(x.sort((a,b)=>a-b));

// Destructuring

console.log("\n\nDestructuring\n");
x=[1,2,3];
[a,b]=x;
console.log(a);
console.log(b);

// Object Destructuring
console.log("\n\nObject Destructuring\n");
const person={
    firstName:'Albert',lastName:'Pinto',age:25,city:'Mumbai'
};
const {firstName:fn , city:c}=person;
console.log(fn);
console.log(c);
const {lastName,age}=person;
console.log(lastName);
console.log(age);

console.log("Use of Rem Function:");
const {firstName,...rem}=person;
console.log(firstName);
console.log(rem);