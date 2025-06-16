import Deque from "./deque.js";


const cleanUp = (i, currentWindow, nums) => {
    while (!currentWindow.isEmpty() && nums[i] >= nums[currentWindow.peekBack()]) {
        currentWindow.pop()
    }
}

const maxSlidingWindow = (nums, w) => {
    if (nums.length === 1) {
        return nums
    }

    // instantiate an output array based on possible positions length - size of window + 1 for the first window at 0
    const output = new Array(nums.length - w + 1)

    // console.log(console.dir(new MyDeque()))
    // console.log(Object.getOwnPropertyNames(Deque.prototype))
    const currentWindow = new Deque()


    // start the algorithm that will let us slide the window
    for (let i = 0; i < w; i++) {
        cleanUp(i, currentWindow, nums)
        currentWindow.push(i)
    }

    // add the first window max to the ouput
    output[0] = nums[currentWindow.peekFront()]

    // now move window to next index
    for (let i = w; i < nums.length; i++) {
        cleanUp(i, currentWindow, nums)

        // if start of window is out of range remove front
        if (!currentWindow.isEmpty() && currentWindow.peekFront() <= i - w) {
            currentWindow.shift()
        }

        // add current index
        currentWindow.push(i)

        // adding the maximum element of the current window to the output array
        output[i - w + 1] = nums[currentWindow.peekFront()];
    }


    return output
}

console.log(maxSlidingWindow([3,4,5,7, 2, 9, 7], 2))