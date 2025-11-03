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
    // traversal : 모든 구간을 순회한다 - 노드를 한번씩 다 탐색한다
    // BFS로 도전해보자
    if(!root) return []

    const result = []
    const queue = []

    queue.push(root)

    while(queue.length){
        let level = []
        let queueLength = queue.length

        for(let i = 0 ; i < queueLength; i++){
            let node = queue.shift()

            level.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
        result.push(level)
    }

    return result


};