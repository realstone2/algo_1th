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
    if(!head) return false;
    
    let first = head;
    let second = head;

    while( second.next && second.next.next){
        first = first.next;
        second = second.next.next;

        if(first === second) return true;
    }

    return false;
};