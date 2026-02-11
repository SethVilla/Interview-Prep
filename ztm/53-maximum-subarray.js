const maximumSubarray = (nums) => {
    let solution = nums[0] // O(1)
    for (let i = 1; i < nums.length; i++) { // O(n)
        nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]) // O(1)
        solution = Math.max(solution, nums[i]) // O(1)
    }
    return solution
}

const maximumSubarray2 = (nums) => {
    let solution = nums[0] // O(1)
    let currentSum = nums[0] // O(1)
    for (let i = 1; i < nums.length; i++) { // O(n)
        currentSum = Math.max(nums[i], currentSum + nums[i]) // O(1)
        solution = Math.max(solution, currentSum) // O(1)
    }
    return solution
}

console.log(maximumSubarray([-2,1,-3,4,-1,2,1,-5,4]))
console.log(maximumSubarray2([-2,1,-3,4,-1,2,1,-5,4]))