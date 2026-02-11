// https://neetcode.io/problems/anagram-groups/question?list=neetcode150

class Solution {
    groupAnagrams(words) {
        const map = new Map();
        for (const word of words) {
            const sorted = word.split('').sort().join('');
            if (!map.has(sorted)) {
                map.set(sorted, []);
            }
            map.get(sorted).push(word);
        }
        return [...map.values()];
  }
}
const solution = new Solution();
console.log(solution.groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat", "red"])); // [["eat","tea","ate"],["tan","nat"],["bat"]]