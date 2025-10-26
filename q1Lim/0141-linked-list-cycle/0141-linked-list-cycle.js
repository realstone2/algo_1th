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
    // 토끼와..거북이..어쩌고를 시도해보자

    if(!head) return false

    let tor = head
    let hare = head

    while(hare && hare.next){
        tor = tor.next
        hare = hare.next.next

        if(tor === hare) return true
    }

    return false

};