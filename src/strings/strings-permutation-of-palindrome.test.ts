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
    {str: 'Tact Coa', expectedResult: true},
    {str: '  Tact Coa', expectedResult: true},
    {str: 'tact coa', expectedResult: true},
    {str: 'tactcoa', expectedResult: true},
    {str: 'a', expectedResult: true},
    {str: 'aa', expectedResult: true},
    {str: 'ab', expectedResult: false},
    {str: 'aba', expectedResult: true},
    {str: 'aba ', expectedResult: true},
    {str: ' aba ', expectedResult: true},
    {str: ' ', expectedResult: true},
    {str: '  ', expectedResult: true},
    {str: ' cd ', expectedResult: false},
    {str: 'hello', expectedResult: false},
]

describe(permutationOfPalindrome, () => {
    testCases.forEach((tc) => {
        it('should equal', () => {
            const result = permutationOfPalindrome(tc.str)
            expect(result).toEqual(tc.expectedResult)
        })
    })
})
