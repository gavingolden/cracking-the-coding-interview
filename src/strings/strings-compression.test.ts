import {compression} from "./strings-compression";

type testCase = {
    input: string,
    expectedResult: string,
}

const testCases: Array<testCase> = [
    {input: 'aabcccccaaa', expectedResult: 'a2b1c5a3'},
    {input: 'a', expectedResult: 'a'},
    {input: '', expectedResult: ''},
    {input: 'abc', expectedResult: 'abc'},
    {input: 'aa', expectedResult: 'aa'},
    {input: 'abbcccdddd', expectedResult: 'a1b2c3d4'},
]

describe(compression, () => {
    testCases.forEach((tc) => {
        it('should equal', () => {
            const result = compression(tc.input)
            expect(result).toEqual(tc.expectedResult)
        })
    })
})