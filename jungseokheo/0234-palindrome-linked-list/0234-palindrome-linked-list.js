/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
    const array = [];
    let current = head;

    while (current !== null) {
        array.push(current.val);
        current = current.next;
    }

    let first = 0;
    let last = array.length - 1;

    while (array.length / 2 > first) {
        if (array[first] !== array[last]) {
            return false;
        }
        first++;
        last--;
    }
    return true;
};