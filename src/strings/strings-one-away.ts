export function oneAway(s1: string, s2: string): boolean {
    if (s1.length === s2.length) {
        return oneEditAway(s1, s2)
    } else {
        return oneInsertOrRemoveAway(s1, s2)
    }
}

function oneInsertOrRemoveAway(s1: string, s2: string): boolean {
    let shortS = s1.length < s2.length ? s1 : s2
    let longS = s1.length < s2.length ? s2 : s1

    if (longS.length - shortS.length > 1) {
        return false
    }

    let shortI = 0, longI = 0
    while (shortI < shortS.length && longI < longS.length) {
        if (shortS[shortI] === longS[longI]) {
            shortI++
            longI++
        } else {
            longI++
        }

        if (longI - shortI > 1) {
            return false
        }
    }
    return true
}

function oneEditAway(s1: string, s2: string): boolean {
    if (s1.length !== s2.length) {
        return false
    }

    let i1 = 0, i2 = 0, differences = 0
    while (i1 < s1.length && i2 < s2.length) {
        if (s1[i1] === s2[i2]) {
            i1++
            i2++
        } else if (differences > 0) {
            return false
        } else {
            differences++
            i1++
            i2++
        }
    }
    return true
}