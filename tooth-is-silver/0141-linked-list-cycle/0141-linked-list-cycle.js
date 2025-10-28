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

    const arr = []

    let current = head;
    while (current !== null) {
        if (arr.indexOf(current) >= 0) return true
        arr.push(current)
        current = current.next
    }
    return false
};