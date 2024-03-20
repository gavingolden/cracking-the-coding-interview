export class LinkedList<T> {
    public head: LinkedListNode<T> | undefined = undefined
    public tail: LinkedListNode<T> | undefined = undefined
    public length: number = 0


    public append(val: T): LinkedList<T> {
        const node: LinkedListNode<T> = new LinkedListNode(val)
        if (this.tail == undefined) {
            this.head = node
            this.tail = node
            this.length = 1
            return this
        } else {
            this.tail.next = node
            this.tail = node
            this.length++
            return this
        }
    }

    public toArray(): T[] {
        const result: T[] = []
        let node = this.head
        while (node != undefined) {
            result.push(node.val)
            node = node.next
        }
        return result
    }
}

export class LinkedListNode<T> {
    public next: LinkedListNode<T> | undefined = undefined

    constructor(public val: T) {
    }
}