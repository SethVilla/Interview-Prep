/*
    Steps

    - Initilaize
        - left pointer, count of letters map, result, maxFrequency
    - for loop through right
        - count charcaters as they appear
        - keep track of maxF

        - while loop enter condition if window size - maxFrequency > k 
            - reduce from the start of the window the count
            - move forward left pointer

        - calculate new valid window
        

*/

class Solution {

    characterReplacement(s, k) {

        const count = {}
        let l = 0
        let longestValid = 0
        let maxF = 0

        for (const r in s) {
            count[s[r]] = (count[s[r]] || 0) + 1
            maxF = Math.max(maxF, count[s[r]])

            while ((r - l + 1) - maxF > k ) {
                count[s[r]]--
                l++
            }
            longestValid = Math.max(longestValid, r - l + 1)
        }

        return longestValid

    }
}

console.log(
    new Solution().characterReplacement('XYYX', 2),
    new Solution().characterReplacement('AAABABB', 1)
)