const findRepeatedDnaSequence = (s) => {

    const n = s.length;

    // encode characters to numbers to compute hash
    const toInt = {'A': 0, 'C': 1, 'G': 2, 'T': 3 }

    // encode array with array from with mapping function
    const encodedSequence = Array.from(s, (c) => toInt[c])

    // Sets to track hashes and repeated sequences
    const seenHashes = new Set();
    const output = new Set();


    // implement a rolling hash with Horner's method

    // h = (n1 × a^k−1) + (n2 × a^k−2) ...
    // a = base (4 possible number of characters)
    // k = length of string
    // n = character
    // a_k = keep track of multiplier for rolling hash

    let h = 0
    let a = 4
    let k = 10
    let a_k = 1

    for (let i = 0; i < k; i++) {
        h = h * a + encodedSequence[i]
        a_k *= a
    }

    seenHashes.add(h)

    for (let start = 1; start <= n - k; start++) {

        // Remove the leftmost character and add the new rightmost character
        h = h * a - encodedSequence[start - 1] * a_k + encodedSequence[start + k - 1];

        // If this hash has been seen_hashes before, add the corresponding substring to the output
        if (seenHashes.has(h)) {
            output.add(s.slice(start, start + k));
        } else {
            seenHashes.add(h);
        }
    }


    // Convert set to list before returning
    return Array.from(output);
}

console.log(findRepeatedDnaSequence("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"))
