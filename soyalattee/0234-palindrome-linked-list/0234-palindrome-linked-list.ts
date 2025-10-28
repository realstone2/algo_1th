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

function isPalindrome(head: ListNode | null): boolean {
  if (!head || !head.next) return true;

  let slow: ListNode | null = head; //중간 
  let fast: ListNode | null = head; //끝 
  while (fast?.next && fast.next.next) {
    slow = slow!.next;
    fast = fast.next.next;
  }

  // 2) 후반부 역순 (slow.next부터 시작)
  let second = reverseList(slow!.next);
  let first = head;

  // 3) 앞/뒤 비교
  let p1: ListNode | null = first;
  let p2: ListNode | null = second;
  let ok = true;
  while (p2) {
    if (p1!.val !== p2.val) {
      ok = false;
      break;
    }
    p1 = p1!.next;
    p2 = p2.next;
  }

  return ok;
};

function reverseList(head: ListNode | null): ListNode | null {
  let prev: ListNode | null = null;
  let curr: ListNode | null = head;
  while (curr) {
    const nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}
