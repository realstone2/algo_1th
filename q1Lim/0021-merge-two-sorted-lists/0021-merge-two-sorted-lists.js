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
    /*
    if (!list1) return list2
    if (!list2) return list1

    if (list1.val < list2.val){
        list1.next = mergeTwoLists(list1.next, list2)
        return list1;
    } else {
        list2.next = mergeTwoLists(list1, list2.next)
        return list2;
    }
    */

    // 단순하게 생각해서 갑시다. 재귀는 잘 모르겠다..
    // 하나 공백의 list를 만든다
    // 반복문을 돌면서 값을 비교하면서 작은 것들을 list에 넣는다 
    // 반복문: list1, list2 둘 다  null이 될 때 까지

    // list1 = list.next -> 노드 앞단계로 이동하는 의미

    let dummy = new ListNode(-1)

    let tail = dummy

    while (list1 && list2){
        if (list1.val <= list2.val){
            tail.next = list1
            list1 = list1.next
        }else {
            tail.next = list2
            list2 = list2.next
        }
        tail = tail.next
    }

    tail.next = list1 ? list1 : list2

    return dummy.next

};