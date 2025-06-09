// 11. Container With Most Water

// https://leetcode.com/problems/container-with-most-water/description/

// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
//
// Find two lines that together with the x-axis form a container, such that the container contains the most water.
//
// Return the maximum amount of water a container can store.


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