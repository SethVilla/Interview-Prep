/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = 0
    let left = 0
    let right = height.length - 1

    while (left < right) {

        let currHeight = Math.min(height[left],  height[right])

        maxArea = Math.max(maxArea, currHeight * (right - left))

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }

    }

    return maxArea
};