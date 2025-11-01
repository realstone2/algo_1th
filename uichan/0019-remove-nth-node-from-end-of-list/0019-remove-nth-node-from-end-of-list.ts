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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    // 더미 노드를 생성하여 head 앞에 위치시킵니다.
    const dummy = new ListNode(0);
    dummy.next = head;

    // 두 개의 포인터 first와 second를 더미 노드에서 시작합니다.
    let first = dummy;
    let second = dummy;

    // first 포인터를 n만큼 이동시킵니다.
    for (let i = 0; i < n; i++) {
        first = first.next!;
    }

    // first 포인터가 리스트의 끝에 도달할 때까지 first와 second를 함께 이동시킵니다.
    while (first.next !== null) {
        first = first.next;
        second = second.next!;
    }

    // second 포인터의 다음 노드를 제거합니다.
    second.next = second.next!.next;

    // 더미 노드의 다음 노드를 반환합니다.
    return dummy.next;
}