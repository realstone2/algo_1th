/**
 * @param {number[]} nums
 * @return {boolean}
 */


  // Set은 중복을 허용하지 않음
  // Set의 크기와 배열 길이가 다르면 중복이 있다는 뜻
const containsDuplicate = (nums) => {
  const unique = new Set(nums);
  
  return unique.size !== nums.length;
};