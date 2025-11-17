class Solution {
    private original: number[];
    private array: number[];

    constructor(nums: number[]) {
        this.original = [...nums]; // 원본 저장
        this.array = [...nums];   // 작업용 배열
    }

    reset(): number[] {
        this.array = [...this.original];
        return this.array;
    }

    shuffle(): number[] {
        for (let i = this.array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // 0 ~ i 중 랜덤 인덱스
            [this.array[i], this.array[j]] = [this.array[j], this.array[i]]; // swap
        }
        return this.array;
    }
}

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */