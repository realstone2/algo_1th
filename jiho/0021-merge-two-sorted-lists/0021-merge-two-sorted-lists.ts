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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {

    let left = list1
    let right = list2
    const newList = new ListNode ()
    let current = newList

    while(left && right) {
        if(left.val < right.val) {
            current.next = left
            left = left.next
        }else {
            current.next = right
            right = right.next
        }

        current = current.next
    }

    if(left) {
        current.next = left
    }else {
        current.next = right
    }
    
    return newList.next
};