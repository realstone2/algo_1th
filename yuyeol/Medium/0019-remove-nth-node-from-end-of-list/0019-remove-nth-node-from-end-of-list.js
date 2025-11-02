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
var removeNthFromEnd = function(head, n) {
    // linked-list의 길이를 구함
    let current = head;
    let length = 0
    while(current) {
        length++;
        current = current.next
    }

    // 첫번째 리스트를 제거하려면 prev를 사용할 수 없으므로 예외처리
    if (n === length) return head.next; 
    
    let prev = head;
    // n은 뒤에서 n번째를 가리키므로  prev를 찾기 위해 n - 1까지 탐색
    for(let i = 0; i < length - n - 1; i++) {
        prev = prev.next;
    }
    // prev의 next를 다다음 노드로 초기화
    prev.next = prev.next.next;

    // 동일 참조의 값을 제어한것이므로 head를 그대로 리턴
    return head;
};