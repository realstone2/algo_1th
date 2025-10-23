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
    let dummy = new ListNode(0);
    let current = dummy // 이 기준으로 시작

    // 양쪽 중 하나가 null이면 한쪽에 붙임
    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1
            list1 = list1.next // 다음노드로 자리 바꿈
        } else {
            current.next = list2
            list2 = list2.next
        }
        current = current.next
    }

    // 둘 중에 null이 아닌 노드리스트가 있으면 끝에 붙여버리기
    if (list1 !== null) current.next = list1
    if (list2 !== null) current.next = list2

    return dummy.next
};