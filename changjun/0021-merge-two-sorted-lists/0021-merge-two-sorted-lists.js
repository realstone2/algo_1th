/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // 더미(dummy) 노드를 만들어서 결과 리스트의 시작점을 잡음
    let dummy = new ListNode(-1);
    let current = dummy;

    // 두 리스트가 모두 비어있지 않을 때까지 반복
    while (list1 && list2) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    // 남아있는 노드가 있으면 이어붙임
    current.next = list1 ? list1 : list2;

    // dummy 다음 노드가 실제 머리(head)
    return dummy.next;
};