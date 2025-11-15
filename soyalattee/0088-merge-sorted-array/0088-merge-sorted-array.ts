/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let p1 = m - 1;         // nums1 유효구간 마지막 인자(제일 큰 값)
    let p2 = n - 1;         // nums2의 마지막 인자(제일 큰 값)
    let p = m + n - 1;     //num1의 맨 뒷칸 

    while (p1 >= 0 && p2 >= 0) {
        if (nums1[p1] > nums2[p2]) {
            nums1[p] = nums1[p1]; // 큰숫자를 맨뒤에 삽입.
             p1--;
        } else {
            nums1[p] = nums2[p2]; // 위와 동일 
            p2--;
        }
        p--; // 앞칸으로 땡기기 
    }

    //num2 값이 아직 남았다면, 채워넣기 
    while (p2 >= 0) {
        nums1[p] = nums2[p2];
        p--;
        p2--;
    }
};