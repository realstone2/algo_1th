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
const removeNthFromEnd = (head, n) => {
    let length = 0;
    let current = head;
    while (current !== null) {
        length++;
        current = current.next;
    }
    
    const targetIndex = length - n;
    
    if (targetIndex === 0) {
        return head.next;
    }
    
    current = head;
    for (let i = 0; i < targetIndex - 1; i++) {
        current = current.next;
    }
    
    current.next = current.next.next;
    
    return head;
};