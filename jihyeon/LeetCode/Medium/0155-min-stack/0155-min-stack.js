
var MinStack = function() {
    this.initial = [];
    this.current = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.current = [...this.current, val];
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.current = this.current.slice(0, this.current.length - 1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.current.at(-1);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.current);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */