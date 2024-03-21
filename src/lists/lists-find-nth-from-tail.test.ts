import {LinkedList, LinkedListNode} from "./linked-list";

function findNthLast<T>(list: LinkedList<T>, n: number): LinkedListNode<T> {
    if (n < 0) {
        throw new Error("count must be greater than zero")
    }
    if (n >= list.length) {
        throw new Error(`can't remove node ${n} from tail of list with length ${list.length}`)
    }
    if (!list.head) {
        throw new Error("expected non-null node")
    }

    let target: LinkedListNode<T> = list.head
    let runner: LinkedListNode<T> = list.head

    for (let i = 0; i < n; i++) {
        if (!runner.next) {
            throw new Error("unexpected non-null node")
        }
        runner = runner.next
    }
    while (runner.next) {
        runner = runner.next
        target = target.next!
    }
    return target
}

describe('findNthLast', () => {
    type testCase = Partial<{
        input: LinkedList<any>,
        n: number,
        expectedResult: number,
        expectError: boolean,
    }>

    const testCases: Array<testCase> = [
            {
                input: new LinkedList<number>().append(0).append(1).append(2),
                n: 0,
                expectedResult: 2,
                expectError: false
            },
            {
                input: new LinkedList<number>().append(0).append(1).append(2),
                n: 1,
                expectedResult: 1,
                expectError: false
            },
            {
                input: new LinkedList<number>().append(0).append(1).append(2),
                n: 2,
                expectedResult: 0,
                expectError: false
            },
            {
                input: new LinkedList<number>().append(0).append(1).append(2),
                n: 3,
                expectedResult: undefined,
                expectError: true
            },
            {
                input: new LinkedList<number>().append(0).append(1).append(2),
                n: -1,
                expectedResult: undefined,
                expectError: true
            },
        ]
    ;[findNthLast].forEach((fn) => {
        describe(fn, () => {
            testCases.forEach((tc) => {
                it('should equal', () => {
                    const testFn = () => fn(tc.input!, tc.n!)
                    if (tc.expectError) {
                        expect(testFn).toThrow()
                    } else {
                        const result = testFn()
                        expect(result.val).toEqual(tc.expectedResult)
                    }
                })
            })
        })
    })
})
