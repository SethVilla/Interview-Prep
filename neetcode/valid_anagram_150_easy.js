class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false;

        const charCount = {}

        for (const letter of s) {
            charCount[letter] = (charCount[letter] || 0) + 1
        }


        for (const letter of t) {
            if (!charCount[letter]) return false
            charCount[letter]--
        }

        return true
    }
}