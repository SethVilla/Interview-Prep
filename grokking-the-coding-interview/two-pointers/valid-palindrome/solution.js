
// Pointers start at the start and end of the array
// we can divide the array by 2, the algorithm must reach the half point to check all items in the array
// stop if there is a mismatch
// O(N/2) => O(N)

    const isPalindrome = (s) => {
    // regex
    // delimiters of pattern / /
    // match a group of characters []
    // negation/ complement [^]
    // not alphanumeric [^a-zA-Z0-9]
    // All occurrences /g
    const sans = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    for (let low = 0, high = sans.length - 1; low < sans.length / 2; low++, high--) {
        if (sans[low] !== sans[high] ) {
            return false;
        }
    }
    return true;
}

const isValidPalindrome = (s) => {
    let left = 0, right = s.length - 1;

    while (left < right) {
        while (left < right && !isAlphaNumeric(s[left])) left++
        while (right > left && !isAlphaNumeric(s[right])) right--

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;

    }

    return true;
}

const isAlphaNumeric = (c) => {
    const code = c.charCodeAt(0);
    return (
        code >= 48 && code <= 57 || // 0 - 9
        code >= 65 && code <= 90 || // A - Z
        code >= 97 && code <= 122 // a - z
    )
}

// literal regex
const educativePalindrome = (s) => {
    let left = 0, right = s.length - 1;

    while (left < right) {
        while (left < right && !/[a-zA-Z0-9]/.test(s[left])) {
            left++;
        }

        while (left < right && !/[a-zA-Z0-9]/.test(s[right])) {
            right--;
        }

        if (s[left].toLowerCase() !== s[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}

/*
Time complexity

The time complexity of the above solution is
O(n), where n is the number of characters in the string.

Space complexity#

The space complexity of the above solution is O(1).

 */
