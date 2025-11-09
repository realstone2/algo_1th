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
const levelOrder = (root) => {
  if (!root) return [];
  
  const result = [];
  let currentLevel = [root];
  
  while (currentLevel.length > 0) {
    result.push(currentLevel.map(node => node.val));
    
    currentLevel = currentLevel.flatMap(node => 
      [node.left, node.right].filter(child => child !== null)
    );
  }
  
  return result;
};