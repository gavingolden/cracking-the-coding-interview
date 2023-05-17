import {oneAway} from "./strings-one-away";

type testCase = {
    s1: string,
    s2: string,
    expectedResult: boolean,
}

const testCases: Array<testCase> = [
    {s1: 'pale', s2: 'ple', expectedResult: true},
    {s1: 'pale', s2: 'pile', expectedResult: true},
    {s1: 'pale', s2: 'polo', expectedResult: false},
    {s1: 'pale', s2: 'pal', expectedResult: true},
    {s1: 'ale', s2: 'pale', expectedResult: true},
    {s1: 'a', s2: 'a', expectedResult: true},
    {s1: 'a', s2: 'b', expectedResult: true},
    {s1: 'a', s2: '', expectedResult: true},
    {s1: 'a', s2: 'aaa', expectedResult: false},
    {s1: 'aaa', s2: 'a', expectedResult: false},
    {s1: 'abc', s2: 'cba', expectedResult: false},
]

describe(oneAway, () => {
    testCases.forEach((tc) => {
        it('should equal', () => {
            const result = oneAway(tc.s1, tc.s2)
            expect(result).toEqual(tc.expectedResult)
        })
    })
})
