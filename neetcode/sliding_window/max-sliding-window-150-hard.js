/*
    Steps:

    Initialize
        - output array
        - deque
        - left pointer
        - right pointer

    While loop
        - while right pointer is less than length of nums
        - while deque is not empty and last element of deque is less than current right pointer
            - pop from deque
        - push right pointer to deque
        - if left pointer is greater than first element of deque
            - shift from deque
        - if right pointer + 1 is greater than or equal to k
            - push first element of deque to output
            - increment left pointer
        - increment right pointer
    - return output
*/

class Solution {
    
    
    
    maxSlidingWindow(nums, k) {
        const output = [];
        const deque = [];

        let l = 0;
        let r = 0

        while (r < nums.length) {

            while (deque.length && nums[deque[deque.length - 1]] < nums[r]) {
                deque.pop();
            }

            deque.push(r);

            if (l > deque[0]) {
                deque.shift();
            }

            if (r + 1 >= k) {
                output.push(nums[deque[0]]);
                l++;
            }

            r++;
        }

        return output;
    }
}

console.log(new Solution().maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3));