function isStrobogrammatic(num)
{
    // reflection over y of numbers
    const strobos = {
        "0" : "0",
        "1" : "1",
        "6" : "9",
        "8" : "8",
        "9" : "6"
    }

    // two pointers left to right stop at same value requires num.length - 1
    let left = 0
    let right = num.length - 1

    while (left <= right) {
        // if number is not a reflection or the reflection is not the correct value
        if (!strobos[num[left]] || strobos[num[left]] !==  num[right]) {
            return false
        }
        left++
        right--
    }

    return true;
}

/*
Time complexity#
The time complexity of the solution is O(n), where n is the length of the input string num. This is because we iterate through the string once, comparing each digit pair from both ends toward the center.

Space complexity
The space complexity is O(1) because the solution uses a fixed-size map to store the strobogrammatic digit mappings, regardless of the input size.
 */