/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // for문을 돌려야겠지
    // m과 n은 왜 필요할까? -> 0이 있을 수 있기 때문에
    // m개 뒤에 num2의 배열을 붙여서 sort하기
    
    for(let i = 0 ; i < n ; i++){
        nums1[m+i] = nums2[i]
    }
    nums1.sort((a,b) => a-b)
};