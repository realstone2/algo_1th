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
var isPalindrome = function(head) {
    // 배열을 쓰자
    // 배열에 넣고 양 사이드으로 비교해가면서 확인하기

    const valList = []
    let curr = head

    while(curr){
        valList.push(curr.val)
        curr = curr.next
    }

    let left = 0
    let right = valList.length -1

    while (left < right){
        if (valList[left] !== valList[right]) return false
        left++
        right--
    }

    return true
};