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
    const arr = [];
    let temp = head;
    while(temp !== null){
        arr.push(temp.val);
        temp = temp.next;
    }

    arr.splice(arr.length - n, 1);

    let dummy = new ListNode();
    let current = dummy;
    for(let val of arr){
        current.next = new ListNode(val);
        current = current.next;
    }
    return dummy.next;
};