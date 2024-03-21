import {LinkedList, LinkedListNode} from "./linked-list";


function deleteMiddleNode<T>(node: LinkedListNode<T>): LinkedListNode<T> {
    if (!node.next) {
        throw new Error("can't delete tail")
    }
    node.val = node.next.val
    node.next = node.next.next
    return node
}

describe('deleteMiddleNode', () => {
    type testCase = {
        startingList: LinkedList<any>,
        nodeSelector: (node: LinkedList<any>) => LinkedListNode<any>,
        expectedResult?: any[],
        expectError?: boolean,
    }

    const testCases: Array<testCase> = [
            {
                startingList: new LinkedList<number>().append(0).append(1).append(2).append(3),
                nodeSelector: (list) => list.head?.next!,
                expectedResult: [0, 2, 3],
            },
            {
                startingList: new LinkedList<number>().append(0).append(1).append(2).append(3),
                nodeSelector: (list) => list.head?.next?.next!,
                expectedResult: [0, 1, 3],
            },
            {
                startingList: new LinkedList<number>().append(0).append(1).append(2).append(3),
                nodeSelector: (list) => list.head?.next?.next?.next!,
                expectError: true,
            },
        ]
    ;[deleteMiddleNode].forEach((fn) => {
        describe(fn, () => {
            testCases.forEach((tc) => {
                it('should equal', () => {
                    const node = tc.nodeSelector(tc.startingList!)
                    const testFn = () => fn(node)
                    if (tc.expectError) {
                        expect(testFn).toThrow()
                    } else {
                        testFn()
                        const resultArray = tc.startingList.toArray()
                        expect(resultArray).toEqual(tc.expectedResult)
                    }
                })
            })
        })
    })
})
