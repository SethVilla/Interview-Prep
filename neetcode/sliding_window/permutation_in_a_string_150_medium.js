/*

Note we are looking for a permutation of a substring, using a sliding window

Steps

- check if s1 greater than s2
- instantiate two arrays based on the alphabet to keep count
    - iterate through each string and count its characters


*/


class Solution {
    checkInclusion(s1, s2) {
        if (s1.length > s2.length) return false;

        const s1Count = Array(26).fill(0)
        const s2Count = Array(26).fill(0)

        for (let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - 97]++
            s2Count[s2.charCodeAt(i) - 97]++
        }

        console.log(s1Count, s2Count)

    }
}

console.log(new Solution().checkInclusion('abc', 'abc'))