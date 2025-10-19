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
    // 1. 다음 칸의 숫자를 내 칸으로 복사
    node.val = node.next.val;
    
    // 2. 다음 칸을 건너뛰고 그 다음 칸과 연결
    node.next = node.next.next;
};