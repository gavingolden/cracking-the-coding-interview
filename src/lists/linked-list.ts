export class LinkedList<T> {
    public head: LinkedListNode<T> | undefined = undefined
    public tail: LinkedListNode<T> | undefined = undefined
    public length: number = 0

    constructor(vals?: T[]) {
        if (vals) {
            for (let i = 0; i < vals.length; i++) {
                this.append(vals[i])
            }
        }
    }

    public prepend(val: T): LinkedList<T> {
        if (!this.tail || !this.head) {
            return this.append(val)
        }
        const node: LinkedListNode<T> = new LinkedListNode(val)
        node.next = this.head
        this.head = node
        this.length++
        return this
    }

    public append(val: T): LinkedList<T> {
        const node: LinkedListNode<T> = new LinkedListNode(val)
        if (this.tail == undefined || this.head == undefined) {
            this.head = node
            this.tail = node
            this.length = 1
            return this
        }
        this.tail.next = node
        this.tail = node
        this.length++
        return this
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