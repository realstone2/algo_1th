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
var isSymmetric = function(root) {
    // 대칭이 되는지 확인
    if (root === null) return true;

    const queue = [root.left, root.right];

    while (queue.length > 0) {
        const left = queue.shift();
        const right = queue.shift();

        if (left === null && right === null) continue;

        // 한쪽만 널이거나, 양쪽 값이 다를떄
        if (left === null || right === null || left.val !== right.val) return false; 

        queue.push(left.left, right.right);
        queue.push(left.right, right.left)
    }

    return true
};