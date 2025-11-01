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
    let nextNode = node.next;

    while (true) {
        currentNode.val = nextNode.val;
        
        if (nextNode.next === null) {
            currentNode.next = null
            break;
        }

        currentNode = nextNode;
        nextNode = currentNode.next;
    }
};