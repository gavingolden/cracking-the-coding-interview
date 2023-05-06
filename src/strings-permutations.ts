
function arePermutations(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) {
        return false
    }
    const l = s1.length
    const map: Record<string, number> = {}
    for(let i = 0; i < l; i++) {
        const char = s1[i]
        map[char] ||= 0
        map[char]++
    }

    for(let i = 0; i < l; i++) {
        const char = s2[i]
        if (!map[char]) {
            return false
        }
        map[char]--
    }
    return true
}

type testCase = {
    s1: string,
    s2: string,
    expectedResult: boolean,
}

const testCases: Array<testCase> = [
    { s1: 'abc', s2: 'cba', expectedResult: true },
    { s1: 'abc', s2: 'abc', expectedResult: true },
    { s1: 'abc', s2: 'cbb', expectedResult: false },
    { s1: 'a', s2: 'c', expectedResult: false },
    { s1: 'a', s2: 'a', expectedResult: true },
    { s1: 'a', s2: 'aa', expectedResult: false },
    { s1: 'aa', s2: 'a', expectedResult: false },
    { s1: '', s2: '', expectedResult: true },
]

testCases.forEach((tc, i) => {
    const result = arePermutations(tc.s1, tc.s2)
    if (result === tc.expectedResult) {
        console.debug(`✅ Test ${i}: "${tc.s1}" and "${tc.s2}"`)
    } else {
        console.error(`❌ Test ${i}: "${tc.s1}" and "${tc.s2}" failed. Expected "${tc.expectedResult}" but got "${result}"`)
    }
})