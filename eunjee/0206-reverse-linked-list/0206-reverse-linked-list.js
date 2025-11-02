/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (head === null) {
        return head;
    }

    const values = [];

    let currentNode = head;

    while (true) {
        values.push(currentNode.val);
        
        if (!currentNode.next) {
            break;
        }

        currentNode = currentNode.next;

    }
    console.log(values)

    let index = 0;
    currentNode = head;

    while (true) {
        currentNode.val = values[values.length - index - 1];

        if (!currentNode.next) {
            break;
        }

        currentNode = currentNode.next
        index++;
    }

    return head;
};