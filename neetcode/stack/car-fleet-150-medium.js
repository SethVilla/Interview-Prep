class Solution {
    /**
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    carFleet(target, position, speed) {
        const pair = []
        const stack = []

        for (let i = 0; i < position.length; i++) {
            pair[i] = [position[i], speed[i]]
        }

        pair.sort((a,b) => a[0] - b[0])

        for (let i = pair.length - 1; i >= 0; i--) {
            stack.push((target - pair[i][0]) / pair[i][1])
            if (stack.length >= 2 && stack[stack.length - 1] <= stack[stack.length - 2]) {
                stack.pop()
            }
        }

        return stack.length
    }
}