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

    while(curr !==null){
        let next = curr.next; // 다음 노드 임시 저장
        curr.next = prev;     // 방향 뒤집기
        prev = curr;          // prev 한 칸 전진
        curr = next; // 현재노드는 다음노드로 이동  
    }
    return prev
};