const eq = require('deep-equal')

// O(n) time
// O(n) space
function removeDupes(input: number[]): number[] {
    const set = new Set<number>()
    const result = new Array<number>()
    input.forEach((e) => {
        if(set.has(e)) {
            return
        }
        result.push(e)
        set.add(e)
    })
    return result
}

type testCase = {
    input: number[],
    expectedResult: number[],
}

const testCases: Array<testCase> = [
    { input: [], expectedResult: [] },
    { input: [1], expectedResult: [1] },
    { input: [-1], expectedResult: [-1] },
    { input: [1, 2, 3], expectedResult: [1, 2, 3] },
    { input: [3, 2, 1], expectedResult: [3, 2, 1] },
    { input: [1, 2, 3, 1], expectedResult: [1, 2, 3] },
    { input: [3, 2, 1, 1], expectedResult: [3, 2, 1] },
    { input: [-1, -2, 3, -1, 2, 1, 1], expectedResult: [-1, -2, 3, 2, 1] },
    { input: [1, 1, 1, 1], expectedResult: [1] },
]

testCases.forEach((tc, i) => {
    const result = removeDupes(tc.input)
    if (eq(result, tc.expectedResult)) {
        console.info(`✅ Test ${i}: input %O`, tc)
    } else {
        console.error(`❌ Test ${i}: input %O actual %O`, tc, result)
    }
})