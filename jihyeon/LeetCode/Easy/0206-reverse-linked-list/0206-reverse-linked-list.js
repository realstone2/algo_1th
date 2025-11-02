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
    const arr = [];
    let temp = head;
    while(temp !== null){
        arr.push(temp.val);
        temp = temp.next;
    }

    let dummy = new ListNode();
    let current = dummy;
    arr.reverse();
    arr.forEach(x => {
        current.next = new ListNode(x);
        current = current.next;
    });
    return dummy.next;
};