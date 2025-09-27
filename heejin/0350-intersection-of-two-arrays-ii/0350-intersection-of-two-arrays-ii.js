/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

 // 두 배열의 교집합을 찾아 중복도 반영하여 반환 (정렬 + 투 포인터 방식)
const intersect = (nums1, nums2) => {
    nums1.sort((a, b) => a - b);
    nums2.sort((a, b) => a - b);

    let i = 0, j = 0;
    const result = [];

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] === nums2[j]) {
            result.push(nums1[i]);
            i++; j++;
        } else if (nums1[i] < nums2[j]) {
            i++;
        } else {
            j++;
        }
    }

    return result;
};