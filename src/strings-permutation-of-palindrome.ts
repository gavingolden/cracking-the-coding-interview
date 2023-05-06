function permutationOfPalindrome(str: string): boolean {
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

type testCase = {
    str: string,
    expectedResult: boolean,
}

const testCases: Array<testCase> = [
    { str: 'Tact Coa', expectedResult: true },
    { str: '  Tact Coa', expectedResult: true },
    { str: 'tact coa', expectedResult: true },
    { str: 'tactcoa', expectedResult: true },
    { str: 'a', expectedResult: true },
    { str: 'aa', expectedResult: true },
    { str: 'ab', expectedResult: false },
    { str: 'aba', expectedResult: true },
    { str: 'aba ', expectedResult: true },
    { str: ' aba ', expectedResult: true },
    { str: ' ', expectedResult: true },
    { str: '  ', expectedResult: true },
    { str: ' cd ', expectedResult: false },
    { str: 'hello', expectedResult: false },
]

testCases.forEach((tc, i) => {
    const result = permutationOfPalindrome(tc.str)
    if (result === tc.expectedResult) {
        console.debug(`✅ Test ${i}: input %O`, tc)
    } else {
        console.error(`❌ Test ${i}: input %O actual %O`, tc, result)
    }
})