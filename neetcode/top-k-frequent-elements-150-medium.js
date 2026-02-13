class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = new Map()
        const solution = []
        for (let i = 0; i < nums.length; i++) {
            frequency.set(nums[i], (frequency.get(nums[i]) || 0) + 1)
        }

        const total = new Map()

        for (const [f] of frequency) {
            if (!total.get(frequency.get(f))) {
                total.set(frequency.get(f), [])
            }
            total.get(frequency.get(f)).push(f)
        }
        const sortedF = [...total.keys()].sort((a,b) => b - a)
        outer:
            for (const freq of sortedF) {
                for (const x of total.get(freq)) {
                    solution.push(x)
                    if (solution.length === k) {
                        break outer;
                    }
                }
            }

        return solution

    }
}
