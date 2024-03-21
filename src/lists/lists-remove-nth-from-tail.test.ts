import {LinkedList, LinkedListNode} from "./linked-list";

/**
 * Removes nth node from the tail. Zero is the last node (the tail), 1 is the node before the tail, etc
 */
function removeNthLast<T>(list: LinkedList<T>, n: number): LinkedList<T> {
    if (n < 0) {
        throw new Error("count must be greater than zero")
    }
    if (n >= list.length) {
        throw new Error(`can't remove node ${n} from tail of list with length ${list.length}`)
    }
    if (n == list.length - 1) {
        //  We're removing head node
        list.head = list.head?.next
        list.length--
        return list
    }
    if (!list.head) {
        throw new Error("unexpected missing head node")
    }
    let target: LinkedListNode<T> = list.head
    let runner: LinkedListNode<T> = list.head

    // look for node in front of node N because we need to change that nodes `next`
    const targetN = n + 1

    for (let i = 0; i < targetN; i++) {
        runner = runner.next!
    }
    while (runner.next) {
        runner = runner.next
        target = target.next!
    }
    // target.next is node N that we want to remove
    target.next = target.next?.next
    return list
}

describe('removeNthFromTail', () => {
    type testCase = Partial<{
        input: LinkedList<any>,
        n: number,
        expectedResult: any[] | undefined,
        expectError: boolean,
    }>

    const testCases: Array<testCase> = [
            {
                input: new LinkedList<number>().append(0).append(1).append(2),
                n: 0,
                expectedResult: [0, 1],
            },
            {
                input: new LinkedList<number>().append(0).append(1).append(2),
                n: 1,
                expectedResult: [0, 2],
            },
            {
                input: new LinkedList<number>().append(0).append(1).append(2),
                n: 2,
                expectedResult: [1, 2],
            },
            {input: new LinkedList<number>().append(0), n: 0, expectedResult: []},
            {input: new LinkedList<number>(), n: 0, expectError: true},
            {input: new LinkedList<number>().append(0), n: 1, expectError: true},
            {input: new LinkedList<number>().append(0), n: -1, expectError: true},
        ]
    ;[removeNthLast].forEach((fn) => {
        describe(fn, () => {
            testCases.forEach((tc) => {
                it('should equal', () => {
                    const testFn = () => fn(tc.input!, tc.n!)
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
