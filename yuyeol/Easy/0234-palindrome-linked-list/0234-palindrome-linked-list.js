/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if(!head.next) return true;
    if(!head.next.next) return head.val === head.next.val;

    let slow = head;
    let fast = head;

    // 짝수 [1,2,3,4]:
    // slow=1, fast=1 → slow=2, fast=3
    // fast.next=4, fast.next.next=null → 종료
    // slow는 2에서 멈춤 (중간 직전)
    
    // 홀수 [1,2,3,4,5]:
    // slow=1, fast=1 → slow=2, fast=3
    // fast.next=4, fast.next.next=5 → 한번 더
    // slow=3, fast=5
    // fast.next=null → 종료
    // slow는 3에서 멈춤 (중간)
    
    // 짝수의경우 fast.next.next 부터 없고, 홀수의경우 fast.next 부터 없음
    while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // slow.next부터 리스트를 뒤집기
    let prev = null;
    let current = slow.next;
    while(current) {
        let next = current.next;
        current.next = prev; // 노드의 방향을 반대로 전환
        prev = current; // 새로운 헤드 설정
        current = next; // 다음 노드로 이동
    }

    // 전체 리스트와 뒤집은 후반부를 후반부 길이만큼 순회비교
    let wholeList = head;           
    let reversedRear = prev;
    
    while (reversedRear) {
        if (wholeList.val !== reversedRear.val) return false;
        wholeList = wholeList.next;
        reversedRear = reversedRear.next;
    }

    return true;
};