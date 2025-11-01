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
    let dummy = new ListNode(0);
    dummy.next = head;
    let p1 = dummy;
    let p2 = dummy;

    for (let i = 0; i <= n; i++) {
        p2 = p2.next;
    }

    while (p2 !== null) {
        p1 = p1.next;
        p2 = p2.next;
    }

    p1.next = p1.next.next

    return dummy.next;
};