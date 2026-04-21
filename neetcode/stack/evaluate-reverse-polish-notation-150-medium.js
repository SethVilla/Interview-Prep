/*
    Steps:
        - Initialize stack
        - For loop through tokens
            - if token is '+', push the sum of the last two elements of the stack
            - if token is '-', push the difference of the last two elements of the stack
            - if token is '*', push the product of the last two elements of the stack
            - if token is '/', push the quotient of the last two elements of the stack
            - else push the number to the stack
        - Return the last element of the stack
*/


class Solution {
    evalRPN(tokens) {
        const stack = []

        for (const token of tokens) {
            if (token === '+') {
                stack.push(stack.pop() + stack.pop())
            } else if (token === '-') {
                const a = stack.pop()
                const b = stack.pop()
                stack.push(b - a)
            } else if (token === '*') {
                stack.push(stack.pop() * stack.pop())
            } else if (token === '/') {
                console.log(stack)
                const a = stack.pop()
                const b = stack.pop()
                stack.push(Math.trunc(b / a))
            } else {
                stack.push(Number(token))
            }
        }
        return stack.pop()

    }
}