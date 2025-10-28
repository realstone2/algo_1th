/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  const dummy = new ListNode(-1);
  let tail = dummy;
  let p1 = list1, p2 = list2;

  while (p1 !== null && p2 !== null) {
    if (p1.val <= p2.val) {
      tail.next = p1;
      p1 = p1.next;
    } else {
      tail.next = p2;
      p2 = p2.next;
    }
    tail = tail.next;
  }

  // 남은 꼬리 이어 붙이기 (둘 중 하나만 남아 있음)
  tail.next = (p1 !== null) ? p1 : p2;

  return dummy.next;
};
