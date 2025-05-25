const reverseWords = (sentence) => {
    // remove all leading and trailing spaces
    // join with regex pattern space or space+
    // use two pointer to replace words in array
    const words = sentence.trim().split(/\s+/)
    let left = 0
    let right = words.length - 1
    while (left < right) {
        [words[left], words[right]] = [words[right], words[left]]
        left++
        right--
    }

    return words.join(" ")
}


console.log(reverseWords("a   string   with   multiple   spaces"))

/*
Time complexity
The time complexity of this solution is O(n) because the splitting step processes the entire string and extracts words while handling multiple spaces. Moreover, we iterate over the result string using the left and right pointers, which also consumes O(n) time. So, overall, the time complexity is O(n).

Space complexity
The space complexity of the solution above is O(n) due to the list of words, result, and the final string returned as the output.
 */