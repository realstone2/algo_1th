/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *   this.val = val;
 *   this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) return false;

  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;         // 한 칸
    fast = fast.next.next;    // 두 칸
    if (slow === fast) return true; // 만났다면 사이클
  }

  return false; // fast가 끝에 도달 → 사이클 없음
};
