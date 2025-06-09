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
var dailyTemperatures = function(temperatures) {
    const answer = new Array(temperatures.length).fill(0);
    const stack = []; // stack stores indices of `temperatures`

    for (let i = 0; i < temperatures.length; i++) {
        while (stack.length && temperatures[i] > temperatures[stack[stack.length - 1]]) {
            const prevIndex = stack.pop();
            answer[prevIndex] = i - prevIndex;
        }
        stack.push(i);
    }

    return answer;
};