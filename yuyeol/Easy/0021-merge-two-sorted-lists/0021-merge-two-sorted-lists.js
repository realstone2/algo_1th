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
    // 리스트를 합칠 공간 (생성 시 기본값으로 val: 0이 들어감)
    const mergedList = new ListNode(0)
    // mergedList의 포인터 위치를 제어하기 위해 따로 초기화
    // current = current.next를 한다고 해서 mergedList의 포인터 위치가 변경되는 것은 아님
    let current = mergedList;

    while(list1 && list2) {
        // 값을 비교하여 작은 것 부터 mergedList에 추가
        if(list1.val <= list2.val) {
            // 리스트의 next로 새 포인터를 붙임
            current.next = new ListNode(list1.val);
            // 다음 탐색을 위해 next를 가리키게 함 (current, list 둘 다)
            current = current.next;
            list1 = list1.next;
        } else {
            current.next = new ListNode(list2.val);
            current = current.next;
            list2 = list2.next;
        }
    }
    // while문을 탈출하고도 next가 남은 list(무조건 1, 2 둘 중 하나만 남음)는 
    // next가 몇개든 간에 정렬되어 있으므로 그대로 mergedList에 이어 붙임
    if (list1) current.next = list1;
    if (list2) current.next = list2;

    // 기본값으로 있었던 val: 0을 건너뛰고 다음 포인터를 리턴
    return mergedList.next
};