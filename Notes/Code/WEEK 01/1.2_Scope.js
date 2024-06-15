var x1=10;
const x2=20;
let x3=30;
{
    console.log(x1,x2,x3);
    var y1=40;
    const y2=50;
    let y3=60;
}
console.log(y1,y2,y3);

/*
    veriable declared by using var are present throughout the program
    i.e. their scope is global

    whereas let and const have local scope 
    i.e. we can't access y2 and y3 declared inside the block in the function 
    outside the block
    that's why is gives us reference error
*/