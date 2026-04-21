// 3862. Find the Smallest Balanced Index
// https://leetcode.com/problems/find-the-smallest-balanced-index/description/

var smallestBalancedIndex = function(nums) {
    const n = nums.length;

    let rightProduct = 1;
    for (let i = 0; i < n; i++) {
        rightProduct *= nums[i];
    }

    let leftSum = 0;

    for (let i = 0; i < n; i++) {
        rightProduct /= nums[i];

        if (leftSum === rightProduct) return i;

        leftSum += nums[i];
    }

    return -1;
};