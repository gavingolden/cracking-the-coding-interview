function compression(input: string): string {
    if (input.length <= 1) {
        return input
    }
    const output = Array<string>()
    let count = 1
    let prevChar = input[0]
    for (let i = 1; i < input.length; i++) {
        const currChar = input[i]
        if (currChar === prevChar) {
            count++
        } else {
            output.push(prevChar, `${count}`)
            count = 1
            prevChar = currChar
        }
    }
    output.push(prevChar, `${count}`)
    const result = output.join('')
    return result.length < input.length ? result : input
}

describe(compression, () => {
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
    testCases.forEach((tc) => {
        it('should equal', () => {
            const result = compression(tc.input)
            expect(result).toEqual(tc.expectedResult)
        })
    })
})