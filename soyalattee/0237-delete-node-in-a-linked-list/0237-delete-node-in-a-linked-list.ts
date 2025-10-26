/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

/**
 Do not return anything, modify it in-place instead.
 */
function deleteNode(node: ListNode | null): void {
  if (!node || !node.next) return; 
  
  node.val = node.next.val;      // 다음 노드의 값 현재 노드에 복사
  node.next = node.next.next;    // 다음 노드 건너뛰어 연결
}