
var MinStack = function() {
    this.min = Infinity;
    this.stack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.min = Math.min(this.min, val)
    this.stack.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const popItem = this.stack.pop();

    if(popItem === this.min){
        const min = this.stack.reduce((min, cur, index)=> {
            if(cur < min){
                minIndex = index;
                return cur;
            }
            return min;
        }, Infinity)
        this.min = min
    }
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */