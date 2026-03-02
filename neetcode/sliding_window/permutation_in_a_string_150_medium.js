/*

Note we are looking for a permutation of a substring, using a sliding window

Steps

    - check if s1 greater than s2
    - instantiate two arrays based on the alphabet to keep count
        - iterate through each string and count its characters
    - instantiate matches
    - add function to check matches
    - initilaize l = 0
    - for loop
        - r is at the end of the length of s1
        - check if first run is successful
        - increment s2 count of end
            - check if it is a match
            - if match update matches
            - check if difference is + 1, substract matches
        - decrement s2 count of start
            - check if its a match
            - if match update matches
            - if not a match count - 1, decrement matches
        - increment l
    - return matches === 26
*/


class Solution {
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const s1Count = Array(26).fill(0)
        const s2Count = Array(26).fill(0)

        for (let i = 0; i < s1.length; i++) {

            // 97 is a - 97 indexed at 0
            // 98 is b - 97 indexed at 1
            s1Count[s1.charCodeAt(i) - 97]++
            s2Count[s2.charCodeAt(i) - 97]++
        }

        let matches = 0

        for (let i = 0; i < 26; i++) {
            if (s1Count[i] === s2Count[i]) {
                matches++
            }
        }

        console.log(s1Count, s2Count)

        let l = 0;

        for (let r = s1.length; r < s2.length; r++) {
            if (matches === 26) {
                return true
            }

            let index = s2.charCodeAt(r) - 97
            s2Count[index]++
            if (s1Count[index] === s2Count[index]) {
                matches++
            } else if (s1Count[index] + 1 === s2Count[index]) {
                matches--
            }

            index = s2.charCodeAt(l) - 97
            s2Count[index]--

            if (s1Count[index] === s2Count[index]) {
                matches++
            } else if (s1Count[index] - 1 === s2Count[index]) {
                matches--
            }
            l++
        }

        return matches === 26

    }
}

console.log(
    new Solution().checkInclusion('abc', 'abc'),
    new Solution().checkInclusion('abc', 'lecaabee'),
)