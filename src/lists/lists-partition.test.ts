import {LinkedList} from "./linked-list";

/**
 * Partitions array where all values less than the partition value are to the left
 * of all values that are greater than the partition value. Order within the left/right
 * partitions is not guaranteed.
 * @param list
 * @param partitionValue
 */
function partition<T>(list: LinkedList<T>, partitionValue: T): LinkedList<T> {
    if (list.length <= 1) {
        return list
    }

    let partitionNode = list.head!
    let runnerNode = list.head?.next

    while (partitionNode && runnerNode && partitionNode.val < partitionValue) {
        partitionNode = partitionNode.next!
        runnerNode = runnerNode.next
    }

    while (partitionNode && runnerNode) {
        if (runnerNode.val < partitionValue) {
            const temp = partitionNode.val
            partitionNode.val = runnerNode.val
            runnerNode.val = temp
            partitionNode = partitionNode.next!
            runnerNode = runnerNode.next
            continue
        }
        runnerNode = runnerNode.next
    }

    return list
}

describe('partition', () => {
    type testCase = {
        input: LinkedList<any>,
        partition: number,
        expectedResult?: any[],
        expectError?: boolean,
    }

    const testCases: Array<testCase> = [
            {
                input: new LinkedList<any>().append(10).append(8).append(6).append(4),
                partition: 7,
                expectedResult: [6, 4, 10, 8]
            },
            {
                input: new LinkedList<any>(),
                partition: 7,
                expectedResult: []
            },
            {
                input: new LinkedList<any>().append(10),
                partition: 7,
                expectedResult: [10]
            },
            {
                input: new LinkedList<any>().append(10).append(8).append(6).append(4),
                partition: 11,
                expectedResult: [10, 8, 6, 4]
            },
            {
                input: new LinkedList<any>().append(10).append(8).append(6).append(4),
                partition: 1,
                expectedResult: [10, 8, 6, 4]
            }
        ]
    ;[partition].forEach((fn) => {
        describe(fn, () => {
            testCases.forEach((tc) => {
                it('should equal', () => {
                    const testFn = () => fn(tc.input, tc.partition)
                    if (tc.expectError) {
                        expect(testFn).toThrow()
                    } else {
                        testFn()
                        const resultArray = tc.input.toArray()
                        expect(resultArray).toEqual(tc.expectedResult)
                    }
                })
            })
        })
    })
})
