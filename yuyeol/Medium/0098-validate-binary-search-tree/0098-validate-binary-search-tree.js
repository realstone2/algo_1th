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

// 현재 코드가 놓치는 점: 루트 값 범위를 넘어서는 노드를 감지하지 못한다
// 예: 5의 오른쪽 자식 3은 5보다 작을 수 없는데, 루트(5)와의 비교 없이 부모(6)만 보고 넘어간다.
// var isValidBST = function(root) {
//     // 더이상 순회할 루트가 없으면 BST 조건 검증이 필요없으므로 통과시킴
//     if(!root) return true;
    
//     const isRightVaild = isValidBST(root.right);
//     const isLeftValid = isValidBST(root.left);

//     if(root.left && root.val <= root.left.val) return false;
//     if(root.right && root.val >= root.right.val) return false;
    
//     return isRightVaild && isLeftValid
// };

function isValid(node, min, max) {
    // 더이상 순회할 루트가 없으면 BST 조건 검증이 필요없으므로 통과시킴
    if(!node) return true;
    
    if(node.val <= min || node.val >= max) return false;
    
    // left & right 범위를 재귀마다 한계 좁힘
    // 이렇게 하지않으면 서브트리의 경계가 부모트리 루트밸류 기준 제한 범위를 넘어버림
    return isValid(node.left, min, node.val) && 
           isValid(node.right, node.val, max);
}

var isValidBST = function(root) {
    // 최초 재귀호출은 양쪽으로 제한이 없으므로 인피니티
    return isValid(root, -Infinity, Infinity);
};