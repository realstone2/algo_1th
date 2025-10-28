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
const reverseList = function(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        let next = current.next;  // 다음 노드 저장
        current.next = prev;       // 현재 노드의 next를 이전 노드로
        prev = current;            // prev를 현재 노드로 이동
        current = next;            // current를 다음 노드로 이동
    }
    
    return prev;  // prev가 새로운 head
};