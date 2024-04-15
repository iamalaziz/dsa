/*
productOfArray
    Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
 */

const productOfArray = (nums: number[], i: number): number => {
    if (i == nums.length) return 1;
    return nums[i] * productOfArray(nums, i + 1);
};

console.log(productOfArray([1, 2, 3, 4], 0));
