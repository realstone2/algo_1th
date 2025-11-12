
var MinStack = function() {
    this.stack = []
    
    // minStack은 원시타입이 아닌 배열 타입으로 두어 최소값을 체크한다
    // 그 이전에 최소였던 값들까지 기록해두어서 pop이 되면 기존 값을 바라볼 수 있도록 
    this.minStack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val)

    if(this.minStack.length === 0 || val <= this.minStack[this.minStack.length -1]){
        this.minStack.push(val)
    }

};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const popped = this.stack.pop()

    if (popped === this.minStack[this.minStack.length -1]){
        this.minStack.pop()
    }
    
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length -1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length -1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */