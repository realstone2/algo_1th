/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
    let pointer:ListNode | null = head;
    let prev: ListNode | null ;
    while(true){
        if(pointer){
            let cur:ListNode = new ListNode(pointer.val, prev);
            prev = cur;
            pointer = pointer.next;
        }else{
            break;
        }
    }

    return prev ? prev : head;    
};