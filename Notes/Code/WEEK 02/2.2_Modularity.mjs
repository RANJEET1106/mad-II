// Basic Import

import {c} from './2.2_Module1.mjs';
console.log(c);

import { energy ,square,speed} from './2.2_Module1.mjs';
console.log(energy(10));
console.log(square(10));
console.log(speed)

// Importing Default Function

import just_Change from './2.2_Module1.mjs';// takes default export function and name it as just_Change
console.log(just_Change())

//  Read Only View Of Just Change

import {x,incx} from './2.2_Module1.mjs';
console.log(x);
// x++ //Will Give The Error
incx();
console.log(x);

