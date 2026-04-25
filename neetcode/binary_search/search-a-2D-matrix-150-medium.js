class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const rows = matrix.length
        const columns = matrix[0].length

        let top = 0
        let bottom = rows - 1

        while (top <= bottom) {
            let row = Math.floor((top + bottom) / 2)

            if (target > matrix[row][columns - 1]) {
                top = row + 1
            } else if (target < matrix[row][0]) {
                bottom = row - 1
            } else {
                break
            }
        }

        if (!(top <= bottom)) {
            return false
        }

        let left = 0
        let right = columns - 1
        let row = Math.floor((top + bottom) / 2)

        while (left <= right) {
            let mid = Math.floor((left + right) / 2)

            if (target > matrix[row][mid]) {
                left = mid + 1
            } else if (target < matrix[row][mid]) {
                right = mid - 1
            } else {
                return true
            }
        }

        return false

    }
}
