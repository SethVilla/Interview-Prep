// sort colors problems
// given an array called colors
// 0 = red, 1 = white, 2 blue
// sort the array in place so the numbers are adjacent red, white, blue
// note allowed to use sorting problems no space
// n = colors.length  1 - 300 inclusive colors[i]

export const sortColors = (nums) => {
     const length = nums.length

    let current = 0
    let left = 0
    let right = length - 1

    while (current <= right) {
        if (nums[current] === 0) {
            [nums[current], nums[left]] = [nums[left], nums[current]]
            current++
            left++
        } else if (nums[current] === 1) {
            current++
        } else {
            [nums[current], nums[right]] = [nums[right], nums[current]]
            right--
        }
    }
    return nums
}


console.log(sortColors([2,0,1,2,1,0,0]))