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

 // 재귀(DFS) 풀이
var isSymmetric = function(root) {
    if (!root) return true; // 빈 트리는 대칭

    // 두 노드를 비교하는 헬퍼 함수
    function isMirror(left, right) {
        if (!left && !right) return true;   // 둘 다 null → 대칭
        if (!left || !right) return false;  // 하나만 null → 대칭 아님
        if (left.val !== right.val) return false; // 값이 다르면 아님

        // 왼쪽의 왼쪽 ↔ 오른쪽의 오른쪽
        // 왼쪽의 오른쪽 ↔ 오른쪽의 왼쪽
        return (
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left)
        );
    }

    return isMirror(root.left, root.right);
};


// 반복문(BFS) 방식 (Queue 이용)
// var isSymmetric = function(root) {
//     if (!root) return true;
//     let queue = [root.left, root.right];

//     while (queue.length) {
//         let left = queue.shift();
//         let right = queue.shift();

//         if (!left && !right) continue;
//         if (!left || !right) return false;
//         if (left.val !== right.val) return false;

//         // 대칭 순서로 삽입
//         queue.push(left.left);
//         queue.push(right.right);
//         queue.push(left.right);
//         queue.push(right.left);
//     }

//     return true;
// };