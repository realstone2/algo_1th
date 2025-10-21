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
    let currentNode = head
    let listLength = 1;

    while(currentNode.next){
        listLength ++
        currentNode = currentNode.next
    }

    if(listLength === 1){
       return null
    }

    if(listLength === n){
        return head.next
    }

    const removeIndex = listLength - n;
    const linkedNodeIndex = removeIndex - 1;

    let listIndex = 0
    let changedNode = head

    while(listIndex !== linkedNodeIndex){
        changedNode = changedNode.next
        listIndex++
    }

    const deletedNode = changedNode.next
    changedNode.next = deletedNode.next;

    return head
    
};