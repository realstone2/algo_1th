/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
    if(!root)return []

    const result = []

    const bfs = (root) => {
        const queue = []
        
        queue[0] = [root]

        while(queue.length > 0) {
            const pick = queue.shift()!
            const currentValues = []
            const nextValues = []

            for(const {val, left, right} of pick) {
                currentValues.push(val)
                if(left) nextValues.push(left)
                if(right) nextValues.push(right)
            }

            result.push(currentValues)
            if(nextValues.length>0) queue.push(nextValues)
        }

    }

    bfs(root)

    return result
    
};