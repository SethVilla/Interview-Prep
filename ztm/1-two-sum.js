/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map() // O(1)

    for (let i = 0; i < nums.length; i++) { // O(n)
        const complement = target - nums[i]
        if (map.has(complement)) { // O(1)
            return [map.get(complement), i]
        } else {
            map.set(nums[i], i) // O(1)
        }
    }
    return []
};

const twoSum2 = (nums, target) => {
    // O(n^2) time complexity
    // O(n) space complexity
    // Because we are using the reduce method to iterate over the array and the findIndex method to find the complement index.
    const mapReduce = nums.reduce((tuple, num, index) => {
        const subArray = nums.slice(index + 1)
        const complementIndex = subArray.findIndex(subNum => subNum + num === target)
        if (complementIndex > -1) {
            return [index, complementIndex + index + 1]
        }
        return tuple
    }, [])
    return mapReduce
}

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum2([2, 7, 11, 15], 9));