import {TreeNode} from "./tree";

function inOrderTraversal<T>(node: TreeNode<T>): T[] {
    const result: T[] = []

    recurse(node, result)

    return result

    function recurse(node: TreeNode<T>, result: T[]) {
        if (!node) {
            return
        }
        node.children?.forEach((c) => recurse(c, result))
        result.push(node.value)
    }
}

describe('inOrderTraversal', () => {
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
                expectedResult: [1, 2, 3, 5, 11, 13, 20, 15, 10]
            }
        ]
    ;[inOrderTraversal].forEach((fn) => {
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
