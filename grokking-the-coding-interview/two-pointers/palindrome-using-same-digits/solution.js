
export const  findNextPermutation = (digits) => {
    // find the first pair of digits where i decreases
    // than meets the criteria to swap for something in the suffix of the array
    // start from the right go left we need to compare i and i + 1, length - 2
    // finding ascending order
    let i = digits.length - 2;

    while (i >= 0 && digits[i] >= digits[i + 1]) {
        i--
    }

    console.log(i)

    // if i = -1 we cannot have a next permutation, as no number to swap exists
    if (i === -1) {
        return false
    }

    // start j at the end of the array to find the first swappable number larger than the pivot
    // we know that every number from left to right is in descending order
    let j = digits.length - 1

    // look for the first smallest number to swap the ends of the sub array
    while (digits[j] <= digits[i]) {
        j--
    }

    // swap values
    [digits[i], digits[j]] = [digits[j], digits[i]]

    let left = i + 1
    let right = digits.length - 1

    // reverse suffix of array
    while (left < right) {
        [digits[left], digits[right]] = [digits[right], digits[left]]
        left++
        right--
    }

    return true;
}

export const findNextPalindrome = (numStr) => {

    const n = numStr.length
    if (n === 1) {
        return ""
    }

    let halfLength = Math.floor(n / 2)
    let leftHalf = numStr.slice(0, halfLength).split("")

    if (!findNextPermutation(leftHalf)) {
        return ""
    }

    let nextPalindrome;

    if (numStr.length % 2 === 0) {
        nextPalindrome = leftHalf.join("") + leftHalf.reverse().join("")
    } else {
        let middle = numStr[halfLength]
        nextPalindrome = leftHalf.join("") + middle + leftHalf.reverse().join("")
    }

    return nextPalindrome

}

console.log(findNextPalindrome("12321"))