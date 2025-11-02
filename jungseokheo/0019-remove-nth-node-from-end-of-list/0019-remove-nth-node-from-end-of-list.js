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
const removeNthFromEnd = function(head, n) {
    let current = head;
    let count = 0;

    while (current !== null) {
        count++;
        current = current.next;
    }

    let removeIndex = count - n;

    if (removeIndex === 0) {
        return head.next;
    }

    let current2 = head;
    for (let i = 0; i < removeIndex - 1; i++) {
        current2 = current2.next;
    }

    current2.next = current2.next.next;

    return head;
};