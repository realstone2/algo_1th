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
var deleteNode = function(node) {
    // 노드는 prev는 못보고 next만 확인가능하다.
    // 노드의 연결을 끊으려면 다음다음 연결을 이어주면 끊긴다
    node.val = node.next.val;
    node.next = node.next.next;
};