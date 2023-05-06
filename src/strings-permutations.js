function arePermutations(s1, s2) {
    if (s1.length !== s2.length) {
        return false;
    }
    var l = s1.length;
    var map = {};
    for (var i = 0; i < l; i++) {
        var char = s1[i];
        map[char] || (map[char] = 0);
        map[char]++;
    }
    for (var i = 0; i < l; i++) {
        var char = s2[i];
        if (!map[char]) {
            return false;
        }
        map[char]--;
    }
    return true;
}
var testCases = [
    { s1: 'abc', s2: 'cba', expectedResult: true },
    { s1: 'abc', s2: 'abc', expectedResult: true },
    { s1: 'abc', s2: 'cbb', expectedResult: false },
    { s1: 'a', s2: 'c', expectedResult: false },
    { s1: 'a', s2: 'a', expectedResult: true },
    { s1: 'a', s2: 'aa', expectedResult: false },
    { s1: 'aa', s2: 'a', expectedResult: false },
    { s1: '', s2: '', expectedResult: true },
];
testCases.forEach(function (tc, i) {
    var result = arePermutations(tc.s1, tc.s2);
    if (result === tc.expectedResult) {
        console.log("\u2705 Test ".concat(i, ": \"").concat(tc.s1, "\" and \"").concat(tc.s2, "\""));
    }
    else {
        console.log("\u274C Test ".concat(i, ": \"").concat(tc.s1, "\" and \"").concat(tc.s2, "\" failed. Expected [").concat(tc.expectedResult, "] but got [").concat(result, "]"));
    }
});
