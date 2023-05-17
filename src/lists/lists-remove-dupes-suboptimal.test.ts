import {removeDupes} from "./lists-remove-dupes-suboptimal";

type testCase = {
    input: number[],
    expectedResult: number[],
}

const testCases: Array<testCase> = [
    {input: [], expectedResult: []},
    {input: [1], expectedResult: [1]},
    {input: [-1], expectedResult: [-1]},
    {input: [1, 2, 3], expectedResult: [1, 2, 3]},
    {input: [3, 2, 1], expectedResult: [3, 2, 1]},
    {input: [1, 2, 3, 1], expectedResult: [1, 2, 3]},
    {input: [3, 2, 1, 1], expectedResult: [3, 2, 1]},
    {input: [-1, -2, 3, -1, 2, 1, 1], expectedResult: [-1, -2, 3, 2, 1]},
    {input: [1, 1, 1, 1], expectedResult: [1]},
]

describe(removeDupes, () => {
    testCases.forEach((tc, i) => {
        it('should equal', () => {
            const result = removeDupes(tc.input)
            expect(result).toEqual(tc.expectedResult)
        })
    })
})