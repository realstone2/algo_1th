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
var isPalindrome = function(head) {
    const reverseHead = new ListNode();
    
    while(head){
        const newNode = newListNode();
        head = head.next;
    }

    return list.join('') === list.reverse().join('')

};