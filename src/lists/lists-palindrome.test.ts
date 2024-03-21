import {LinkedList, LinkedListNode} from "./linked-list";


function palindrome(list: LinkedList<number>): boolean {
    if (!list.head) {
        return true
    }
    let left = list.head

    return recursivePalindrome(left.next)

    function recursivePalindrome(right: LinkedListNode<number> | undefined): boolean {
        if (right == undefined) {
            return true
        }
        const previousAreSame = recursivePalindrome(right.next)
        const areSame = left.val == right.val
        left = left.next!
        return areSame && previousAreSame
    }
}

describe('palindrome', () => {
    type testCase = {
        input: LinkedList<number>,
        expectedResult?: boolean,
        expectError?: boolean,
    }

    const testCases: Array<testCase> = [
            {
                input: new LinkedList<number>([]),
                expectedResult: true
            },
            {
                input: new LinkedList<number>([1]),
                expectedResult: true
            },
            {
                input: new LinkedList<number>([1, 1]),
                expectedResult: true
            },
            {
                input: new LinkedList<number>([1, 1, 1]),
                expectedResult: true
            },
            {
                input: new LinkedList<number>([1, 2, 1]),
                expectedResult: true
            },
            {
                input: new LinkedList<number>([1, 2, 3, 3, 2, 1]),
                expectedResult: true
            },
            {
                input: new LinkedList<number>([1, 2]),
                expectedResult: false
            },
            {
                input: new LinkedList<number>([1, 2, 3]),
                expectedResult: false
            },
        ]
    ;[palindrome].forEach((fn) => {
        describe(fn, () => {
            testCases.forEach((tc) => {
                it('should equal', () => {
                    const testFn = () => fn(tc.input)
                    if (tc.expectError) {
                        expect(testFn).toThrow()
                    } else {
                        const result = testFn()
                        expect(result).toEqual(tc.expectedResult)
                    }
                })
            })
        })
    })
})
