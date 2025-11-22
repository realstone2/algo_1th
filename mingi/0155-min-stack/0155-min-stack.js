/**
 * MinStack() initializes the stack object.
 */
var MinStack = function() {
    this.stack = []; 
    this.minStack = []; 
};

/**
 * void push(int val) pushes the element val onto the stack.
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    
    const currentMin = this.minStack.length > 0 ? this.minStack[this.minStack.length - 1] : Infinity;
    
    if (val <= currentMin) {
        this.minStack.push(val);
    }
};

/**
 * void pop() removes the element on the top of the stack.
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const topValue = this.stack.pop();
    
    if (topValue === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop();
    }
};

/**
 * int top() gets the top element of the stack.
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * int getMin() retrieves the minimum element in the stack.
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

/** * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */