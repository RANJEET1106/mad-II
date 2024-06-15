//  Basic Object Literals And Methods

console.log('\n\nBasic Object Literals And Methods\n');

let xx={'a':5 , 'b':'hello'};
console.log(xx);
xx.add=function(x,y){
    return x+y;
}

console.log(`xx is of type ${typeof(xx)}`);
console.log(`xx.add is of type ${typeof(xx.add)}`);
console.log(`Evaluate the Function xx.add(3,4) gives ${xx.add(3,4)}`);

//  Special Variable 'this'

console.log("\n\nSpecial Variable 'this'");
xx.f=function(x){
    return this.a+x;
}
console.log(xx.f(10));

//  Coping

console.log("\n\nCoping\n");

let x={a:1 , b:2};
let y=x;
let z={...x};

console.log("\nBefore Change \n")
console.log(x)
console.log(y)
console.log(z)

x.a=5
console.log("\nAfter Change \n") // y will change as x changes but z will not change with x
console.log(x)
console.log(y)
console.log(z)

// Get and Set Properties

console.log('\n\nGet and Set Properties\n')
let user ={
    first : 'Albert' , last : ' Pinto',

    get full(){
        return this.first+' '+this.last ;
    },

    set full(f){
        const parts=f.split(' ');
        this.first=parts[0];
        this.last=parts[1];
    },
}
console.log(user.full);
user.full='RANJEET DESHMUKH';
console.log(`Now ${user.first} and ${user.last}`);

//  Function Methods

console.log('\n\nFunction Methods\n');
xx={'a':5 , 'b':'hello' , 
    'add':function(x,y){
        return x+y+this.a;
    }
}
console.log(xx.add(3,4))

z=xx.add;
console.log(z.call("",3,4)); //NaN Not a Number
console.log(z.call(xx,3,4));

//// apply() - spreads the argument extra arguments ignored
console.log(z.apply(xx,[1,2,3,4]))

//// bind() -closure
let z2=z.bind(xx,2);
console.log(z2(3));

// Prototypes

console.log('\n\nPrototype\n');

x={a:1 , inc:function(){this.a++}};
console.log(x);

y={__proto__:x,b:2};
console.log(y);

console.log(y.a);
y.inc();
console.log(y.a);

//// Classes

console.log('\n\nClasses\n');
class Animal{
    constructor(name){
        this.name=name;
    }
    describe(){
        return `${this.name} makes a sound ${this.sound}`;
    }
}
x=new Animal('Jerry');
console.log(x.describe())

class Dog extends Animal{
    constructor(name){
        super(name);
        this.sound='woof';
    }
}
x=new Dog('Spike');
console.log(x.describe());

class Cat extends Animal{
    constructor(name){
        super(name);
        this.sound='Miaow';
    }
    static fromJson(o){ //Used to convert json string back to object
        c=new Cat(o.name);
        c.sound=o.sound;
        return c;
    }
}
c=new Cat('Tom');
console.log(c.describe());

//JSON API

console.log('\n\nJSON API\n');
let p=JSON.stringify(c);
console.log(c);
console.log(p);

let cc=Cat.fromJson(JSON.parse(p));
console.log(cc.describe());