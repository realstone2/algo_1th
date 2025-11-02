// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeNthFromEnd = function(head, n) {
  // 더미(dummy) 노드를 만들어 head 앞에 붙임 (삭제가 head일 경우 대비)
  let dummy = new ListNode(0);
  dummy.next = head;

  let fast = dummy;
  let slow = dummy;

  // fast를 n+1 만큼 먼저 이동시킴 (slow가 삭제 직전 노드에서 멈추도록)
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }

  // fast가 끝까지 갈 때까지 slow와 fast를 함께 이동
  while (fast !== null) {
    fast = fast.next;
    slow = slow.next;
  }

  // slow.next가 삭제할 노드
  slow.next = slow.next.next;

  return dummy.next;
};