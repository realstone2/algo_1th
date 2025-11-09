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
    let checker = true;

    function exploreNode(node1: TreeNode | null , node2: TreeNode | null){
        if(node1 === null &&node2 === null) return;
        if(node1 === null || node2 === null){
            checker = false;
            return;
        }

        if(node1.val === node2.val){
            exploreNode(node1.left,node2.right);
            exploreNode(node1.right,node2.left);     
        }else{
            checker = false;
            return;
        }
    }

    exploreNode(root.left, root.right);
    
    return checker;
};