//Strings
console.log("\n\nStrings\n")
let s="Hello";

console.log("String is :-",s);
console.log("Length od String :-",s.length);
console.log("First Character of String is :-",s[0])
console.log("Substring of String is :-",s.substring(2,4))

//TEMPLATES
console.log("\n\nTemplates\n")
let st=`${s} World`;//use backtick(` (upper right corner below Esc)) to create template
console.log(st);

console.log(`length of ${s} is ${s.length}`)


//Operators and Coercion

console.log("\n\nOperators\n")
console.log(3+4);       //Add
console.log('3'+'4');   //Concatinate
console.log('3'+4);     //Convert both to any of the type and do the job
console.log('3'*'4');   //Convert back to numbers and do the operation

//Loose and Strict Equality

console.log("\n\nLoose Equality\n")
console.log(3==3);
console.log(3==4);
console.log('3'==3);    //Converts Both to any of the type and gives result

console.log("\n\nStrict Equality\n")
console.log('3'===3);
console.log(undefined==null);
console.log(undefined===null);
