export function prime(n) {
    if (n < 2) {
        return `${n} is not a prime number`;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return `${n} is not a prime number`;
        }
    }

    return `${n} is a prime number`;
}
