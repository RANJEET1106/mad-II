//  Direct One Line Export

export const c=30000000;

//  Explicit Named Exports

function sq(x){ //Internal Function -NOT Exported
    return x*x;
}

const speed_of_light=299792458;
export function energy(m){
    return m*sq(speed_of_light); 
}

export{
    speed_of_light as speed, sq as square
};

//  Default Export

let m="Default Function"
export default function(){
    return m;
}

//  Read-Only Variable Imports

export let x=0;
export function incx(){
    x++;
}