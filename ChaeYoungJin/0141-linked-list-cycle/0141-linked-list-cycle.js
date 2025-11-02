/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 토끼와 거북이... 
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow = head
    let fast = head
    
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
        
        if (slow === fast) {
            return true
        }
    }
    
    return false
};