/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    // 흠 뭔가 이것도 dfs?같은 걸로 계속 탐색해서 값이 잘못되어있는지 확인해보자
    
    let min = -Infinity
    let max = +Infinity
    if(!root) return true

    const dfs = (node, min, max) => {

        if(!node) return true

        if(node.val <= min || node.val >= max) {
            return false
        }

        // min : 이 노드가 가져야할 최소 허용값
        // max : 이 노드가 가져야할 최대 허용값
        // 갱신의 방향 부모 -> 자식 기준으로 왼쪽과 오른쪽으로 내려갈 때 각각 새로운 범위를 만들어 전달 

        return dfs(node.left, min, node.val) && dfs(node.right, node.val, max)

    }

    return dfs(root, min, max)

};