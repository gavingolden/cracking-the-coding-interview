import {LinkedList, LinkedListNode} from "./linked-list";

/**
 * Removes nth node from the tail. Zero is the last node (the tail), 1 is the node before the tail, etc
 */
function removeNthLast<T>(list: LinkedList<T>, count: number): LinkedList<T> {
    if (count < 0) {
        throw new Error("count must be greater than zero")
    }
    if (count >= list.length) {
        throw new Error(`can't remove node ${count} from tail of list with length ${list.length}`)
    }
    if (count == list.length - 1) {
        // remove head
        list.head = list.head?.next
        list.length--
        return list
    }

    let beforeTarget: LinkedListNode<T> | undefined = list.head
    let lead: LinkedListNode<T> | undefined = list.head
    while (count >= 0 && lead != undefined) {
        lead = lead.next
        count--
    }
    while (lead?.next != undefined) {
        beforeTarget = beforeTarget?.next
        lead = lead.next
    }
    if (beforeTarget == undefined) {
        throw new Error("invalid state: predecessor node should not be missing")
    }
    beforeTarget.next = beforeTarget.next?.next
    list.length--
    if (beforeTarget.next == undefined) {
        list.tail = beforeTarget
    }
    return list
}

describe('removeNthFromTail', () => {
    type testCase = {
        input: LinkedList<any>,
        remove: number,
        expectedResult: any[] | undefined,
        expectError: boolean,
    }

    const testCases: Array<testCase> = [
            {
                input: new LinkedList<number>().append(0).append(1).append(2),
                remove: 0,
                expectedResult: [0, 1],
                expectError: false
            },
            {
                input: new LinkedList<number>().append(0).append(1).append(2),
                remove: 1,
                expectedResult: [0, 2],
                expectError: false
            },
        {
            input: new LinkedList<number>().append(0).append(1).append(2),
            remove: 2,
            expectedResult: [1, 2],
            expectError: false
        },
        {input: new LinkedList<number>().append(0), remove: 0, expectedResult: [], expectError: false},
        {input: new LinkedList<number>(), remove: 0, expectedResult: undefined, expectError: true},
        {input: new LinkedList<number>().append(0), remove: 1, expectedResult: undefined, expectError: true},
        {input: new LinkedList<number>().append(0), remove: -1, expectedResult: undefined, expectError: true},
        ]
    ;[removeNthLast].forEach((fn) => {
        describe(fn, () => {
            testCases.forEach((tc) => {
                it('should equal', () => {
                    if (tc.expectError) {
                        expect(() => fn(tc.input, tc.remove)).toThrow()
                    } else {
                        const result = fn(tc.input, tc.remove)
                        const resultArray = result.toArray()
                        expect(resultArray).toEqual(tc.expectedResult)
                    }
                })
            })
        })
    })
})
