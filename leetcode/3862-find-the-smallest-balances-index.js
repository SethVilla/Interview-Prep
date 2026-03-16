// https://leetcode.com/problems/find-the-smallest-balanced-index/

/*
    Steps:

    - Initialize
        - sum = 0
        - product = 1
    - For loop
        - sum += nums[i]
    - For loop
        - product *= nums[i + 1]
        - sum -= nums[i]
        - if product === sum return i
    - Return -1
/*


/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestBalancedIndex = function(nums) {

    if (nums.length === 1) {
        return - 1
    }

    let sum = 0
    let product = 1

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }

    for (let i = nums.length - 1; i >= 0; i--) {
        console.log(product, sum)
        product *= (nums[i + 1] || 1)
        sum -= nums[i]

        if (product === sum) return i
    }



return -1
    
};