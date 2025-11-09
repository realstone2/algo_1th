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
var levelOrder = function(root) {
    if(root == null) return []

    const queue = [root]
    const answer = []

    while(queue.length > 0) {
        const size = queue.length;  // 이번 레벨의 노드 수
        const level = [];

        for (let i = 0; i < size; i++) {
            const node = queue.shift();     // 큐 pop
            level.push(node.val);
            if (node.left)  queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        answer.push(level);
    }

    return answer
};