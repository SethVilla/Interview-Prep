const findRepeatedDnaSequence = (s) => {
    // encode characters to numbers to compute hash
    const toInt = {'A': 0, 'C': 1, 'G': 2, 'T': 3 }

    // encode array with array from with mapping function
    const encodedSequence = Array.from(s, (c) => toInt[c])
    console.log(encodedSequence)
    return null
}

console.log(findRepeatedDnaSequence("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"))
