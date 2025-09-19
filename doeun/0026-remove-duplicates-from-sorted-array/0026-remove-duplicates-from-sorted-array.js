// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// const removeDuplicates = function (nums) {
//   return [...new Set(nums)];
// };

//배열 제자리에서 수정하라 했는데 새 배열을 만들어 버림... 

//**배열을 제자리(in-place)에서 수정!!**

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let k = 1; // 고유 원소가 채워질 위치
  for (let i = 1; i < nums.length; i++) {
    //뒷자리랑 비교해서 다르면 덮어쓰기
    if (nums[i] !== nums[i - 1]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};
