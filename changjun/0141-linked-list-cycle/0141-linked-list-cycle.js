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
       if (!head || !head.next) return false;

    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;           // 한 칸 이동
        fast = fast.next.next;      // 두 칸 이동

        if (slow === fast) {        // 만약 만난다면 사이클 존재
            return true;
        }
    }

    return false; // fast가 끝까지 도달하면 사이클 없음
};