/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

 /** 
  여러 해결 방법이 있다고 하는데 가장 이해가 된 접근법은 뒤집기 접근법이였다.
  1. 배열 전체를 뒤집고
  2. 앞에서 k 개를 뒤집고
  3. 나머지 n-k 개를 뒤집는다.

  처음에 그냥 줄줄이 소시지로 오른쪽으로 한 칸씩 k번 이동시키는 걸로 생각했는데 
  당연히 이 방법은 시간 복잡도? 가 ~일때 연산을 너무 많이해서 시간 초과가 생긴다고 한다. 
  */

var rotate = function(nums, k) {
 
    let n = nums.length;
    k = k % n; // 배열 크기보다 클 수도 있으니 나머지만큼만 회전

    // 배열 일부를 뒤집는 함수 (in-place)
    function reverse(start, end) {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]]; // swap
            start++;
            end--;
        }
    }

    // 1. 전체 뒤집기
    reverse(0, n - 1);
    // 2. 앞쪽 k개 뒤집기
    reverse(0, k - 1);
    // 3. 뒤쪽 n-k개 뒤집기
    reverse(k, n - 1);
};