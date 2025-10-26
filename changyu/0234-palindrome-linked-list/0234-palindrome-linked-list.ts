function isPalindrome(head) {
  const values = [];
  let curr = head;
  
  while (curr) {
    values.push(curr.val);
    curr = curr.next;
  }

  let left = 0, right = values.length - 1;
  while (left < right) {
    if (values[left] !== values[right]) return false;
    left++;
    right--;
  }

  return true;
}