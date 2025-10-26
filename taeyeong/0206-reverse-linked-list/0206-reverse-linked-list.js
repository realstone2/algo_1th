/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let prev = null;
    let curr = head;

    while (curr) {
        const next = curr.next; // 다음 노드 저장
        curr.next = prev;       // 방향 뒤집기
        prev = curr;            // prev 한 칸 이동
        curr = next;            // curr 한 칸 이동
    }

    return prev; // 새로 뒤집힌 리스트의 head
};