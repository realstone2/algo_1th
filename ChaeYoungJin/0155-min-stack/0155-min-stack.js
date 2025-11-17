var MinStack = function() {
    this.stack = [];     // 메인 스택
    this.minStack = [];  // 최소값 스택
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    
    // minStack이 비어있거나, 새 값이 현재 최소값 이하면 추가
    if (this.minStack.length === 0 || val <= this.getMin()) {
        this.minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const popped = this.stack.pop();
    
    // 제거된 값이 최소값이면 minStack에서도 제거
    if (popped === this.getMin()) {
        this.minStack.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};