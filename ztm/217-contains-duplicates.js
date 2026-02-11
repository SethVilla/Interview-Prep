/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seen = new Set() // O(1)
    for (let i = 0; i < nums.length; i++) { // O(n)
        if (seen.has(nums[i])) return true // O(1)
        seen.add(nums[i]) // O(1)
    }
    return false
};