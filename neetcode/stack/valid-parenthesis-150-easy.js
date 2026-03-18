class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const stack = [];
        const map = {
            ')': '(',
            '}': '{',
            ']': '['
        };

        for (const c of s) {

            if (c in map) {
                if (stack.length && stack[stack.length - 1] == map[c]) {
                    stack.pop()
                } else {
                    return false
                }
            } else {
                stack.push(c)
            }
        }

        return !stack.length

    }
}

console.log(new Solution().isValid("()"));
console.log(new Solution().isValid("()[]{}"));
console.log(new Solution().isValid("(]"));
console.log(new Solution().isValid("([)]"));
console.log(new Solution().isValid("{[]}"));
console.log(new Solution().isValid(""));
console.log(new Solution().isValid("("));
console.log(new Solution().isValid(")"));
console.log(new Solution().isValid("(["));
console.log(new Solution().isValid("]"));