function intersect(nums1: number[], nums2: number[]): number[] {
    const result = [];
    const map1 = new Map();
    for(let num of nums1){
        const cnt = (map1.get(num) || 0 ) + 1;
        map1.set(num,cnt)
    }

    for(let num of nums2){
        if(map1.has(num)){
            result.push(num);
            const cnt = (map1.get(num) || 0 ) -1;
            if(cnt === 0) {
                map1.delete(num);
            }else{
            map1.set(num,cnt);
            }
        }
    }
    return result;
};