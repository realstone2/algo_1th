/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {

    let length = 0;
    let currentNode = head;

    while (true) {
        length++;

        if (currentNode.next === null) {
            break;
        }

        currentNode = currentNode.next;
    }

    const indexToRemove = length - n;

    let currentIndex = 0;
    currentNode = head;

    if (indexToRemove === 0) {
        head = head.next
        return head
    }

    while (currentIndex < length) {
        if (currentIndex + 1 === indexToRemove) {
            currentNode.next = currentNode.next.next;
        }
        currentIndex++;
        if (currentNode.next) currentNode = currentNode.next;
    }

    return head;
};