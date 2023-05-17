export function permutationOfPalindrome(str: string): boolean {
    str = str.toLowerCase()
    const counts: Record<string, number> = {}
    let numOdds = 0
    for (let i = 0; i < str.length; i++) {
        const char = str[i]
        if (char === ' ') {
            continue
        }
        counts[char] ||= 0
        counts[char]++
        if (counts[char] % 2 === 1) {
            numOdds++
        } else {
            numOdds--
        }
    }
    return numOdds <= 1
}
