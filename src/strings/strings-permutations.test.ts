import {arePermutations} from "./strings-permutations";

type testCase = {
    s1: string,
    s2: string,
    expectedResult: boolean,
}

const testCases: Array<testCase> = [
    {s1: 'abc', s2: 'cba', expectedResult: true},
    {s1: 'abc', s2: 'abc', expectedResult: true},
    {s1: 'abc', s2: 'cbb', expectedResult: false},
    {s1: 'a', s2: 'c', expectedResult: false},
    {s1: 'a', s2: 'a', expectedResult: true},
    {s1: 'a', s2: 'aa', expectedResult: false},
    {s1: 'aa', s2: 'a', expectedResult: false},
    {s1: '', s2: '', expectedResult: true},
]

describe(arePermutations, () => {
    testCases.forEach((tc) => {
        it('should equal', () => {
            const result = arePermutations(tc.s1, tc.s2)
            expect(result).toEqual(tc.expectedResult)
        })
    })
})