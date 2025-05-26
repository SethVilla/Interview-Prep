function minMovesToMakePalindrome(s) {
    // counter start at 0
    let moves = 0

    // initiate two pointers at start and end of string
    // because of the need to swap end at length - 1
    for (let i = 0, j = s.length - 1; i < j; i++) {
        // we need a pointer to move the end to the start and find swappable
        // characters
        let k = j
        for (; k > i; k--) {

            if (s[i] === s[k]) {
                // swap all characters to j
                for (; k < j; k++) {
                    let temp = s[k]
                    s = s.substring(0, k) + s[k + 1] + temp + s.substring(k + 2)
                    moves++
                }

                --j
                break
            }
        }

        //
        if (k === i) {
            moves += Math.floor(s.length/ 2) - i
        }
    }

    return moves
}

/*
Time Complexity
The algorithm has a time complexity of O(n²), where n is the length of the input string s.

The outer loop runs from i = 0 to approximately n / 2, so it executes O(n) times.

For each iteration of the outer loop, the inner loop starts at k = j and moves backward toward i to find a matching character.

In the worst case—when no early match is found—the inner loop can also run up to O(n) times.

As a result, the nested loops contribute to an overall time complexity of O(n²).

Space Complexity
The space complexity is O(n), due to string operations that may create intermediate copies during character swaps.


 */