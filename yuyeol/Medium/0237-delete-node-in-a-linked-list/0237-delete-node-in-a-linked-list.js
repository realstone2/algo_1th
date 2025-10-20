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
    // 삭제할 노드의 값을 넥스트로 바꿔준다
    node.val = node.next.val;
    // 대체된 넥스트 노드의 포인터를 그대로 사용한다. 이렇게하면 삭제된 노드는 연결이 끊기고 나머지는 이어붙는다.
    node.next = node.next.next;
};