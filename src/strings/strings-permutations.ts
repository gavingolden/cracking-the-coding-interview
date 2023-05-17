export function arePermutations(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) {
        return false
    }
    const l = s1.length
    const map: Record<string, number> = {}
    for (let i = 0; i < l; i++) {
        const char = s1[i]
        map[char] ||= 0
        map[char]++
    }

    for (let i = 0; i < l; i++) {
        const char = s2[i]
        if (!map[char]) {
            return false
        }
        map[char]--
    }
    return true
}