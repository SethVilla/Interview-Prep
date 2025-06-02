
const sumOfSquares = (num) => {
    let sum = 0;
    while (num > 0) {
        let digit = num % 10;
        sum += digit * digit;
        num = Math.floor(num / 10);
    }
    return sum;
};

export function isHappyNumber(n){

    let slow = n; // 1
    let fast = sumOfSquares(n); // 2

    while (fast !== 1 && slow !== fast) {
        slow = sumOfSquares(slow);
        fast = sumOfSquares(sumOfSquares(fast));
    }

    return fast === 1;
}