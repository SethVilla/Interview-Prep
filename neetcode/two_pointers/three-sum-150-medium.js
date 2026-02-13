class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const result = []
        
        const sorted = nums.sort((a,b) => a - b)

        for (let i = 0; i < nums.length - 2; i++) {

            if (i > 0 && nums[i] === nums[i - 1]) continue

            let j = i + 1
            let k = nums.length - 1

            while (j < k) {

                const threeSum = sorted[i] + sorted[j] + sorted[k]

                if (threeSum > 0) {
                    k--
                } else if (threeSum < 0) {
                    j++
                } else {
                    result.push([sorted[i], sorted[j], sorted[k]])
                    j++
                    k--

                    while (j < k && nums[j] === nums[j - 1]) {
                        j++
                    }
                }

            }

        }

        return result

    }
}