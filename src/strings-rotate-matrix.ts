function rotateMatrix(input: number[][]): number[][] {
    // TODO
}

type testCase = {
    input: number[][],
    expectedResult: number[][],
}

const testCases: Array<testCase> = [
    { input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], expectedResult: [[7, 4, 1], [8, 5, 2], [9, 6, 3]] },
]

// 1 2 3   // 7 4 1
// 4 5 6   // 8 5 2
// 7 8 9   // 9 6 3

testCases.forEach((tc, i) => {
    const result = rotateMatrix(tc.input)
    if (result === tc.expectedResult) {
        console.info(`✅ Test ${i}: input %O`, tc)
    } else {
        console.error(`❌ Test ${i}: input %O actual %O`, tc, result)
    }
})