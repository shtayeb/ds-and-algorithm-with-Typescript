class Node<T> {
    value: T;
    next: null;
    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

export default class SinglyLinkedList<T> {
    // Indicates the number of items currently present in our list
    public size: number;
    public head:Node<T> | null;


    constructor(value: string | number, next: number) {
        this.head = null;
        this.size = 0;
    }

    prepend(item: T): void {}
    insertAt(item: T, idx: number): void {}
    append(item: T): void {}
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}
