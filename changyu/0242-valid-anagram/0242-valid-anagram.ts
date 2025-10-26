function isAnagram(s: string, t: string): boolean {
	if (s.length !== t.length) return false;

	const base = 97;
	const cnt = new Int16Array(26);

	for (let i = 0; i < s.length; i++) {
		cnt[s.charCodeAt(i) - base]++;
		cnt[t.charCodeAt(i) - base]--;
	}

	for (let i = 0; i < 26; i++) {
		if (cnt[i] !== 0) return false;
	}
    
	return true;
}
