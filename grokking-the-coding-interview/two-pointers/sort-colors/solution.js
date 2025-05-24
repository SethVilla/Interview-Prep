const sortColors = (colors) => {

    // Three pointers
    // start represents the first color sub sorting
    // current the pointer than traverses the entire array
    // end the 3rd color sub sorting points to the start of the 3rd color sub array
    let start = 0
    let current = 0
    let end = colors.length - 1

    // we need to check if current is <= end if current reaches end and the end is a 0 we need to swap
    while (current <= end) {

        // if current is 0 swap and increment positions
        if (colors[current] === 0) {
            [colors[start], colors[current]] = [colors[current], colors[start]]
            start++
            current++

        // skip if we find a 1
        } else if (colors[current] === 1) {
            current++
        } else {
            // if a 2 swap but we never check the value of the end so don't increment
            let temp = colors[end]
            colors[end] = colors[current]
            colors[current] = temp
            end--
        }

    }

    return colors
}

export { sortColors }