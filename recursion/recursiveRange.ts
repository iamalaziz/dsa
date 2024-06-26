/*
recursiveRange
      Write a function called recursiveRange which accepts a number and adds up all the numbers from 0 to the number passed to the function 
*/

const recursiveRange = (n: number): number => {
    if (n == 1) return 1;
    return n + recursiveRange(n-1);
};

console.log(recursiveRange(6))