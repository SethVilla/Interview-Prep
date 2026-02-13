class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const uniqueNums = new Set(nums)
        let longest = 0

        for (const num of uniqueNums) {
            if (!uniqueNums.has(num - 1)) {
                let length = 0;
                
                while (uniqueNums.has(num + length)) {
                    length +=1
                }
                longest = Math.max(longest, length)
            }
        }

        return longest

    }
}