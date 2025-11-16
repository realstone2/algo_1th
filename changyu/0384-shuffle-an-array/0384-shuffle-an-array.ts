class Solution {
  private original: number[];
  private array: number[];

  constructor(nums: number[]) {
    this.original = [...nums];
    this.array = [...nums];
  }

  reset(): number[] {
    this.array = [...this.original];
    return this.array;
  }

  shuffle(): number[] {
    for (let i = 0; i < this.array.length; i++) {
      const j = i + Math.floor(Math.random() * (this.array.length - i));
      [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
    }
    return this.array;
  }
}
