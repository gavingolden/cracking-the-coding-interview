export function compression(input: string): string {
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
