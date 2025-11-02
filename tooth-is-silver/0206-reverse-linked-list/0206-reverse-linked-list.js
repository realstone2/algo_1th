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
    // head는 node 그자체이다.

    let current = head // 첫번째부터 시작
    let prev = null // 첫번째의 prev는 null

    while (current !== null) { // 현재가 null이 될때까지 이동
        // 다음 노드를 저장
        const next = current.next
        // 현재 next를 prev로 교체
        current.next = prev
        prev = current
        current = next
    }
    return prev
};