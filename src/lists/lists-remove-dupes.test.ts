// O(n) time
// O(n) space
function removeDupesNTimeNSpace(input: number[]): number[] {
    if (input.length < 2) {
        return input
    }
    const set = new Set<number>()
    const result = new Array<number>()
    input.forEach((e) => {
        if (set.has(e)) {
            return
        }
        result.push(e)
        set.add(e)
    })
    return result
}

describe('removeDupes', () => {
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
    ;[removeDupesNTimeNSpace, removeDupesN2Time1Space].forEach((fn) => {
        describe(fn, () => {
            testCases.forEach((tc) => {
                it('should equal', () => {
                    const result = fn(tc.input)
                    expect(result).toEqual(tc.expectedResult)
                })
            })
        })
    })
})

function removeDupesN2Time1Space(input: number[]): number[] {
    if (input.length < 2) {
        return input
    }
    const results = [input[0]]
    for (let i = 1; i < input.length; i++) {
        const curr = input[i]
        let dupe = false
        for (let j = i - 1; j >= 0; j--) {
            const prev = input[j]
            if (curr === prev) {
                dupe = true
                break
            }
        }
        if (!dupe) {
            results.push(curr)
        }
    }
    return results
}