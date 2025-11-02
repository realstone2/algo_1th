/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *   this.val = (val===undefined ? 0 : val)
 *   this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  if (!head || !head.next) return true;

  // 1) 중간 찾기 (slow: 중간, fast: 끝)
  let slow = head, fast = head, prev = null;
  while (fast && fast.next) {
    prev = slow;
    slow = slow.next;
    fast = fast.next.next;
  }

  // 2) 리스트를 두 절반으로 분리
  //    fast가 null이 아니면 길이가 홀수 → slow는 정확히 가운데
  //    fast가 null이면 길이가 짝수 → slow는 오른쪽 절반의 시작
  let second = fast ? slow.next : slow;
  // 첫 절반 끝을 끊어서 분리
  prev.next = null;

  // 3) 오른쪽 절반 뒤집기
  let secondRev = reverse(second);

  // 4) 좌/우 비교
  let p1 = head, p2 = secondRev;
  let ok = true;
  while (p1 && p2) {
    if (p1.val !== p2.val) { ok = false; break; }
    p1 = p1.next;
    p2 = p2.next;
  }

  // 5) (선택) 원상복구
  let restoredSecond = reverse(secondRev);
  if (fast) {
    // 홀수 길이: prev는 가운데 노드(slow)
    prev.next = slow;      // 가운데 다시 연결
    slow.next = restoredSecond;
  } else {
    // 짝수 길이: prev는 왼쪽 끝, slow는 오른쪽 시작
    prev.next = restoredSecond;
  }

  return ok;
};

// 단일 연결 리스트 뒤집기
function reverse(head) {
  let prev = null, cur = head;
  while (cur) {
    const nxt = cur.next;
    cur.next = prev;
    prev = cur;
    cur = nxt;
  }
  return prev;
}
