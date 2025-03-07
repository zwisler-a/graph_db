export class Stack<T> {
    private items: T[] = [];
    private capacity: number;

    constructor(capacity: number) {
        this.capacity = capacity;
    }

    push(item: T): void {
        if (this.items.length < this.capacity) {
            this.items.push(item);
        } else {
            throw new Error("Stack overflow: Maximum capacity reached");
        }
    }

    pop(): T | undefined {
        return this.items.pop();
    }

    peek(): T | undefined {
        return this.items[this.items.length - 1];
    }

    toList() {
        return [...this.items];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
}