function firstUniqChar(s: string): number {
    const map = new Map()
    const TARGET_COUNT = 1

    for(const char of s) map.set(char, (map.get(char) ?? 0) + 1)

    for (const [i, char] of s.split('').entries()) {
        if(map.get(char) === TARGET_COUNT) return i
    }

    return -1
};