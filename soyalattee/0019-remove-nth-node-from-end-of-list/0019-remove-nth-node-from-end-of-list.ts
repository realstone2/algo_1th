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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {

  let headLength = 1;
  let headPointer = head;
  while(true){
    if(headPointer.next !==null){
        headLength++;
        headPointer = headPointer.next;

    }else{
        break;
    }
  }

  let nthIdx = headLength - n;
  let count = 0;
  let pointer:ListNode = head;
  while(count <= nthIdx){
    if(nthIdx === 0){
        head = head.next;
        break;
    }

    if(count !== nthIdx-1){
        pointer = pointer.next;
        count++;
    }else{
        if(pointer.next === null){
            break;
        }
        const nextNode:ListNode = pointer.next.next;
        pointer.next = nextNode;
        break;
    }
  }

  return head;
};