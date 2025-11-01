/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 더미 노드 추가 (삭제 시 head가 바뀔 수도 있으므로)
    let dummy = new ListNode(0, head);
    let fast = dummy;
    let slow = dummy;

    // fast를 n칸 먼저 이동
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // fast가 끝에 도달할 때까지 slow도 함께 이동
    while (fast.next) {
        fast = fast.next;
        slow = slow.next;
    }

    // slow.next가 삭제할 노드
    slow.next = slow.next.next;

    return dummy.next;  
};