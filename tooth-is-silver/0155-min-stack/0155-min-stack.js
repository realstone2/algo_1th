
var MinStack = function() {
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    const prev = [...this.stack]
    this.stack = [...prev, val]
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const prev = [...this.stack]
    this.stack = prev.slice(0, prev.length - 1)
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const idx = this.stack.length - 1
    return this.stack[idx]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    const min = Math.min(...this.stack)
    return min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */