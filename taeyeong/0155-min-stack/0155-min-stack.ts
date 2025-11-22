class MinStack {
    private stack: number[];      // 실제 값 저장
    private minStack: number[];   // 최소값 추적 스택

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val: number): void {
        this.stack.push(val);

        // 최소 스택이 비어있거나, 새로운 값이 현재 최소값보다 작거나 같으면 push
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    pop(): void {
        const removed = this.stack.pop();

        // 최소 스택의 top과 같으면 같이 제거
        if (removed !== undefined && removed === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */