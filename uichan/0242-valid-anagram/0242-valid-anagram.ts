function isAnagram(s: string, t: string): boolean {
    const s맵 = new Map();
    const t맵 = new Map();
    
    for (const 문자 of s) {
        s맵.set(문자, (s맵.get(문자) || 0) + 1);
    }

    for (const 문자 of t) {
        t맵.set(문자, (t맵.get(문자) || 0) + 1);
    }

    if (s맵.size !== t맵.size) return false;
    
    for (const [key, value] of s맵) {
        if (t맵.get(key) !== value) {
            return false;
        }
    }
    
    return true;
}