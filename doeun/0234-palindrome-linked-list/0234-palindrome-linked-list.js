/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
    const values = [];
    let current = head;
    
    // 모든 값을 배열에 저장
    while (current) {
        values.push(current.val);
        current = current.next;
    }
    
    // 양 끝에서 비교
    let left = 0;
    let right = values.length - 1;
    
    while (left < right) {
        if (values[left] !== values[right]) {
            return false;
        }
        left++;
        right--;
    }
    
    return true;
};