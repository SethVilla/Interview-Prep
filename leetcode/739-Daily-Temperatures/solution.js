// 739. Daily Temperatures

// https://leetcode.com/problems/daily-temperatures/description/

// Given an array of integers temperatures represents the daily temperatures, return an array answer such that answer[i] is the number of days you have to wait after the ith day to get a warmer temperature. If there is no future day for which this is possible, keep answer[i] == 0 instead.

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {

    const answer = []

    for (let i = 0; i < temperatures.length; i++) {

        for (let j = i + 1; j < temperatures.length; j++) {
            if (temperatures[i] < temperatures[j]) {
                answer.push(j - i)
                break
            } else if (j === temperatures.length - 1) {
                answer.push(0)
            }

        }
    }
    answer.push(0)
    return answer
};

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
    const answer = new Array(temperatures.length).fill(0)
    const stack = []
    for (let i= 0; i < temperatures.length;i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const s = stack.pop()
            answer[s] = i - s
        }
        stack.push(i)
    }
    return answer
};