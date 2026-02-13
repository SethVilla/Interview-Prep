class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = []

        let prefix = 1;

        for (let i = 0; i < nums.length; i++) {
            result[i] = prefix;
            prefix *= nums[i];
        }

        let postfix = 1;

        for (let i = nums.length - 1; i >= 0; i--) {
            result[i] *= postfix;
            postfix *= nums[i];
        }

        return result;
    }
}

const solution = new Solution();
console.log(solution.productExceptSelf([1, 2, 3, 4]));
console.log(solution.productExceptSelf([-1, 1, 0, -3, 3]));