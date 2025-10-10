function firstUniqChar(s: string): number {
    const 배열 = s.split('');
    
    for (let i = 0; i < 배열.length; i++) {
        let 중복 = false;
        
        for (let j = 0; j < 배열.length; j++) {
            if (i !== j && 배열[i] === 배열[j]) {
                중복 = true;
                break;
            }
        }
        
        if (!중복) {
            return i;  
        }
    }
    
    return -1;  
};