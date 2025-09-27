function twoSum(nums: number[], target: number): number[] {
    const map = new Map()

    for(const [i, num] of nums.entries()) {
        const rest = target - num

        if(map.has(num)) {
            return [map.get(num), i]

        } 
            map.set(rest, i)

    }
};