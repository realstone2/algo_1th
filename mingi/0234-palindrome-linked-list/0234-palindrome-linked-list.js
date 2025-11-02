/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next) {
        return true;
    }
    let slow = head; 
    let fast = head; 

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    
    let secondHalfHead = reverseList(slow); 

    let p1 = head; 
    let p2 = secondHalfHead; 

    let isPalin = true; 

    while (p2 !== null) {
        if (p1.val !== p2.val) {
            isPalin = false;
            break; 
        }
        p1 = p1.next;
        p2 = p2.next;
    }

    reverseList(secondHalfHead); 

    return isPalin;
};
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function reverseList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        const nextTemp = current.next;
        current.next = prev; 
        prev = current;      
        current = nextTemp;  
    }
    return prev; 
}