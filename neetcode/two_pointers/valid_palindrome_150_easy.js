class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if (s.length === 1 || s.length === 0) return true
        const formatted = s.replace(/[^a-z0-9]/gi, '').toLowerCase();

        let i = 0
        let j = formatted.length - 1

        while ( i < j) {
            if (formatted[i] !== formatted[j]) return false
            i++
            j--
        }

        return true
    }

    isAlphaNumeric(char) {
        return (
            char >= A && char <= Z ||
            char >= a && char <= z ||
            char >= 0 && char <= 9
        )
    }
}
