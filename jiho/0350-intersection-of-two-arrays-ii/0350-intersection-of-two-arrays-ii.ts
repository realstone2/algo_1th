function intersect(nums1: number[], nums2: number[]): number[] {
    const result = []
    let i = 0
    let j = 0

    nums1.sort((a, b) => a - b)
    nums2.sort((a, b) => a - b)


    while(i < nums1.length && j < nums2.length) {
        if(nums1[i] === nums2[j]) {
            result.push(nums1[i])
            i ++ 
            j ++

            continue
        }

        if(nums1[i] < nums2[j]) {
            i ++
            continue
        }

        j ++
    }


    return result
};