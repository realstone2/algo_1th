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

function isSymmetric(root: TreeNode | null): boolean {
    if (root === null) return true;
    
    const stack: (TreeNode | null)[] = [root.left, root.right];
    
    while (stack.length > 0) {
        const right = stack.pop();
        const left = stack.pop();
        
        if (left === null && right === null) continue;
        
        if (left === null || right === null || left.val !== right.val) {
            return false;
        }
        
        stack.push(left.left, right.right);
        stack.push(left.right, right.left);
    }
    
    return true;
}