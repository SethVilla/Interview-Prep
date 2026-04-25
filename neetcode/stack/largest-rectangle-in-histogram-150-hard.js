class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {
        let maxArea = 0
        const stack = []

        for (let i = 0; i < heights.length; i++) {
            let start = i; 
            while (stack.length && stack[stack.length - 1][1] > heights[i]) {
                const [barStart, barHeight ] = stack.pop()
                maxArea = Math.max(maxArea, barHeight * (i - barStart))
                start = barStart
            }
            stack.push([start, heights[i]])
        }

        for (const [barStart, height] of stack) {
            maxArea = Math.max(maxArea, height * (heights.length - barStart))
        }

        return maxArea
    }
}