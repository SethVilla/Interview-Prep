class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board) {
        const cols = Array.from({length: board.length}, () => new Set())
        const rows = Array.from({length: board.length}, () => new Set())
        const squares = Array.from({length: board.length}, () => new Set())

        for (let row = 0; row < board.length; row++) {
            for (let column = 0; column < board.length; column++) {

                if (board[row][column] === '.') continue
                if (rows[row].has(board[row][column]) ||
                cols[column].has(board[row][column]) || squares[Math.floor((row/3)) * 3 + Math.floor(column/3)].has(board[row][column])
                ) return false
                rows[row].add(board[row][column])
                cols[column].add(board[row][column])
                squares[Math.floor((row/3)) * 3 + Math.floor(column/3)].add(board[row][column]).add(board[row][column])
            }
        }

        return true
    }
}