
// Pointers start at the start and end of the array
// we can divide the array by 2, the algorithm must reach the half point to check all items in the array
// stop if there is a mismatch
// O(N/2) => O(N)

export const isPalindrome = (s) => {
    for (let low = 0, high = s.length - 1; low < s.length / 2; low++, high--) {
        if (s[low] !== s[high]) {
            return false;
        }
    }
    return true;
}