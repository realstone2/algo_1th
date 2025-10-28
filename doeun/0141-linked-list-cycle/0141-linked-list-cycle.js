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
 
 const hasCycle = function(head) {
    // 빈 리스트나 노드가 1개면 사이클 없음
    if (!head || !head.next) return false;
    
    // 토끼와 거북이 (Floyd's Cycle Detection)
    let slow = head;      // 한 칸씩 이동
    let fast = head;      // 두 칸씩 이동
    
    while (fast && fast.next) {
        slow = slow.next;           // 1칸
        fast = fast.next.next;      // 2칸
        
        // 만나면 사이클 있음
        if (slow === fast) {
            return true;
        }
    }
    
    // fast가 끝(null)에 도달하면 사이클 없음
    return false;
};