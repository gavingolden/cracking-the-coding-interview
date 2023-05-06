function urlify(str: string, length: number): string {
    let targetIndex = str.length - 1, sourceIndex = length - 1
    const output = Array<string>(str.length)
    while (targetIndex >= 0 && sourceIndex >= 0) {
        // b
        const sourceChar = str[sourceIndex]
        if (sourceChar === ' ') {
            output[targetIndex] = '0'
            output[targetIndex - 1] = '2'
            output[targetIndex - 2] = '%'
            targetIndex -= 3
            sourceIndex--
        } else {
            output[targetIndex] = sourceChar
            targetIndex--
            sourceIndex--
        }
    }
    return output.join("")
}

type testCase = {
    str: string,
    length: number,
    expectedResult: string,
}

const testCases: Array<testCase> = [
    {str: "a b  ", length: 3, expectedResult: "a%20b"},
    {str: "Mr John Smith    ", length: 13, expectedResult: "Mr%20John%20Smith"},
    {str: "a  d    ", length: 4, expectedResult: "a%20%20d"},
]

testCases.forEach((tc, i) => {
    const result = urlify(tc.str, tc.length)
    if (result === tc.expectedResult) {
        console.info(`✅ Test ${i}: input %O`, tc)
    } else {
        console.error(`❌ Test ${i}: input %O actual %O`, tc, result)
    }
})