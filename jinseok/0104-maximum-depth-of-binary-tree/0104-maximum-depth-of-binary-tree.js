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
 * @return {number}
 */
var maxDepth = function(root) {
    if(!root){
        return 0
    }
    
    return getDeps(root,1);
};

function getDeps(node, deps){

    const left = node?.left ? getDeps(node.left,deps + 1) : deps
    const right = node?.right ? getDeps(node.right,deps + 1) : deps


    return Math.max(left,right)
}