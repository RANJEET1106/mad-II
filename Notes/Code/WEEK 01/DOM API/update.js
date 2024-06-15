const d1=document.getElementById('d1');
d1.innerHTML="Welcome to d1";

const d2=document.getElementById('d2');
d2.innerHTML="Goodbye from d2";


//With TimeOuts

async function demo()
{
    console.log("Just Starting");
    await new Promise(r=>setTimeout(r,2000));

    const d1=document.getElementById('d1');
    d1.innerHTML="After two Seconds";
    await new Promise(r=>setTimeout(r,2000));

    const d2=document.getElementById('d2');
    d2.innerHTML="After four Seconds";   
}
demo();

//Handeling Event With CLicks

let x=0;
const c1=document.getElementById('c1');
c1.innerHTML=`Click Count : ${x}`;
d1=addEventListener('click',e=>{
    x++;
    c1.innerHTML=`Click Count: ${x}`
    c1.style.fontSize=`${x+10}px`
})
