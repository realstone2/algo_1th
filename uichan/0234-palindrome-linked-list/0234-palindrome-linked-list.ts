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

function isPalindrome(head: ListNode | null): boolean {
    if (head === null || head.next === null) {
        return true;
    }

    // 중간 지점 찾기
    let slow: ListNode = head;
    let fast: ListNode = head;
    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next!;
        fast = fast.next.next;
    }

    // 중간 지점 다음 노드부터 뒤집기
    let prev: ListNode | null = null;
    let current: ListNode | null = slow.next;
    while (current !== null) {
        const nextTemp: ListNode | null = current.next;
        current.next = prev;
        prev = current;
        current = nextTemp;
    }
    slow.next = prev;

    // 팰린드롬 여부 확인
    let left: ListNode | null = head;
    let right: ListNode | null = slow.next;
    while (right !== null) {
        if (left!.val !== right.val) {
            return false;
        }
        left = left!.next;
        right = right.next;
    }

    return true;
};