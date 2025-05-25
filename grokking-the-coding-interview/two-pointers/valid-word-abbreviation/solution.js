function validWordAbbreviation(word, abbr) {
    let i = 0; // pointer for word
    let j = 0; // pointer for abbreviation

    while (i < word.length && j < abbr.length) {
        if (Number.isNaN(Number(abbr[j]))) {
            // Handle character match
            if (abbr[j] !== word[i]) {
                return false; // Mismatch
            }
            i++;
            j++;
        } else {
            // Handle number abbreviation
            if (abbr[j] === "0") {
                return false; // Leading zero in abbreviation
            }

            // Extract the full number (could be multi-digit)
            let num = 0;
            while (j < abbr.length && !Number.isNaN(Number(abbr[j]))) {
                num = num * 10 + Number(abbr[j]);
                j++;
            }

            // Move pointer in the word by the number of characters
            i += num;

            if (i > word.length) {
                return false; // Exceeded word length
            }
        }
    }

    // Both word and abbreviation should be fully consumed
    return i === word.length && j === abbr.length;
}