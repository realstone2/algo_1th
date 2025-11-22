
var MinStack = function() {
    this.stack = []; // 명령한 값을 넣고 빼는 스택
    this.minStack = []; // 명령한 값을 넣고 빼는 시점 해당 인덱스의 최소값으로 이루어진 스택. 원래는 원시값 변수로 사용하려했는데 그럴 경우 pop을 대응할 수 없음
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if(this.minStack.length === 0 ) {
        // 배열이 비었으면 비교할 필요 없이 무조건 val이 최소값
        this.minStack.push(val);
    } else {
        // minStack에 비교할 원소가 존재할 때
        // val이 더 작으면 val이 새로운 최소값으로 추가됨
        if(val < this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        // 기존 최소값이 더 작으면 기존 최소값으로 추가됨
        } else {
            this.minStack.push(this.minStack[this.minStack.length - 1])
        }
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    // 두 스택은 항상 같은 길이, 순서로 유지되어야 하므로 pop할때도 함께 함
    this.stack.pop();
    this.minStack.pop();
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
    // minStack의 마지막 원소가 현 시점의 최소값임
    return this.minStack[this.minStack.length - 1];
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */