
const reverse = (array, left, right) => {
    while (left < right){ // O(n)
        [array[left], array[right]] = [array[right], array[left]]
        left++
        right--
    }
}


const rotateArray = (nums, k) => {
    let n = nums.length; // O(1)
    k = k % n;
    reverse(nums, 0, n - 1); // O(n)
    reverse(nums, 0, k - 1); // O(n)
    reverse(nums, k, n - 1); // O(n)
    return nums; // O(1)
}

console.log(rotateArray([1,2,3,4,5,6,7], 3))


const rotateArray2 = (nums, k) => {
    const rotated = new Array(nums.length); // O(n)
    for (let i = 0; i < nums.length; i++) {
        rotated[(i + k) % nums.length] = nums[i]; // O(1)
    }
    return rotated; // O(1)
}

console.log(rotateArray2([1,2,3,4,5,6,7], 3))