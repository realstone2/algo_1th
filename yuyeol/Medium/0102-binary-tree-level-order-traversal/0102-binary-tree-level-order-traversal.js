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

function levelOrder(root) {
    // case3(root=[])에대한 대응
    if (!root) return [];

    // return값
    const result = [];

    // 처리할 계층의 노드 객체를 출입시키는 queue
    const queue = [root];

    // 
    while (queue.length > 0) {
        // 현재 계층이 처리할 노드 갯수(출입이 반복되면서 증감)
        const levelSize = queue.length;
        // 현재 계층의 노드 값으로 이루어진 리스트
        const level = [];

        // queue에 처리할 계층의 노드를 제거, 자녀 노드들(left, right)을 추가
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            // 처리중인 계층의 노드를 계층 리스트에 추가
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        // 수집한 계층의 노드 리스트를 순차적으로 추가
        result.push(level);
    }

    return result;
}