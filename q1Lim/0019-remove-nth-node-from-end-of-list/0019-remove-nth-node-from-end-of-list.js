/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // 전체 노드의 길이를 체크하자
    let curr = head
    let length = 0

    while(curr){
        length++
        curr = curr.next
    }

    // length - n 번째 노드의 next를 지우자
    // dummyNode : head가 지워질 경우를 보완하기 위해
    
    const dummyNode = new ListNode(0, head)
    curr = dummyNode
    let steps = length - n

    while(steps > 0){
        curr = curr.next
        steps--
    }

    curr.next = curr.next.next;
    return dummyNode.next
};