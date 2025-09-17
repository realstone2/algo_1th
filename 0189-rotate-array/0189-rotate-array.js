/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// var rotate = function(nums, k) {
//     const lastIndex = nums.length - 1;

//     let count = 0
//     let temp 
//     while(count < k){
//         temp = nums[lastIndex];
//         for(let i = lastIndex; i > 0; i --) {
//             nums[i] = nums[i-1];
//         }
//         nums[0] = temp

//         count ++
//     }    
// };
//시간 복잡도 때문에 계속 틀림 ㅜㅜ 진짜 어떻게 풀어야될지 모르겠음; GPT 선생님께 여쭤봄 ㅜㅜ 

var rotate = function(nums, k) {
  const n = nums.length;

  k = k % n; // k가 n보다 크면 보정
  if (k === 0) return;


  // 배열의 일부를 뒤집는 함수
  function reverse(start, end) {
    while (start < end) {
      [nums[start], nums[end]] = [nums[end], nums[start]]; // swap
      start++;
      end--;
    }
  }
    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
};

//전체를 뒤집어버리기
//k번째 이전까지 뒤집어서 순서맞추기
//k번째 이후 뒤집어서 순서맞추기