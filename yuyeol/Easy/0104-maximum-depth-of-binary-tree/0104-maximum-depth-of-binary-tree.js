var maxDepth = function (root) {
    // 노드의 자녀로 들어온 값이 null인지 체크
    // case1: 리프의 자녀
    // case2: 리프가 아니지만 left 또는 right가 null인 경우
    if (root === null) {
        // 깊이 max에 계산되지 않을 리턴값을 부여
        // 사실상 1보다 작으면 어떤 수든지 상관없음. 
        // max 연산 시 항상 리프의 최솟값인 1과 비교되어 사라지기 때문.
        return 0;  
    }
    
    // 리프에 깊이를 표기.
    if(!root.left && !root.right) {
        // 루트까지 깊이를 카운팅하기 위해 시작점으로 1을 부여함
        return 1;
    }
    
    // 자식 재귀
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);
    
    // 같은 계층 내 깊이가 큰것만 +1 해서 루트로 보내줌
    const depth = Math.max(leftDepth, rightDepth) + 1;
    return depth;
};