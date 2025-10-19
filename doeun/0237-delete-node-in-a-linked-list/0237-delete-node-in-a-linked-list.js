/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function(node) {
    // 다음 노드의 값을 현재 노드에 복사
    node.val = node.next.val;
    
    // 다음 노드를 건너뛰기
    node.next = node.next.next;
    //??????
};