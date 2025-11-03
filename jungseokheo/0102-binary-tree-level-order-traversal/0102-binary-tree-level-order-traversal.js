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
 * @return {number[][]}
 */
const levelOrder = function(root) {
    if (root === null) return [];
    let result = [];
    let queue = [root];

    while (queue.length > 0) {
        let qLength = queue.length;
        let currentLevel = [];

        for (let i = 0; i < qLength; i++) {
            let node = queue.shift();
            currentLevel.push(node.val);
            
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
            
        }

        result.push(currentLevel);
    }

    return result;
};