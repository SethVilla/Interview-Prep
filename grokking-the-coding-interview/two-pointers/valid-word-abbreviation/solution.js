
function validWordAbbreviation(word, abbr) {
    // initialize pointers for word and abbr
    let wordIndex = 0
    let abbrIndex = 0

    // iterate the length of abbreviation
    while (abbrIndex < abbr.length ) {

        // check if its a number
        if (!isNaN(abbr[abbrIndex])) {

            // check for our condition if number is a 0 return false
            if (abbr[abbrIndex] === '0') {
                return false
            }

            let num = 0
            // numbers can be greater than base^0
            while (abbrIndex < abbr.length && !isNaN(abbr[abbrIndex])) {
                num = num * 10 + parseInt(abbr[abbrIndex])
                abbrIndex++
            }

            // increment wordIndex position
            wordIndex += num
        } else {

            // break if wordIndex exceeds length or position elements dont match
            if (wordIndex >= word.length || abbr[abbrIndex] !== word[wordIndex]) {
                return false
            }

            wordIndex++
            abbrIndex++

        }
    }

    // only true if word and abbr length are achieved
    return wordIndex === word.length && abbrIndex === abbr.length

}
