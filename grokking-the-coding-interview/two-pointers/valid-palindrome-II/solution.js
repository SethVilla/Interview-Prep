function isPalindromeRange(s, left, right) {
    while (left < right) {
        if (s[left] !== s[right]) return false;
        left++;
        right--;
    }
    return true;
}

function isPalindrome(s) {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            // Try skipping either left or right character
            return isPalindromeRange(s, left + 1, right) || isPalindromeRange(s, left, right - 1);
        }
    }
    return true;
}

