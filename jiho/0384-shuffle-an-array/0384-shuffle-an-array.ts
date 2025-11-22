class Solution {
    nums: number[]

    constructor(nums: number[]) {
        this.nums = nums
    }

    reset(): number[] {
        return [...this.nums]
    }

    shuffle(): number[] {
        const temp = [...this.nums]

        for(let i = temp.length - 1 ; i > 0 ; i --) {
            const j = Math.floor(Math.random() * (i + 1));
            [temp[i], temp[j]] = [temp[j], temp[i]]
        }

        return temp   
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */