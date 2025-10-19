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
    let temp = node;
    console.log('node==', node)
    while(temp !== null){
        console.log('temp==',temp)
        temp = temp.next;
    }
    node = node.next;
    
};