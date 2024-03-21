import {LinkedList, LinkedListNode} from "./linked-list";

/**
 * Least significant (smaller) digits come first: [1, 2, 3] = 321
 */
function sumLeastSignificant(left: LinkedList<number>, right: LinkedList<number>): LinkedList<number> {
    const result = new LinkedList<number>()

    let leftNode = left.head
    let rightNode = right.head

    let remainder: number = 0
    while (leftNode || rightNode) {
        const leftVal: number = leftNode?.val || 0
        const rightVal: number = rightNode?.val || 0
        const sum: number = (leftVal + rightVal + remainder)
        const digit: number = sum % 10
        remainder = Math.floor(sum / 10)
        result.append(digit)

        leftNode = leftNode?.next
        rightNode = rightNode?.next
    }
    if (remainder > 0) {
        result.append(remainder)
    }
    return result
}

describe('sumLeastSignificant', () => {
    type testCase = {
        left: LinkedList<number>,
        right: LinkedList<number>,
        expectedResult?: any[],
        expectError?: boolean,
    }

    const testCases: Array<testCase> = [
            {
                left: new LinkedList<number>([9, 8, 7]),
                right: new LinkedList<number>([1, 5]),
                expectedResult: [0, 4, 8]
            },
            {
                left: new LinkedList<number>([9, 9, 9]),
                right: new LinkedList<number>([1]),
                expectedResult: [0, 0, 0, 1]
            },
            {
                left: new LinkedList<number>([1]),
                right: new LinkedList<number>([0]),
                expectedResult: [1]
            },
            {
                left: new LinkedList<number>([]),
                right: new LinkedList<number>([]),
                expectedResult: []
            }
        ]
    ;[sumLeastSignificant].forEach((fn) => {
        describe(fn, () => {
            testCases.forEach((tc) => {
                it('should equal', () => {
                    const testFn = () => fn(tc.left, tc.right)
                    if (tc.expectError) {
                        expect(testFn).toThrow()
                    } else {
                        const result = testFn()
                        const resultArray = result.toArray()
                        expect(resultArray).toEqual(tc.expectedResult)
                    }
                })
            })
        })
    })
})

/**
 * Most significant (larger) digits come first: [1, 2, 3] = 123
 */
function sumMostSignificant(left: LinkedList<number>, right: LinkedList<number>): LinkedList<number> {
    const result = new LinkedList<number>()

    if (left.length > right.length) {
        frontPad(right, left.length - right.length)
    } else if (left.length < right.length) {
        frontPad(left, right.length - left.length)
    }

    const finalRemainder = recursiveAdd(left.head, right.head, result)
    if (finalRemainder > 0) {
        result.prepend(finalRemainder)
    }
    return result

    function frontPad(list: LinkedList<number>, count: number) {
        for (let i = 0; i < count; i++) {
            list.prepend(0)
        }
    }

    function recursiveAdd(
        left: LinkedListNode<number> | undefined,
        right: LinkedListNode<number> | undefined,
        result: LinkedList<number>,
    ): number {
        if (!left && !right) {
            return 0
        }
        const remainder = recursiveAdd(left?.next, right?.next, result)
        const leftVal = left?.val || 0
        const rightVal = right?.val || 0
        const sum = leftVal + rightVal + remainder
        const digit = sum % 10
        const newRemainder = Math.floor(sum / 10)
        result.prepend(digit)
        return newRemainder
    }
}

describe('sumMostSignificant', () => {
    type testCase = {
        left: LinkedList<number>,
        right: LinkedList<number>,
        expectedResult?: any[],
        expectError?: boolean,
    }

    const testCases: Array<testCase> = [
            {
                left: new LinkedList<number>([9, 8, 7]),
                right: new LinkedList<number>([1, 5]),
                expectedResult: [1, 0, 0, 2]
            },
            {
                left: new LinkedList<number>([9, 9, 9]),
                right: new LinkedList<number>([1]),
                expectedResult: [1, 0, 0, 0]
            },
            {
                left: new LinkedList<number>([1]),
                right: new LinkedList<number>([0]),
                expectedResult: [1]
            },
            {
                left: new LinkedList<number>([]),
                right: new LinkedList<number>([]),
                expectedResult: []
            }
        ]
    ;[sumMostSignificant].forEach((fn) => {
        describe(fn, () => {
            testCases.forEach((tc) => {
                it('should equal', () => {
                    const testFn = () => fn(tc.left, tc.right)
                    if (tc.expectError) {
                        expect(testFn).toThrow()
                    } else {
                        const result = testFn()
                        const resultArray = result.toArray()
                        expect(resultArray).toEqual(tc.expectedResult)
                    }
                })
            })
        })
    })
})
