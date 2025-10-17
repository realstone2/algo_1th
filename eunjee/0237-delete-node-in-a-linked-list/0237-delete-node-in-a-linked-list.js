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
    let currentNode = node;

    while (true) {
        currentNode.val = currentNode.next.val;
        
        if (currentNode.next.next === null) {
            currentNode.next = null
            break;
        }

        currentNode = currentNode.next;
    }
};