const sortColors = (colors) => {

    let start = 0
    let current = 0
    let end = colors.length - 1

    while (current <= end) {
        if (colors[current] === 0) {
            let temp = colors[start]
            colors[start] = colors[current]
            colors[current] = temp
            start++
            current++

        } else if (colors[current] === 1) {
            current++
        } else {
            let temp = colors[end]
            colors[end] = colors[current]
            colors[current] = temp
            end--
        }

    }

    return colors
}

export { sortColors }