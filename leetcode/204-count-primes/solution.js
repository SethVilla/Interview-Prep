var countPrimes = function(n) {
    if (n < 2) return 0

    const primes = new Array(n).fill(true)
    primes[0] = false
    primes[1] = false

    for (let i = 0; i * i < n; i++) {
        if (primes[i]) {
            for (let j = i * i; j < n; j += i) {
                primes[j] = false
            }
        }
    }

    let result = 0
    for (let i = 2; i < n; i++) {
        if (primes[i]) {
            result += 1
        }
    }

    return result
};