"use strict";
//const sum = (a, b) => a + b; JavaScript way
const sum = (a, b) => a + b; //TypeScript way
const result1 = sum(4, 2);
//const result2 = sum("4", 2)
const result3 = sum(4, 2);
console.log("reult1 :>>", result1);
//console.log("reult2 :>>", result2);
//const multiply = (...rest: number[]): number => { }
const multiply = (...rest) => {
    return rest.reduce((total, number) => {
        total *= number;
        return total;
    });
};
const multiplyResult1 = multiply(2, 4, 5);
console.log("multiplyResult1 :>>", multiplyResult1);
