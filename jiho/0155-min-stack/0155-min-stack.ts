class MinStack {
    private minStack:number[]
    private stack:number[]

    constructor() {   
        this.stack = []
        this.minStack = []
    }

    push(val: number): void {
        const min = this.minStack.at(-1) ?? val

        this.stack.push(val)
        this.minStack.push(Math.min(val, min))
    }

    pop(): void {
        this.stack.pop()
        this.minStack.pop()
    }

    top(): number {
        return this.stack.at(-1)
    }

    getMin(): number {
        return this.minStack.at(-1)
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