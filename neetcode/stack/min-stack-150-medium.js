/*
    Steps:
        - Initialize
            - stack, min
        - push
            - if stack is empty, push 0 and set min to val
            - else push val - min and check if val is less than min
        - pop
            - if stack is empty, return
            - else pop from stack and check if the popped value is less than 0
            - return the popped value
        - top
            - if stack is empty, return
            - else return the top of the stack
        - getMin
            - return the min
*/

class MinStack {
    constructor() {
        this.stack = []
        this.min = Infinity
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val) {
        if (!this.stack.length) {
            this.stack.push(0)
            this.min = val
        } else {
            this.stack.push(val - this.min)
            if (val < this.min) this.min = val
        }
    }

    /**
     * @return {void}
     */
    pop() {
        if (!this.stack.length) return

        const pop = this.stack.pop()
        if (pop < 0) this.min -= pop
    }

    /**
     * @return {number}
     */
    top() {
        if (!this.stack.length) return
        return this.stack[this.stack.length - 1] < 0 ? this.min : this.stack[this.stack.length - 1] + this.min
    }

    /**
     * @return {number}
     */
    getMin() {
        return this.min
    }
}