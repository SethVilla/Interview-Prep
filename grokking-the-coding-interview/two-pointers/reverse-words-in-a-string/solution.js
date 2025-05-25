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