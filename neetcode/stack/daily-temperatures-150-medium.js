class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const res = new Array(temperatures.length).fill(0)

        const stack = []

        for (let i = 0; i < temperatures.length; i++) {
            while (stack.length > 0 && temperatures[i] > stack[stack.length - 1][0]) {
                const temp = stack.pop()
                res[temp[1]] = i - temp[1]
            }
            stack.push([temperatures[i], i])
        }
        return res
    }
}
