const nextStep = (index, step, length) => {
    let result = (index + step) % length
    if (result < 0) {
        result += length
    }
    return result
}

const isNotCycle = (nums, forward, step) => {
    let currDirection = nums[step] >= 0;
    return (forward !== currDirection || nums[step] % nums.length === 0)
}

const circularArrayLoop = (nums) => {
    let length = nums.length

    for (let i = 0; i < length; i++) {
        let slow = i
        let fast = i
        let forward = nums[i] > 0

        while (true) {
            slow = nextStep(slow, nums[slow], length)
            if (isNotCycle(nums, forward, slow)) {
                break
            }

            fast = nextStep(fast, nums[fast], length)
            if (isNotCycle(nums, forward, fast)) {
                break
            }

            fast = nextStep(fast, nums[fast], length)
            if (isNotCycle(nums, forward, fast)) {
                break
            }

            if (slow === fast) {
                return true
            }
        }
    }
    return false
}

/*
    Time: O(n^2)
    Space: O(1)
 */