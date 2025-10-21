/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    // 음.. 우선은 반복문을 돌면서 val의 값을 확인하자
    // 확인한 val의 값을 배열에 넣는다
    // 배열을 reverse해서 순서대로 넣는 작업을 진행하자 

    if (!head) return null

    let curr = head
    let valList = []

    while (curr){
        valList.push(curr.val)
        curr = curr.next
    }

    valList = valList.reverse()

    const reversedHead = new ListNode(valList[0])

    let current = reversedHead

    for (let i = 1 ; i < valList.length; i++){
        current.next = new ListNode(valList[i])
        current = current.next
    }

    return reversedHead

};