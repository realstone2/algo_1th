// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    

    let newNode 
    let currentNode = head

    if(!currentNode){
        return null
    }

    while(currentNode){
        if(newNode){
            const prevCopyNode = new ListNode(newNode.val, newNode.next);
            const currentCopyNode = new ListNode(currentNode.val, prevCopyNode);

            newNode = currentCopyNode;
        }else {
            newNode = new ListNode(currentNode.val);
        }
        currentNode = currentNode.next
    }

    return newNode

};