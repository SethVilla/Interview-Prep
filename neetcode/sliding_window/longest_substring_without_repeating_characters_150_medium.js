/*
    Steps:
        - Initialize
            - left, length of longestSubstring, set for duplicates
        - For loop
            - r determines end of window iterate through r
            - Inner While Loop
                - if the next r has a duplicate remove from the start of window
                - move start of window l forward
            - add new character to set
            - compute longest substring
*/

class Solution {
    lengthOfLongestSubstring(s){
        let l = 0
        let longestSubstring = 0
        const set = new Set()

        for (let r = 0; r < s.length; r++) {
            while (set.has(s[r])) {
                set.delete(s[l])
                l++
            }
            longestSubstring = Math.max(longestSubstring, r - l + 1)
            set.add(s[r])
        }

        return longestSubstring

    }
}

console.log(new Solution().lengthOfLongestSubstring("xxxx"), new Solution().lengthOfLongestSubstring("zxyzxyz"))