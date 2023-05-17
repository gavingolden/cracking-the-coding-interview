function rotateMatrix(input: number[][]): number[][] {
    // TODO
    return []
}

type testCase = {
    input: number[][],
    expectedResult: number[][],
}

const testCases: Array<testCase> = [
    //  TODO
    {input: [], expectedResult: []},
    // {input: [[1, 2, 3], [4, 5, 6], [7, 8, 9]], expectedResult: [[7, 4, 1], [8, 5, 2], [9, 6, 3]]},
]

// 1 2 3   // 7 4 1
// 4 5 6   // 8 5 2
// 7 8 9   // 9 6 3

describe(rotateMatrix, () => {
    testCases.forEach((tc) => {
        it('should equal', () => {
            const result = rotateMatrix(tc.input)
            expect(result).toEqual(tc.expectedResult)
        })
    })
})