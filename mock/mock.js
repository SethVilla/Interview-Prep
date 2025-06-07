// determine if n is a happy number
// n
// replace the number with the sum of its squared digits
// if 1 is a happy number
// if the number enters a cycle if not a happy number
//

//

export const nextNumber = (num) => {
    let sum = 0

    while(num > 0) {
        const digit = num % 10
        sum += digit * digit
        num = Math.floor(num / 10)
    }

    return sum
}

export const isHappyNumber = (num) => {

    let slow = num
    let fast = nextNumber(num)

    while (fast !== 1 && fast !== slow) {

        slow = nextNumber(slow)
        fast = nextNumber(nextNumber(fast))
    }

    return fast === 1
}

