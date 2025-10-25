function isPalindrome(s) {
  // 1. 알파벳 + 숫자만 남기고 소문자로 통일
  const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  // 2. 투 포인터로 양쪽 비교
  let left = 0;
  let right = str.length - 1;
  
  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }
  
  return true;
}