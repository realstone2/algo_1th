/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

const createNumsCountObj = (nums) => {
    const numsCountObj = {}
    for (let i = 0; i < nums.length; i++) {
        if(Object.keys(numsCountObj).includes(String(nums[i]))) {
            numsCountObj[nums[i]] += 1;
        } else {
            numsCountObj[nums[i]] = 1;
        }
    }
    return numsCountObj;
}

var intersect = function(nums1, nums2) {
    // 원소를 key, 갯수를 value로 가지는 객체로 두 배열 변환
    const numsCountObj1 = createNumsCountObj(nums1)
    const numsCountObj2 = createNumsCountObj(nums2)
    const objKeys1 = Object.keys(numsCountObj1);
    const objKeys2 = Object.keys(numsCountObj2);

    // 두 객체가 공통적으로 가지고있는 아이템 배열에 저장
    const commonItems = []
    for(let i = 0; i < objKeys1.length; i++) {
        if(numsCountObj2[objKeys1[i]]) {
            commonItems.push(Number(objKeys1[i]))
        }
    }

    // 저장된 공통 아이템을 갯수만큼 배열에 추가
    const result = []
    for(let i = 0; i < commonItems.length; i++) {
        const commonItem = commonItems[i];
        for(j = 0; j < Math.min(numsCountObj1[commonItem], numsCountObj2[commonItem]); j++) {
            result.push(commonItems[i])
        }
    }
    return result;
};