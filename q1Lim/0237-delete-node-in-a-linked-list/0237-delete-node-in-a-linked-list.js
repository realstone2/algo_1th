/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    // node가 null이거나 next가 없을 경우, null로 return 한다
    // node.val에 노드의 

    if (node.val === null || node.next === null){
        return null
    }
    
    node.val = node.next.val
    node.next = node.next.next
    
};