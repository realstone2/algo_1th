/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */

var merge = function(nums1, m, nums2, n) {
    // 투포인터 사용
    let index1 = m - 1;
    let index2 = n - 1;
    // nums1에 in-place로 들어가므로 nums1의 길이만큼 순회
    // 뒷칸부터 채워넣어야 교체 중에 사라지는 원소가 없을 것으로 예상
    // 0의 자리를 모두 소진해서 nums1의 교체되어야할 원소가 덮어써지는 경우는 없을까? 생각했으나,
    // 0의 자리는 nums2와 길이가 같으므로 모든 nums2의 원소가 nums1의 원소보다 커도 덮어써지는 경우는 발생하지않음
    for (let i = nums1.length - 1; i >= 0; i--) {
        // index2의 아이템이 소진되었을 경우 index1만 채워넣음
        if(index2 < 0 || (nums1[index1] >= nums2[index2])) {
            nums1[i] = nums1[index1];
            index1--;
        } else {
            nums1[i] = nums2[index2];
            index2--;
        }
    }
    
};