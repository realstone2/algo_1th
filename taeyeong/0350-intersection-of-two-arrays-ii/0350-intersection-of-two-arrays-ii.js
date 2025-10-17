/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

 // 이번에도 Map을 사용해서 푸는 문제였다 Map이 생각보다 많이 나오나본데?

var intersect = function(nums1, nums2) {
  const map = new Map();
  const result = [];

  // nums1의 등장 횟수 기록
  for (let n of nums1) {
    map.set(n, (map.get(n) || 0) + 1);
  }

  // nums2 순회하면서 공통된 값 찾기
  for (let n of nums2) {
    if (map.has(n) && map.get(n) > 0) {
      result.push(n);
      map.set(n, map.get(n) - 1); // 카운트 줄이기
    }
  }

  return result;
};