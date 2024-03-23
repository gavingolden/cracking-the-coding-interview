import {TreeNode} from "./tree";

function preOrderTraversal<T>(node: TreeNode<T>): T[] {
    const result: T[] = []

    recurse(node, result)

    return result

    function recurse(node: TreeNode<T>, result: T[]) {
        if (!node) {
            return
        }
        result.push(node.value)
        node.children?.forEach((c) => recurse(c, result))
    }
}

describe('preOrderTraversal', () => {
    type testCase = {
        input: TreeNode<number>,
        expectedResult?: any[],
        expectError?: boolean,
    }

    const testCases: Array<testCase> = [
            {
                input: new TreeNode(10, [
                    new TreeNode(5, [
                        new TreeNode(1),
                        new TreeNode(2),
                        new TreeNode(3),
                    ]),
                    new TreeNode(15, [
                        new TreeNode(11),
                        new TreeNode(13),
                        new TreeNode(20),
                    ])
                ]),
                expectedResult: [10, 5, 1, 2, 3, 15, 11, 13, 20]
            }
        ]
    ;[preOrderTraversal].forEach((fn) => {
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
