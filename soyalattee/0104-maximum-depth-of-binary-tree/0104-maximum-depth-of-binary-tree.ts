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

function maxDepth(root: TreeNode | null): number {
    if(root === null) return 0;
    let maxDepth = 1;

    function drill(node:TreeNode | null, depth: number){
        if(node === null){
            if(maxDepth < depth-1){
                maxDepth = depth-1;   
            }
            return;
        }

        drill(node.left, depth+1);
        drill(node.right, depth+1);
    }

    drill(root,1);

    return maxDepth;
};