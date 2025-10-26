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
 
const removeNthFromEnd = function(head, n) {
    let nodes = [];
    let curr = head;
    
    // 모든 노드를 배열에 저장
    while (curr) {
        nodes.push(curr);
        curr = curr.next;
    }
    
    let len = nodes.length;
    let removeIdx = len - n;
    
    // 첫 번째 노드 삭제
    if (removeIdx === 0) {
        return head.next;
    }
    
    // 중간/끝 노드 삭제
    nodes[removeIdx - 1].next = nodes[removeIdx].next;
    
    return head;
};