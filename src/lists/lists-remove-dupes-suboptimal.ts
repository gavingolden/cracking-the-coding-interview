// O(n) time
// O(n) space
export function removeDupes(input: number[]): number[] {
    const set = new Set<number>()
    const result = new Array<number>()
    input.forEach((e) => {
        if(set.has(e)) {
            return
        }
        result.push(e)
        set.add(e)
    })
    return result
}