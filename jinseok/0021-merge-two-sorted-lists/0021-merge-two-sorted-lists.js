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
    let newList = null

    let lastNewNode
    let currentNode1 = list1
    let currentNode2 = list2

    while(currentNode1 || currentNode2){
        if(currentNode1){
            newList = insertNode(newList, currentNode1)
        }
        if(currentNode2){
            newList = insertNode(newList, currentNode2)
        }
        currentNode1 = currentNode1 ? currentNode1.next : null
        currentNode2 = currentNode2 ? currentNode2.next : null
    }
    return newList
};

const insertNode = (list, node) => {

    if(!list){
        return new ListNode(node.val);
    }

    let currentNode = list

    if(currentNode.val > node.val){
        return new ListNode(node.val, currentNode)
    }

    while(currentNode){
        if(node.val >= currentNode.val && (!currentNode.next || currentNode.next.val >= node.val)){
            const tempNode = currentNode.next ? new ListNode(currentNode.next.val, currentNode.next.next) : null
            currentNode.next = new ListNode(node.val, tempNode)

            break;
        }
        currentNode = currentNode.next;
    }


    return list
}