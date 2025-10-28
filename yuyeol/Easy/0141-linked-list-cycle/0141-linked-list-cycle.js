/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 기존 set을 사용해서 갯수를 기록하려고 시도
// - while로 next 탐색
// - 거쳐온 노드들을 기록 (Set 또는 배열 사용)
// - 기록된 노드가 아니라면 다음 탐색
// - 기록된 노드라면 true 리턴 (사이클 발견)
// - next가 null이면 while 탈출하고 false 리턴
// 하지만 공간복잡도 1을 사용하라고해서 set은 리스트 길이에 따라 공간이 증가하므로 투포인터로 진행.

var hasCycle = function(head) {
    
    let fast = head;
    let slow = head;

    // fast.next까지 검사하는 이유: cycle이 없는 리스트를 거르기 위함
    while(fast && fast.next) {
        // 두 탐색은 속도가 다르므로 cycle이 있는 리스트이니 같은것을 찾을때까지 계속해서 리스트를 순회함.
        fast = fast.next.next;
        slow = slow.next;
        if(fast === slow) return true;
    }
    return false;
};