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
    let levels = []; // 원소: [root],[...1층], [...2층] 
    if(root === null) return [];
    function explore(node:TreeNode | null,level:number){
        if(node === null) return;

        if(levels[level]){
            levels[level].push(node.val);
        }else{
            levels[level] = [node.val];
        }
        explore(node.left, level+1)
        explore(node.right, level+1)
    }

    explore(root,0);
    return levels;
};