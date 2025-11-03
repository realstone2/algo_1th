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
    if(!root){
        return []
    }

    const array = []

     getTreeArray(root,array,0)
     return array

};

function getTreeArray(root, array, index){
    if(!root){
        return;
    }
    
    if(!array[index]){
        array[index] = Array.from([root.val])
    }else{
        array[index].push(root.val)
    }

    getTreeArray(root.left, array, index + 1)
    getTreeArray(root.right, array, index + 1)

}