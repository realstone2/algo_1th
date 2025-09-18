function containsDuplicate(nums: number[]): boolean {

    const numsMap = new Map();

    for(let num of nums){
        if(numsMap.has(num)){
            return true;
        }
        numsMap.set(num,"")
    }
    return false;
};