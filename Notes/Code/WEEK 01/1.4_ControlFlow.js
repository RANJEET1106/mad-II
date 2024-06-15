// Conditions

console.log("\n\nConditions\n")

{
    let x=3;
    if(x==5)
    {
        console.log("Exactly its true");
    }
    else
    {
        console.log("Of Course 3!=5 ");
    }
    //Braces Can be Ignored For a SIngle Line
}

//Iteration

console.log("\n\nIteration\n");

for(let x=0;x<5;x++)
{
    console.log(x);
}
console.log("\n\n")
//Braces Can be Ignored For a SIngle Line

{
    const v=[1,2,3,4];
    for(const x in v) //in keyword gives Index as an Output
        console.log(x)

    console.log("\n\n")

    for(const x of v)// of keyword gives actual value present at the index of an array
        console.log(x)
    
}