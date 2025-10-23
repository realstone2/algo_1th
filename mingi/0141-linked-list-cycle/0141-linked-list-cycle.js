/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head || !head.next) {
        return false;
    }

    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;      // 느린 포인터는 한 칸 이동
        fast = fast.next.next; // 빠른 포인터는 두 칸 이동

        if (slow === fast) {
            return true;
        }
    }
    return false;
};