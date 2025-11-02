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
    let current = head;
    while (current) {
        let next = current.next;
        // current의 next(포인터) 방향을 바꿔 prev를 가리키게함
        current.next = prev;
        // prev는 해당 while문 current의 새로운 head임.
        prev = current;
        // 다음 while문 실행을 위해 커렌트 지정
        current = next;
    }
    return prev;
};