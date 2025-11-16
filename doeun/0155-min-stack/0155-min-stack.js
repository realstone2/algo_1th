/**
 * MinStack 클래스 생성자
 * 두 개의 스택을 초기화합니다
 */
var MinStack = function() {
    this.stack = [];     // 실제 값들을 저장하는 메인 스택
    this.minStack = [];  // 각 시점의 최솟값을 저장하는 보조 스택
};

/** 
 * 스택에 값을 추가합니다
 * @param {number} val - 추가할 값
 * @return {void}
 * 
 * 시간복잡도: O(1)
 */
MinStack.prototype.push = function(val) {
    // 1. 메인 스택에 값 추가
    this.stack.push(val);
    
    // 2. minStack에도 현재 시점의 최솟값 추가
    if (this.minStack.length === 0) {
        // minStack이 비어있으면 현재 값이 최소
        this.minStack.push(val);
    } else if (val <= this.minStack[this.minStack.length - 1]) {
        // 새 값이 현재 최솟값보다 작거나 같으면 새 값이 최소
        // 주의: <= 를 사용해야 중복 값도 제대로 처리됨
        this.minStack.push(val);
    } else {
        // 새 값이 현재 최솟값보다 크면 기존 최솟값 유지
        this.minStack.push(this.minStack[this.minStack.length - 1]);
    }
};

/**
 * 스택의 최상단 요소를 제거합니다
 * @return {void}
 * 
 * 시간복잡도: O(1)
 */
MinStack.prototype.pop = function() {
    // 메인 스택과 minStack을 동시에 pop
    // 이렇게 하면 두 스택의 길이가 항상 동일하게 유지됨
    this.stack.pop();
    this.minStack.pop();
    
    // pop 후 minStack의 top이 자동으로 이전 시점의 최솟값이 됨!
};

/**
 * 스택의 최상단 요소를 반환합니다 (제거하지 않음)
 * @return {number}
 * 
 * 시간복잡도: O(1)
 */
MinStack.prototype.top = function() {
    // 배열의 마지막 요소 반환
    return this.stack[this.stack.length - 1];
};

/**
 * 스택의 최솟값을 O(1) 시간에 반환합니다
 * @return {number}
 * 
 * 시간복잡도: O(1)
 */
MinStack.prototype.getMin = function() {
    // minStack의 top이 현재 스택의 최솟값
    // 매번 전체를 탐색할 필요 없이 바로 반환 가능!
    return this.minStack[this.minStack.length - 1];
};

/** 
 * 사용 예시:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */