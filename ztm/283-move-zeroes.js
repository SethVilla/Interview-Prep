const moveZeroes = (nums) => {
    let k = 0;
    for (let i = 0; i < nums.length; i++) { // O(n)
      if (nums[i] !== 0) {
        [nums[k], nums[i]] = [nums[i], nums[k]]; // O(1)
        k++; // O(1)
      }
    }
    return nums
};


console.log(moveZeroes([0,0,1,0,3,12]))
