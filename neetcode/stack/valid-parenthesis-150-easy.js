class Solution {
    isValid(s) {
        const stack = [];
        const map = {
            '(': ')',
            '{': '}',
            '[': ']'
        };

        for (const char of s) {
            if (map[char]) {
                stack.push(char);
            } else {
                if (stack.length === 0) return false;
            }
            if (stack.length === 0) return false;
            const last = stack.pop();
            if (map[last] !== char) return false;
        }
        return stack.length === 0;  
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