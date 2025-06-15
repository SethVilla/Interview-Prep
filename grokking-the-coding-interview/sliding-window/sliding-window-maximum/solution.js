import Deque from "./deque.js";


const cleanUp = (i, currentWindow, nums) => {
    while (!currentWindow.isEmpty() && nums[i] >= nums[currentWindow.peekBack()]) {
        currentWindow.pop()
    }
}

const findMaximumSlidingWindow = (nums, w) => {
    if (nums.length === 1) {
        return nums
    }

    const output = new Array(nums.length - w + 1)
    const currentWindow = new Deque()

    for (let i = 0; i < w; i++) {
        cleanUp(i, currentWindow, nums)
        currentWindow.push(i)
    }


    return output
}

console.log(findMaximumSlidingWindow([3,4,5,7, 2, 9, 7], 2))