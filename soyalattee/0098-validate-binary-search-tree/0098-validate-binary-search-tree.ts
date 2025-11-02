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

function isValidBST(root: TreeNode | null): boolean {
    //left 는 작은거, right는 큰거여야함. 아니면 false; 
    let checker = true;

    //좌우탐색 
    function searchTree(node: TreeNode | null,min:number, max:number){
        if(node === null) return;

        if(node.left && (node.left.val >= node.val || node.left.val <= min)){
            checker = false;
            return;
        }
        
        if(node.right && (node.right.val <= node.val || node.right.val >= max)){
            checker = false;
            return;
        }
        searchTree(node.left, min,node.val)
        searchTree(node.right, node.val, max);
    }

    searchTree(root,-Infinity,Infinity);
    return checker;
};