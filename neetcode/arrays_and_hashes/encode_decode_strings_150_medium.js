class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = ''

        for (const str of strs) {
            encoded += `${str.length + '#' + str}`
        }
        return encoded
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const result = []
        let i = 0;
        while (i < str.length) {
            let j = i
            while (str[j] !== '#') {
                j += 1
            }
            let length = Number(str.slice(i, j))
            const word = str.slice(j + 1, j + length + 1)
            result.push(word)
            i = j + length + 1
        }
        return result
    }
}
